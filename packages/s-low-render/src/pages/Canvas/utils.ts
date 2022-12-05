export const canNestingList = ["LowTabs", "LowTabsPane"];

// 组件是否支持嵌套
function canNesting(type: string) {
  return canNestingList.indexOf(type) > -1;
}

export { canNesting };
