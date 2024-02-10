import { noop } from 'lodash';

class LocalStorage {
  localStorage = typeof window !== 'undefined'
    ? window.localStorage
    : {
      getItem: noop,
      setItem: noop,
      removeItem: noop
    };

  get(key: string) {
    return this.localStorage.getItem(key);
  }

  set(key: string, value: string) {
    this.localStorage.setItem(key, value);

    return true;
  }

  remove(key: string) {
    return this.localStorage.removeItem(key);
  }
}

export default LocalStorage;
