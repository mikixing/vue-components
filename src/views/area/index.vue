<template>
  <div class="miki-area">
    <div class="miki-area-btn">
      <div class="miki-area-btn__cancel">取消</div>
      <div class="miki-area-btn__confirm">确定</div>
    </div>
    <div class="miki-area-content">
      <div class="miki-area-bar"></div>
      <div class="miki-area-wrap">
        <div class="miki-area-list" @mousedown="mousedown" @mousemove="mousemove">
          <div class="miki-area-column">1</div>
          <div class="miki-area-column">2</div>
          <div class="miki-area-column">3</div>
          <div class="miki-area-column">4</div>
          <div class="miki-area-column">5</div>
          <div class="miki-area-column">6</div>
          <div class="miki-area-column">7</div>
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
        startX: 0,
        startY: 0,
      }
    },
    methods: {
      mousedown(mouse) {
        this.startX = mouse.clientX
        this.startY = mouse.clientY
      },
      mousemove() {
        console.log(2)
      }
    },
  }
</script>
<style lang="postcss">
  .miki-area {
    width: 250px;
    height: 400px;
    font-size: 12px;
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
    padding-top: 60px;
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
  }
  .miki-area-wrap {
    position: absolute;
    top: 0;
    height: 150px;
    overflow: hidden;
  }
  .miki-area-list {
  }
  .miki-area-column {
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
</style>