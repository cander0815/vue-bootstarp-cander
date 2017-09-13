<template>
  <button :class="classes" :disabled="disabled" @click="clicks($event)">
    <c-icon type="load-c" v-if="loading" rotate></c-icon>
    <c-icon :type="icon" v-if="type && !loading"></c-icon>
    <slot></slot>
  </button>
</template>

<script>
  import {haveValue} from '../../assets/utils/utils';
  import cIcon from '../icon';
  const cnm = 'btn-';
  export default{
    name: 'cButton',
    props: {
      type: {
        type: String,
        default: 'default',
        validator (value) {
          return haveValue(value, ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link']);
        }
      },
      size: {
        type: String,
        validator (value) {
          return haveValue(value, ['lg', 'sm', 'xs']);
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      long: {
        type: Boolean,
        default: false
      },
      active: {
        type: Boolean,
        default: false
      },
      icon: String,
      loading: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes () {
        const _ = this;
        return [
          'btn',
          {
            [cnm + 'block']: _.long,
            [cnm + _.type]: _.type,
            [cnm + _.size]: _.size,
            active: _.active,
            disabled: _.loading
          }
        ];
      }
    },
    components: {
      cIcon
    },
    methods: {
      clicks (e) {
        if (this.loading) {
          return;
        }
        this.$emit('click', e);
      }
    }
  };
</script>

<style lang="less" scoped>

</style>
