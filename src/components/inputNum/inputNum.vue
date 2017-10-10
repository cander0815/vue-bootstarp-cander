<template>
  <div class="c-input-num">
    <div class="c-input-btn">-</div>
    <input type="num">
    <div class="c-input-btn c-input-btnr">+</div>
  </div>
</template>

<script>
  export default {
    name: 'cInputNum',
    props: {
    },
    data () {
      return {
      };
    },
    methods: {
    }
  };
</script>

<style lang="less">
  .inline-group{
    display: inline-block;
  }
  .c-input-num{
    position: relative;
    width: 140px;
    padding: 5px 20px;
    border-radius: 5px;
    border: 1px solid #CCCCCC;
    overflow: hidden;
    .c-input-btn{
      position: absolute;
      width: 30px;
      height: 100%;
      left: 0px;
      top: 0;
      background-color: #F5F7FA;
      border-right: 1px solid #CCC;
      cursor: pointer;
      text-align: center;
      line-height: 32px;
      &.c-input-btnr{
        right: 0px;
        left: auto;
        border-right: none;
        border-left: 1px solid #CCC;
      }
    }
    &>input{
      width: 100%;
      height: 100%;
      padding: 5px 20px;
      border: none;
      outline: none;
      overflow: visible;
    }
  }
</style>
