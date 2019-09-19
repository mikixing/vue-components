<template>
    <mk-shade ref="mkShade">
        <div class="operate">
            <i class="icon-zoom-in icon-box" @click="getOriginImg"></i>
            <i class="icon-download3 icon-box" @click="download"></i>
            <i class="icon-bin icon-box" @click="goTrash" ></i>
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
               this.$refs.mkShade.show()
            },
            hide() {
                this.$refs.mkShade.hide()
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