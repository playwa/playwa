import {
  MESSAGES,
  WAContainer,
  MessageExplorer,
  callModuleBootstrapHook,
  callModuleInitHook
} from '@playwajs/core';

import { LoggerService } from '@playwajs/common';
import { WAClient } from '@playwajs/platform-socket';

export class WAApplication {
  private socketRef: WAClient;
  private messageExplorer: MessageExplorer;
  private readonly logger = new LoggerService(WAApplication.name);

  constructor(private readonly container: WAContainer) {
    this.socketRef = this.container.getSocket();
    this.messageExplorer = new MessageExplorer(this.container);
  }

  public async listen() {
    this.messageExplorer.explore();
    this.socketRef.listen();

    await this.callModulesHooks();
    this.logger.log(MESSAGES.APPLICATION_READY);

    return this;
  }

  public async useSaveCreds(saveCreds: () => Promise<any>) {
    this.socketRef.useSaveCreds(saveCreds);
  }

  protected async callModulesHooks() {
    const modules = this.container.getModules().values();

    for (const moduleRef of modules) {
      await callModuleBootstrapHook(moduleRef);
      await callModuleInitHook(moduleRef);
    }
  }
}
