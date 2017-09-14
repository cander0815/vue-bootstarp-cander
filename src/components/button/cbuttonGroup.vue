<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  import {haveValue} from '../../assets/utils/utils';
  const cnm = 'btn-group-';
  export default{
    name: 'cbuttonGroup',
    props: {
      size: {
        type: String,
        validator (v) {
          return haveValue(v, ['lg', 'sm', 'xs']);
        }
      },
      vertical: {
        type: Boolean,
        default: false
      },
      justified: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes () {
        const _ = this;
        return [
          'btn-group',
          {
            [cnm + _.size]: _.size,
            [cnm + 'vertical']: _.vertical,
            [cnm + 'justified']: _.justified
          }
        ];
      }
    }
  };
</script>

<style lang="less">

</style>
