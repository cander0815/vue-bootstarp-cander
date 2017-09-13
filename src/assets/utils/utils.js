/*
 * 判断一个字符串在某个数组中是否存在
 * text String
 * arr Array
 * */
export function haveValue (text, arr) {
  for (let i of arr) {
    if (i === text) {
      return true;
    }
  }
  return false;
}
