export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  timeout: number = 0
) => {
  if (typeof fn !== "function") {
    throw new Error("fn should be a function");
  }

  let timer = null;
  return function (...args: Parameters<T>) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, timeout);
  };
};
