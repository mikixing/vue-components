<template>
    <mk-shade ref="shade">
        <div class="operate">
            <i class="iconfont icon-magnifier icon-box" @click="getOriginImg"></i>
            <i class="iconfont icon-download icon-box" @click="download"></i>
            <i class="iconfont icon-bin icon-box" @click="goTrash" ></i>
        </div>
    </mk-shade>
</template>
<script>
    import Vue from 'vue'
    import mkShade from './shade.vue'
    import lightBox from './lightBox.vue'
    export default {
        name: 'upload-finish',
        props: {
            imgOriginSrc: {
                default: ''
            }
        },
        data() {
            return {
                isShow: true
            }
        },
        components: {
            mkShade
        },
        watch: {
            isShow(val) {
                this.$refs.shade.isShow = val
            }
        },
        methods: {
            getOriginImg() {
                const lightBoxInstance = new Vue({
                    ...lightBox
                })
                lightBoxInstance.$mount()
                lightBoxInstance.imgOriginSrc = this.imgOriginSrc
                lightBoxInstance.show()
            },
            download() {

            },
            goTrash() {
                this.$parent.$emit('trash')
            },
            show() {
               this.$refs.shade.show()
            },
            hide() {
                this.$refs.shade.hide()
            }
        }
    }
</script>
<style lang="postcss" scoped>
    .operate {
        position: absolute;
        width: 100%;
        height: 40px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        z-index: 2;
    }
    .icon-box {
        flex: 1;
        line-height: 40px;
        font-size: 24px;
        color: #ffffff;
        cursor: pointer;
    }
</style>