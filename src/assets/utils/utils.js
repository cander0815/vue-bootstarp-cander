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

export function findChild (context, childName, childrens = []) {
  const childs = context.$children;
  childs.length && childs.forEach(v => {
    let name = v.$options.name;
    let child = v.$children;
    let grandSon = [];
    if (name === childName) childrens.push(v);
    if (child.length) grandSon = findChild(v, childName);
    if (grandSon.length) childrens.push(grandSon);
  });
  return childrens;
}
