export function loadAdapter(loader?: Function) {
  try {
    return loader ? loader() : require('@playwajs/client');
  } catch (e) {
    process.exit(1);
  }
};
