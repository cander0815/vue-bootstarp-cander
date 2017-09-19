export default {
  methods: {
    /*
    * 寻找到父元素并触发父元素的事件
    * name： 父组件的name
    * events 要触发的事件
    * argus  要传送的参数
    * */
    parentEvents (name, events, ...argus) {
      let parent = this.$options.parent;
      let ParName = parent.$options.name;
      while (ParName !== name) {
        parent = parent.$options.parent;
        ParName = parent.$options.name;
      }
      parent.$emit(events, ...argus);
    }
  }
};
