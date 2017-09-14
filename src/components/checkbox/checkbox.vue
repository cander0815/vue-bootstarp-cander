<template>
	<label class="c-checkbox">
    <input type="checkbox" class="c-checkbox-checkbox" @click="check()">
		<span class="c-checkbox-iconbox" :class="{active:show}">
      <i class="ionicons ion-checkmark c-checkbox-icon" v-show="show"></i>  
    </span>
		<span class="c-checkbox-text">
			<slot>哈哈哈</slot>	
		</span>
	</label>
</template>

<script>
export default {
  name: 'cCheckbox',
  data () {
    return {
      show: false
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    check () {
      this.show = !this.show;
      this.$emit('');
    }
  }
};
</script>

<style lang="less">
@import '../../assets/less/common.less';
	.c-checkbox{
    position: relative;
    .c-checkbox-checkbox{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      &:hover +.c-checkbox-iconbox{
        border-color: @Primary;
      }
    }
    .c-checkbox-iconbox{
      display: inline-block;
      vertical-align: middle;
      width: 18px;
      height: 18px;
      line-height: 18px;
      border-radius: 4px;
      border: 1px solid @borderColor;
      text-align: center;
      &.active{
        border-color: @Primary;
      }
      .c-checkbox-icon{
        font-size: 14px;
        color: @Primary;
      }
    }
    .c-checkbox-text{
      display: inline-block;
      vertical-align: middle;
    }
	}
</style>