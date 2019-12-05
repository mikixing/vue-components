<template>
    <div class="miki-area-list" ref="mikiAreaList" @touchstart.stop.prevent="touchstart($event)" @touchmove.stop.prevent="touchmove($event)" @touchend.stop.prevent="touchend($event)">
        <div class="miki-area-column" v-for="(item, i) in areaList" :key="i" onselectstart="return false" oncontextmenu="return false">{{item.label}}</div>
    </div>
</template>
<script>
    export default {
        name: 'list',
        props: {
            areaList: {
                type: Array,
                default: _ => []
            }
        },
        data() {
            return {
                startY: 0, // translate3d偏移的y值
                mouseStartY: 0, // 鼠标偏移的y值
                dy: 0, // 记录mousemove
                baseHeight: 0, // 每一行的高度
                listHeight: 0, // 列表高度
                fixY: 0, // 初始的偏移值
            }
        },
        methods: {
            touchstart(e) {
                this.rmTransition(this.$refs.mikiAreaList)
                this.mouseStartY = e.touches[0].clientY
            },
            touchmove(e) {
                this.rmTransition(this.$refs.mikiAreaList)
                let y = e.touches[0].clientY - this.mouseStartY
                let ele = this.$refs.mikiAreaList
                this.dy = this.startY + y
                let height = this.listHeight
                if (this.dy > 0) {
                    this.dy = this. dy > (this.fixY + this.baseHeight) ? (this.fixY + this.baseHeight) : this.dy
                } else {
                    this.dy = this.dy < -(height - this.fixY) ? -(height - this.fixY) : this.dy
                }
                ele.style.transform= `translate3d(0, ${this.dy}px, 0)`
            },
            touchend(e) {
                let ele = this.$refs.mikiAreaList
                ele.style.transitionDuration = '0.3s'
                ele.style.transitionProperty = 'all'
                ele.style.transitionTimingFunction = 'ease-in-out'
                let top = this.dy
                let height = this.listHeight
                let res
                const r = top % this.baseHeight
                if ((r > 0 && r > this.baseHeight / 3) || (r < 0 && r < -this.baseHeight / 3)) {
                    res = r > 0 ? top - r + this.baseHeight : top - r - this.baseHeight
                } else {
                    res = r >= 0 ? top - r : top - r + this.baseHeight
                }
                // 对极限值处理
                if (res === (this.fixY + this.baseHeight)) {
                    res = this.fixY
                }
                if (res === -(height - this.fixY)) {
                    res = -(height - (this.fixY + this.baseHeight))
                }
                ele.style.transform= `translate3d(0, ${res}px, 0)`
                this.startY = res
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
            this.listHeight = parseInt(getComputedStyle(this.$refs.mikiAreaList).height)
            this.baseHeight =  this.listHeight / this.areaList.length
            this.startY = this.fixY = 2 * this.baseHeight
        },
    }
</script>