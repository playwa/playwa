import { 
  isConstructor, 
  isFunction, 
  Type, 
  WA_SOCKET_METADATA 
} from '@playwajs/common';

export class MetadataScanner {
  public scanMethods<R = any>(
    prototype: object,
    callback: (method: string) => R
  ) {
    return Object.getOwnPropertyNames(prototype)
      .filter(item => !isConstructor(item) && isFunction(prototype[item]))
      .map(callback)
  }

  public *scanServerHooks(instance: Type<object>) {
    for (const property in instance) {
      const key = String(property)

      const isSocket = Reflect.getMetadata(
        WA_SOCKET_METADATA,
        instance,
        key
      )

      if (isSocket)
        yield key
    }
  }
}
