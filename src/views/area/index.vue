<template>
  <div class="miki-area">
    <div class="miki-area-btn">
      <div class="miki-area-btn__cancel">取消</div>
      <div class="miki-area-btn__confirm">确定</div>
    </div>
    <div class="miki-area-content">
      <div class="miki-area-bar"></div>
      <div class="miki-area-wrap">
        <div class="miki-area-list" ref="mikiAreaList" @touchstart="touchstart($event)" @touchmove="touchmove($event)">
          <div class="miki-area-column" onselectstart="return false" oncontextmenu="return false">1</div>
          <div class="miki-area-column" onselectstart="return false" oncontextmenu="return false">2</div>
          <div class="miki-area-column" onselectstart="return false" oncontextmenu="return false">3</div>
          <div class="miki-area-column" onselectstart="return false" oncontextmenu="return false">4</div>
          <div class="miki-area-column" onselectstart="return false" oncontextmenu="return false">5</div>
          <div class="miki-area-column" onselectstart="return false" oncontextmenu="return false">6</div>
          <div class="miki-area-column" onselectstart="return false" oncontextmenu="return false">7</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'miki-area',
    data() {
      return {
        startY: 0,
      }
    },
    methods: {
      touchstart(e) {
        this.startY = e.touches[0].clientY
        console.log(this.startY)
      },
      touchmove(e) {
        let y = e.touches[0].clientY - this.startY
        let ele = this.$refs.mikiAreaList
        ele.style.top = y + 'px'
        console.log(e, y, 'move')
        // target.style.top = y + 'px'
      }
    },
  }
</script>
<style lang="postcss">
  .miki-area {
    width: 250px;
    height: 190px;
    font-size: 12px;
    margin: auto;
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
  .miki-area-list {
    position: absolute;
    height: 150px;
    top: 60px;
  }
  .miki-area-column {
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
</style>