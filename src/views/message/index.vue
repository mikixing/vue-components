<template>
    <transition name="ease">
        <div class="mk-message" :class="type | classType" v-if="isShow" ref="message" >
            <div class="mk-message-des">
                <span class="mk-message-icon"><i class="iconfont" :class="iconType"></i></span>
                <div class="mk-message-text">
                    {{text}}
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    let zIndex = 2000
    let top = 0
    let messageArr = []
    export default {
        name: 'mk-message',
        props: {
            type: { // 'success', 'error', 'warning', 默认,一共四种类型
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
            },
            offsetTop: {
                default: 20 // 距顶部高度
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
                clearTimeout(this.timer)
                this.isShow = false
                this.onClose()
            }
        },
        computed: {
            iconType() {
                if(this.type === 'success') {
                    return 'icon-check'
                } else if(this.type === 'error') {
                    return 'icon-error'
                } else if(this.type === 'warning') {
                    return 'icon-warn'
                } else {
                    return 'icon-info'
                }
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
                        if (!messageArr.length) {
                            top = this.offsetTop
                        }
                        this.$refs.message.style.zIndex = zIndex
                        this.$refs.message.style.top = top + 'px'
                        messageArr.push(this) // 将message收集起来
                        zIndex++
                        top += this.$el.offsetHeight + this.offsetTop
                        this.timer = setTimeout(_ => {
                            this.hide()
                        }, this.duration)
                        if (+this.duration === 0) {
                            clearTimeout(this.timer)
                        }
                    })
                } else {
                    const thisIndex = messageArr.indexOf(this) // 当前实例在数组中的index
                    for(let i = messageArr.length - 1; i > thisIndex; i--) {
                        let tmp = messageArr[i]
                        tmp.$el.style.top = messageArr[i - 1].$el.style.top
                    }
                    messageArr.splice(thisIndex, 1) // 从数组中剔除当前实例
                    const lastMessage = messageArr[messageArr.length - 1]
                    if(lastMessage) {
                        top = parseInt(lastMessage.$el.style.top) + lastMessage.$el.offsetHeight + this.offsetTop
                    } else {
                        top = 0
                    }
                }
            }
        }
    }
</script>
<style lang="postcss">
    .mk-message {
        min-width: 380px;
        max-width: 580px;
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
    .mk-message-des {
        display: flex;
        align-items: center;
        text-align: left;
    }
    .mk-message-icon {
        margin-right: 5px;
        font-size: 24px;
    }
    .ease-enter, .ease-leave-to {
        transform: translate(-50%, -100%);
        /* opacity: 0; */
    }
    .ease-enter-active, .ease-leave-active {
        transition: ease-in-out .3s;
    }
</style>