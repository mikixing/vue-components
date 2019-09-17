<template>
    <div class="mk-progress">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <circle cx="50%" cy="50%" r="40" stroke="#ebeef5" fill="none" stroke-width="5" />
            <circle ref="circle" cx="50%" cy="50%" r="40" stroke="#409eff" fill="none" stroke-linecap='round' 
            stroke-width="5" />
        </svg>
        <mk-shade></mk-shade>
    </div>
</template>

<script>
    import mkShade from './shade.vue'
    export default {
        name: 'mk-progress',
        props: {
            percentage: {
                default: 0
            }
        },
        data() {
            return {
                circleProgress: '0%',
                radian: 0 // 弧度
            }
        },
        watch: {
            percentage(val) {
                // 支持小数,百分比,整数
                if (val <= 1) {
                    this.circleProgress = (1 - val) * this.radian
                } else if (/%/.test(val)) {
                    // 去掉百分号
                    const tmp = +val.split('%')[0]
                    this.circleProgress = (100 - tmp) / 100 * this.radian
                } else {
                    this.circleProgress = (100 - val) / 100 * this.radian
                }
                this.$refs.circle.setAttribute('stroke-dashoffset', this.circleProgress)
            }
        },
        components: {
            mkShade
        },
        mounted() {
            const circle = this.$refs.circle
            const r = circle.getAttribute('r');
            this.radian = Math.PI * (r * 2);
            circle.setAttribute('stroke-dasharray', this.radian)
        }
    }
</script>
<style lang="postcss" scoped>
    .mk-progress {
        position: absolute;
        top: 0;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
    }
</style>