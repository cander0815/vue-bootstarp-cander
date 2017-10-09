<template>
  <div class="c-radio-wrap" @click="showV">
    <input type="radio" ref="radioElem" class="c-radio-elem">
    <span class="c-radio-text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: [Boolean, String, Number],
        default: false
      }
    },
    data () {
      return {};
    },
    methods: {
      showV () {
        console.log(1);
//        this.$refs.radioElem.checked = !this.$refs.radioElem.checked;
      }
    }
  };
</script>

<style lang="less">
  .c-radio-wrap{
    position: relative;
    overflow: hidden;
    text-align: left;
    .c-radio-elem {
      position: relative;
      top:0;
      left:0;
    }
  }
</style>
