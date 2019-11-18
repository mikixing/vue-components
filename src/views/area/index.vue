<template>
  <div class="miki-area">
    <div class="miki-area-btn">
      <div class="miki-area-btn__cancel">取消</div>
      <div class="miki-area-btn__confirm">确定</div>
    </div>
    <div class="miki-area-content">
      <div class="miki-area-bar"></div>
      <div class="miki-area-list">
        <div class="miki-area-column"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'miki-area',
  }
</script>
<style lang="postcss">
  .miki-area {
    width: 350px;
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
    margin-top: 100px;
    position: relative;
  }
  .miki-area-bar {
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #ebedf0;
    border-bottom: 1px solid #ebedf0;
  }
  .miki-area-list {
    position: absolute;
  }
</style>