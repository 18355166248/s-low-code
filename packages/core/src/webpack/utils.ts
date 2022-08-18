import execa from "execa";

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

// 执行命令
export const runCommand = async (
  command: string,
  args?: string[],
  path?: string
): Promise<execa.ExecaChildProcess> => {
  let p = path;
  if (!p) {
    p = process.cwd();
  }
  if (!args) {
    // \s 匹配任何空白字符，包括空格、制表符、换页符
    // eslint-disable-next-line no-param-reassign
    [command, ...args] = command.split(/\s+/);
  }

  return (execa as any)(command, args, {
    cwd: p,
    stdio: "inherit",
  });
};
