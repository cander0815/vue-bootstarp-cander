<template>
  <div id="app">
   <c-radio>haha</c-radio>
   <c-radio>lala</c-radio>
  </div>
</template>

<script>
  import cButton from './components/button';
  import cIcon from './components/icon';
  import cCheckbox from './components/checkbox';
  import cRadio from './components/radio';
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
      cCheckboxGroup: cCheckbox.Item,
      cRadio
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
