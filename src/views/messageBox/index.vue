<template>
    <mk-matte backgroundColor="rgba(0, 0, 0, .3)" ref="matte">
        <transition name="move">
            <div class="mk-message-box" v-if="isShow">
                <div class="mk-message-box__header">
                    <div class="mk-message-title">{{title}}</div>
                    <div class="mk-message-close" @click="closeBox">
                        <i class="iconfont icon-close"></i>
                    </div>
                </div>
                <div class="mk-message-box__content">
                    {{content}}
                </div>
                <div class="mk-message-box__btn clearfix">
                    <div class="mk-message-box__confirm" @click="hide(1)">{{btn[1].name}}</div>
                    <div class="mk-message-box__cancel" @click="hide(0)">{{btn[0].name}}</div>
                </div>
            </div>
        </transition>
    </mk-matte>
</template>

<script>
import mkMatte from '../matte/index.vue'
export default {
    name: 'mk-message-box',
    props: {
        title: {
            default: '提示'
        },
        content: {
            default: ''
        },
        btn: {
            type: Array,
            default: _ => [{name: '取消', cb: (r, j) => r()}, {name: '确定', cb: (r, j) => r()}]
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
        hide(type) {
            // 0取消,1确定
            new Promise((resolve, reject) => {
                this.btn[type] && typeof this.btn[type].cb === 'function' && this.btn[type].cb(resolve, reject)
            }).then(_ => {
                this.closeBox()
            })
        },
        closeBox() {
            this.isShow = false
            this.$refs.matte.$emit('hide')
        }
    },
    components: {
        mkMatte
    }
}
</script>
<style lang="postcss">
    .clearfix:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
    }
    .mk-message-box {
        min-width: 380px;
        max-width: 580px;
        padding: 15px;
        background: #FFFFFF;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .mk-message-box__header {
        font-size: 18px;
        position: relative;
        color: #303133;
    }
    .mk-message-close {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        font-size: 18px;
        cursor: pointer;
    }
    .mk-message-box__content {
        padding: 10px 0;
    }
    .mk-message-box__btn {
        padding-top: 5px;
    }
    .mk-message-box__cancel {
        float: right;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        cursor: pointer;
    }
    .mk-message-box__confirm {
        float: right;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        color: #FFFFFF;
        background-color: #409eff;
        border: 1px solid #409eff;
        margin-left: 10px;
        cursor: pointer;
    }
    .move-enter, .move-leave-to {
        top: 40%;
    }
    .move-enter-active, .move-leave-active {
        transition: top  .3s;
    }
</style>