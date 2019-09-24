<template>
    <transition name="ease">
        <div class="mk-message" :class="type | classType" v-if="isShow" @click="hide" ref="message" >
            <div class="">{{text}}</div>
        </div>
    </transition>
</template>

<script>
    let zIndex = 2000
    let top = 20
    let messageArr = []
    export default {
        name: 'mk-message',
        props: {
            type: {
                default: ''
            },
            duration: {
                default: 2000
            },
            text: {
                default: ''
            },
            onClose: {
                type: Function,
                default: () => {}
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
                this.onClose()
            }
        },
        filters: {
            classType(type) {
                if (['success', 'error', 'warning'].includes(type)) {
                    return `mk-message__${type}`
                }
            }
        },
        watch: {
            isShow(val) {
                if (val) {
                    this.$nextTick(_ => {
                        this.$refs.message.style.zIndex = zIndex
                        this.$refs.message.style.top = top + 'px'
                        messageArr.push(this) // 将message收集起来
                        zIndex++
                        top += this.$el.offsetHeight + 20 // 20是自定义的后一个message和前一个message的距离

                        // this.timer = setTimeout(_ => {
                        //     clearTimeout(this.timer)
                        //     this.$el.remove()
                        //     this.$destroy()
                        // }, this.duration)
                    })
                } else {
                    const thisIndex = messageArr.indexOf(this) // 当前实例在数组中的index
                    if (thisIndex >= 0 && messageArr.length > 1) {
                        top = parseInt(messageArr[messageArr.length - 2].$el.style.top)
                        for(let i = messageArr.length - 1; i > thisIndex; i--) {
                            let tmp = messageArr[i]
                            tmp.$el.style.top = messageArr[i - 1].$el.style.top
                        }
                        messageArr.splice(thisIndex, 1) // 从数组中剔除当前实例
                    }
                }
            }
        }
    }
</script>
<style lang="postcss">
    .mk-message {
        min-width: 380px;
        padding: 15px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border: 1px solid #ebeef5;
        background: #edf2fc;
        color: #909399;
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        transition: top .3s .4s;
    }
    .mk-message__success {
        background-color: #f0f9eb;
        border-color: #e1f3d8;
        color: #67C23A;

    }
    .mk-message__error {
        background-color: #fef0f0;
        border-color: #fde2e2;
        color: #F56C6C;

    }
    .mk-message__warning {
        background-color: #fdf6ec;
        border-color: #faecd8;
        color: #E6A23C;
    }
    .ease-enter, .ease-leave-to {
        transform: translate(-50%, -100%);
        opacity: 0;
    }
    .ease-enter-active, .ease-leave-active {
        transition: ease-in-out .3s;
    }
</style>