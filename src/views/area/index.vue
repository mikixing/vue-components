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
          <div class="miki-area-list" ref="mikiAreaList" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)">
            <div class="miki-area-column" v-for="(item, i) in areaList" :key="i" onselectstart="return false" oncontextmenu="return false">{{item.label}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
        startY: 0,
        mouseStartY: 0,
        dy: 0,
        baseHeiht: 0
      }
    },
    methods: {
      touchstart(e) {
        this.rmTransition(this.$refs.mikiAreaList)
        this.mouseStartY = e.touches[0].clientY
        this.startY = parseInt(getComputedStyle(this.$refs.mikiAreaList).top)
      },
      touchmove(e) {
        this.rmTransition(this.$refs.mikiAreaList)
        let y = e.touches[0].clientY - this.mouseStartY
        let ele = this.$refs.mikiAreaList
        let dy = this.startY + y
        let height = parseInt(getComputedStyle(this.$refs.mikiAreaList).height)
        if (dy > 0) {
          dy = dy > 90 ? 90 : dy
        } else {
          dy = -dy > height ? -height : dy
        }
        ele.style.top = dy + 'px'
      },
      touchend(e) {
        let ele = this.$refs.mikiAreaList
        ele.style.transitionDuration = '0.3s'
        ele.style.transitionProperty = 'top'
        ele.style.transitionTimingFunction = 'ease-in-out'
        let top = parseInt(getComputedStyle(this.$refs.mikiAreaList).top)
        let height = parseInt(getComputedStyle(this.$refs.mikiAreaList).height)
        if (top <= 90 && top >= 0) {
          ele.style.top = '60px'
        } else if (top <= -(height - 60)) {
          ele.style.top = -(height - 90) + 'px'
        } else {
          const r = top % this.baseHeight
          debugger
          if ((r > 0 && r > this.baseHeight / 3) || (r < 0 && r < -this.baseHeight / 3)) {
            r > 0 ? (ele.style.top = top + this.baseHeight + 'px') : (ele.style.top = top - this.baseHeight + 'px')
          } else {
            r > 0 ? (ele.style.top = top - r + 'px') : (ele.style.top = top - (this.baseHeiht - r) + 'px')
          }
        }
        ele.addEventListener('transitionend', _ => {
          this.rmTransition(ele)
        });
      },
      rmTransition(ele) {
        ele.style.transitionDuration = ''
        ele.style.transitionProperty = ''
        ele.style.transitionTimingFunction = ''
      },
    },
    mounted() {
      this.baseHeight = parseInt(getComputedStyle(this.$refs.mikiAreaList).height) / this.areaList.length
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
  .miki-area-inner {
    position: absolute;
    height: 150px;
  }
  .miki-area-list{
    position: absolute;
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