/**
 * 处理 require 结果
 */

// copied from https://github.com/babel/babel/blob/56044c7851d583d498f919e9546caddf8f80a72f/packages/babel-helpers/src/helpers.js#L558-L562
export const interopRequireDefault = (obj: any) => {
  return obj && obj.__esModule ? obj : { default: obj };
};
