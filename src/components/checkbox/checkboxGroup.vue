<template>
  <div class="c-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'cCheckBoxGroup',
    props: {
      value: Array
    },
    data () {
      return {
        checkboxs: []
      };
    },
    mounted () {
      this.$on('c-checkbox-group', (...args) => {
        let data = args;
        let arr = this.checkboxs;
        if (data[1]) {
          arr.push(data[0]);
        } else {
          arr.forEach((v, i) => {
            v === data[0] ? arr.splice(i, 1) : '';
          });
        }
        this.$emit('input', arr);
      });
    }
  };
</script>
<style lang="less">
</style>
