/* eslint-disable no-empty */
import { useCallback, useEffect, useState } from "react";

function isFunction(cb: any): cb is Function {
  return typeof cb === "function";
}

const isBrowser = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export interface IFuncUpdater<T> {
  (previousState?: T): T;
}
export interface IFuncStorage {
  (): Storage;
}

export interface Options<T> {
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}

export interface OptionsWithDefaultValue<T> extends Options<T> {
  defaultValue: T | IFuncUpdater<T>;
}

export type StorageStateResult<T> = [
  T | undefined,
  (value?: T | IFuncUpdater<T>) => void
];
export type StorageStateResultHasDefaultValue<T> = [
  T,
  (value?: T | IFuncUpdater<T>) => void
];

function createUseStorageState(getStorage: () => Storage | undefined) {
  function useStorageState<T = any>(
    key: string,
    options?: Options<T>
  ): StorageStateResult<T>;

  function useStorageState<T>(
    key: string,
    options: OptionsWithDefaultValue<T>
  ): StorageStateResultHasDefaultValue<T>;

  function useStorageState<T>(key: string, options?: any) {
    let storage: Storage | undefined;

    try {
      storage = getStorage();
    } catch (err) {
      console.error(err);
    }

    const serializer = (value: T) => {
      if (options?.serializer) {
        return options?.serializer(value);
      }
      return JSON.stringify(value);
    };

    const deserializer = (value: string) => {
      if (options?.deserializer) {
        return options?.deserializer(value);
      }
      return JSON.parse(value);
    };

    function getStoredValue() {
      try {
        const raw = storage?.getItem(key);
        if (raw) {
          return deserializer(raw);
        }
      } catch (e) {
        console.error(e);
      }
      if (isFunction(options?.defaultValue)) {
        return options?.defaultValue();
      }
      return options?.defaultValue;
    }

    const [state, setState] = useState<T | undefined>(() => getStoredValue());

    useEffect(() => {
      setState(getStoredValue());
    }, [key]);

    const updateState = (value?: T | IFuncUpdater<T>) => {
      if (typeof value === "undefined") {
        setState(undefined);
        storage?.removeItem(key);
      } else if (isFunction(value)) {
        const currentState = (value as any)(state);
        try {
          setState(currentState);
          storage?.setItem(key, serializer(currentState));
        } catch (e) {
          console.error(e);
        }
      } else {
        try {
          setState(value);
          storage?.setItem(key, serializer(value as any));
        } catch (e) {
          console.error(e);
        }
      }
    };

    return [state, updateState];
  }
  return useStorageState;
}

const useLocalStorage = createUseStorageState(() =>
  isBrowser ? localStorage : undefined
);

export default useLocalStorage;
