<template>
  <div id="app">
    <c-button-group vertical>
      <c-button type="success" icon="search" @click="aa">cuicui</c-button>
      <c-button type="success" icon="search" @click="aa"></c-button>
      <c-button type="success" icon="search" @click="aa"></c-button>
    </c-button-group>
    <!-- <c-icon type="star"></c-icon>   -->
    <c-checkbox></c-checkbox>
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
        ajax: false
      };
    },
    components: {
      cButton,
      cIcon,
      cButtonGroup: cButton.Item,
      cCheckbox
    },
    methods: {
      aa () {
        this.ajax = !this.ajax;
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
