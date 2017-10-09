<template>
  <div id="app">

    <section class="group-sec">
      <p class="group-title">按钮组</p>
      <c-button-group vertical>
        <c-button type="success" icon="search" @click="aa">文字文字</c-button>
        <c-button type="success" icon="search" @click="aa"></c-button>
        <c-button type="default" @click="aa">default</c-button>
        <c-button type="primary" @click="aa">primary</c-button>
        <c-button type="info" @click="aa">info</c-button>
        <c-button type="warning" @click="aa">warning</c-button>
        <c-button type="danger" @click="aa">danger</c-button>
        <c-button type="link" @click="aa">link</c-button>
      </c-button-group>
    </section>

    <section class="group-sec">
      <p class="group-title">icon</p>
      <c-icon type="star"></c-icon> 
    </section>
     
    <section class="group-sec">
      <p class="group-title">复选框组</p>
      <c-checkbox-group v-model="cg">
        <c-checkbox label="haha">banner</c-checkbox>
        <c-checkbox label="lala">wancui</c-checkbox>
        <c-checkbox :label="false"></c-checkbox>
      </c-checkbox-group>
      <c-checkbox v-model="hehe">{{hehe}}</c-checkbox>
    </section>

    <section class="group-sec">
      <p class="group-title">输入框</p>
    </section>
  
    <section class="group-sec">
      <p class="group-title">输入框计数器</p>
    </section>

    <section class="group-sec">
      <p class="group-title">单级下拉框</p>
    </section>

    <section class="group-sec">
      <p class="group-title">多级下拉框</p>
    </section>


  </div>
</template>

<script>
  import cButton from './components/button';
  import cIcon from './components/icon';
  import cCheckbox from './components/checkbox';

  export default {
    name: 'app',
    data () {
      return {
        ajax: false,
        cg: ['lala'],
        hehe: true
      };
    },
    components: {
      cButton,
      cIcon,
      cButtonGroup: cButton.Item,
      cCheckbox,
      cCheckboxGroup: cCheckbox.Item
    },
    methods: {
      aa () {
        console.log(this.cg);
      }
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 20px;
  }
  .group-sec{
    display: inline-block;
    vertical-align: text-top;
    margin-left: 20px;
    border: 1px solid #409EFF;
    padding: 10px 20px;
    border-radius: 5px;
  }
  .group-title{
    border-bottom: 1px solid #409EFF;
    padding-bottom: 5px;
  }
</style>
