// 深度优先遍历
function dfs<T extends { children?: T[] }>(data: T, fn: (param: T) => boolean) {
  if (fn(data) === false) return false;

  if (Array.isArray(data?.children)) {
    for (let i = data.children.length - 1; i >= 0; i--) {
      if (!dfs(data.children[i], fn)) return false;
    }
  }

  return true;
}

// 广度优先遍历
function bfs<T extends { children?: T[] }>(data: T, fn: (param: T) => boolean) {
  if (Array.isArray(data?.children)) {
    for (let i = data.children.length - 1; i >= 0; i--) {
      if (!dfs(data.children[i], fn)) return false;
    }
  }

  if (fn(data) === false) return false;

  return true;
}

export { dfs, bfs };
