<template>
  <span :class="classes" :style="styles" @click="clicks($event)"></span>
</template>

<script>
  export default{
    name: 'cIcon',
    props: {
      type: String,
      rotate: {
        type: Boolean,
        default: false
      },
      color: {
        type: String
      },
      size: {
        type: [String, Number]
      }
    },
    computed: {
      classes () {
        return [
          'ionicons',
          ['ion-' + this.type],
          {
            'cander-iconRotate': this.rotate
          }
        ];
      },
      styles () {
        const _ = this;
        return [
          _.color ? {'color': _.color} : '',
          _.size ? {'font-size': _.size + 'px'} : ''
        ];
      }
    },
    methods: {
      clicks (e) {
        this.$emit('click', e);
      }
    }
  };
</script>

<style lang="less">
  .cander-iconRotate {
    -webkit-animation: cander-rotates 1s linear infinite;
    -o-animation: cander-rotates 1s linear infinite;
    animation: cander-rotates 1s linear infinite;
  }

  @keyframes cander-rotates {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    50% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }
</style>
