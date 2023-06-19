export function filterRemoteList(list: any[]) {
  // 先过滤出远程组件 再将相同的远程组件去重
  return list
    .filter((v: any) => typeof v.remote === "object")
    .reduce((totalList: any[], item: any) => {
      const i = totalList.findIndex((v: any) => v.type === item.type);
      if (i === -1) {
        totalList.push(item);
      }
      return totalList;
    }, []);
}
