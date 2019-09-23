<template>
    <transition name="ease">
        <div class="mk-message" v-if="isShow" @click="hide" ref="message" >
            <div class=""></div>
        </div>
    </transition>
</template>

<script>
    let zIndex = 2000
    let top = 20
    export default {
        name: 'mk-message',
        props: {
            type: {
                default: 'common'
            },
            duration: {
                default: 2000
            }
        },
        data() {
            return {
                isShow: false
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
        watch: {
            isShow(val) {
                if (val) {
                    this.$nextTick(_ => {
                        this.$refs.message.style.zIndex = zIndex
                        this.$refs.message.style.top = top + 'px'
                        zIndex++
                        top += 64
                        // this.timer = setTimeout(_ => {
                        //     clearTimeout(this.timer)
                        //     this.$el.remove()
                        //     this.$destroy()
                        // }, this.duration)
                    })
                }
            }
        },
        mounted() {
            // this.$refs.message.style.zIndex = zIndex
            // this.$refs.message.style.top = top + 'px'
            // zIndex++
            // top += 64
        }
    }
</script>
<style lang="postcss">
    .mk-message {
        width: 400px;
        height: 40px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border: 1px solid #ebeef5;
        background: #edf2fc;
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
    }
    .ease-enter, .ease-leave-to {
        top: 0 !important;
    }
    .ease-enter-active, .ease-leave-active {
        transition: ease-in-out 300s;
    }
</style>