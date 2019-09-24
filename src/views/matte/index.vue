<template>
    <transition name="fade">
        <div class="mk-matte" v-if="isShow" @click="hide" :style="backgroundColor| background">
            <div class="mk-matte-spinner">
                <i :class="icon" class="iconfont icon-spinner-size"></i>
                <div class="mk-matte-text">{{text}}</div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'mk-matte',
    props: {
        text: {
            default: '拼命加载中',
            type: String
        },
        icon: {
            default: 'icon-spinner'
        },
        backgroundColor: {
            default: 'rgba(0, 0, 0, .8)'
        }
    },
    data() {
        return {
            isShow: true
        }
    },
    methods: {
        show() {
            this.isShow = true
        },
        hide() {
            this.isShow = false
        }
    },
    filters: {
        background(color) {
            return `background-color: ${color}`
        }
    },
    mounted() {
        let n = 0
        this.timer = setInterval(_ => {
            n++
            if (n > 10) {
                clearInterval(this.timer)
            }
            if (n === 3) {
                this.$message({
                    duration: 10000,
                    message: ''
                })
            } else {
                this.$message({
                    duration: 0,
                    message: '1',
                    type: 'warning'
                })
            }
        }, 1000)
    }
}
</script>
<style>
    @keyframes spin {
        from {
            transform: rotateZ(0deg);
        }

        to {
            transform: rotateZ(360deg);
        }
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
</style>
<style lang="postcss" scoped >
    .mk-matte {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .8);
    }
    .mk-matte-spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .mk-matte-text {
        color: #409eff;
        font-size: 14px;
        margin-top: 6px;
    }
    .icon-spinner-size {
        font-size: 24px;
        color: #409eff;
        display: block;
        /* animation: spin steps(8, start) 10s infinite; */
        animation: spin linear 2s infinite;
    }
</style>