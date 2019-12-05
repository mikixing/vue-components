<template>
  <div class="miki-area">
    <div class="miki-area-btn">
      <div class="miki-area-btn__cancel">取消</div>
      <div class="miki-area-btn__confirm">确定</div>
    </div>
    <div class="miki-area-content">
      <div class="miki-area-bar"></div>
      <div class="miki-area-wrap">
        <div class="miki-area-inner" ref="mikiAreaInner" >
          <list :areaList="areaList"></list>
          <list :areaList="areaList"></list>
          <div class="miki-area-mask"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import list from './list.vue'
  const DAFAULT_COLUMN = [{
    label: 1
  }, {
    label: 2
  }, {
    label: 3
  }, {
    label: 4
  }, {
    label: 5
  }, {
    label: 6
  }, {
    label: 7
  }]
  export default {
    name: 'miki-area',
    props: {
      areaList: {
        type: Array,
        default: _ => DAFAULT_COLUMN
      }
    },
    data() {
      return {
      }
    },
    components: {
      list
    },
    methods: {
    },
  }
</script>
<style lang="postcss">
  .miki-area {
    width: 100%;
    font-size: 14px;
    margin: auto;
    background: #FFFFFF;
  }
  .miki-area-btn {
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #ebedf0;
    border-bottom: 1px solid #ebedf0;
    display: flex;
    justify-content: space-between;
    color: #1989fa;
    font-size: 12px;
    box-sizing: border-box;
  }
  .miki-area-btn__cancel {
    padding-left: 15px;
    padding-right: 15px;
  }
  .miki-area-btn__confirm {
    padding-left: 15px;
    padding-right: 15px;
  }
  .miki-area-content {
    position: relative;
    height: 150px;
    box-sizing: border-box;
  }
  .miki-area-bar {
    box-sizing: border-box; 
    height: 30px;
    line-height: 30px;
    border-top: 1px solid #ebedf0;
    border-bottom: 1px solid #ebedf0;
    position: absolute;
    width: 100%;
    top: 60px;
  }
  .miki-area-wrap {
    height: 150px;
    overflow: hidden;
    position: relative;
  }
  .miki-area-inner {
    height: 150px;
    display: flex;
  }
  .miki-area-list{
    transform: translate3d(0, 60px, 0);
    flex: 1;
  }
  .miki-area-mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4) 60%, hsla(0, 0%, 100%, 0), 40%,hsla(0, 0%, 100%, 0.9));
    background-repeat: no-repeat;
    background-position: top, bottom;
    pointer-events: none;
  }
  .miki-area-column {
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    flex: 1;
    color: #000;
  }
</style>