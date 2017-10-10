<template>
  <div class="c-input c-input-icon">
    <slot></slot>
    <div class="input-wrap inline-group">
      <slot name="icon icon-l"></slot>
      <slot name="icon icon-r"></slot>
      <input type="text" :disabled="disabled" :placeholder="placeholder" :class="size">
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'cInputIcon',
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
    .input-wrap{
      position: relative;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #CCCCCC;
      &>input{
        outline: none;
        border: none;
        // padding: 5px;
        &:focus{
          border-color: #66AFE9;
        }
        &:disabled{
          background-color: #EEEEEE;
          cursor: not-allowed;
        }
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

    
    .icon{
      position: absolute;
      width: 10px;
      height: 100%;
    }
  }
</style>
