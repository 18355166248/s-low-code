// 组件是否支持嵌套
function canNesting(type: string) {
  return ["div"].indexOf(type) > -1;
}

export { canNesting };
