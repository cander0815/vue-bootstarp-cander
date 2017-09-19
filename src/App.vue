<template>
  <div id="app">
    <c-checkbox-group v-model="cg">
      <c-checkbox label="haha">haha</c-checkbox>
      <c-checkbox label="lala">lala</c-checkbox>
      <c-checkbox label="hehe">hehe</c-checkbox>
    </c-checkbox-group>
    <c-button type="info" @click="aa">显示</c-button>
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
        cg: []
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
    margin-top: 60px;
  }
</style>
