<template>
  <div class="c-input">
    <slot></slot>
    <input type="text" :disabled="disabled" :placeholder="placeholder" :class="size">
  </div>
</template>

<script>
  export default {
    name: 'cInput',
    props: {
      disabled: {
        type: [Boolean, String],
        default: false
      },
      placeholder: {
        type: String,
        default: '请输入内容'
      },
      size: {
        type: String,
        default: 'm'
      }
    },
    data () {
      return {
      };
    }
  };
</script>

<style lang="less">
  .inline-group{
    display: inline-block;
  }
  .c-input{
    margin: 5px;
    &>input{
      border-radius: 5px;
      outline: none;
      border: 1px solid #CCCCCC;
      padding: 5px;
      &:focus{
        border-color: #66AFE9;
      }
      &:disabled{
        background-color: #EEEEEE;
        cursor: not-allowed;
      }
      &.m{
        width: 182px;
        height: 32px;
      }
      &.s{
        width: 102px;
        height: 32px;
      }
      &.l{
        width: 302px;
        height: 32px;
      }
    }
  }
</style>
