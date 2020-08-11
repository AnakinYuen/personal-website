interface Store {
  [key: string]: string;
}

class ClientStorage implements Storage {
  private store: Store = {};

  get length() {
    return Object.keys(this.store).length;
  }

  public clear() {
    this.store = {};
  }

  public key(index: number) {
    const keys = Object.keys(this.store);
    return keys[index] || null;
  }

  public getItem(key: string) {
    return this.store[key] || null;
  }

  public removeItem(key: string) {
    delete this.store[key];
  }

  public setItem(key: string, value: string) {
    this.store[key] = value;
  }
}

let storage: Storage;

export const getClientStorage = (): Storage => {
  if (storage === undefined) {
    try {
      sessionStorage;
      storage = sessionStorage;
    } catch (e) {
      storage = new ClientStorage();
    }
  }
  return storage;
};
