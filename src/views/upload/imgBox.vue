<template>
    <div class="img-box" ref="imgBox" v-if="isShow" @mouseenter="showUploadFinish" @mouseleave="hideUploadFinish">
        <img :src="imgSrc" alt="" class="img-box-img">
    </div>
</template>
<script>
    import Vue from 'vue'
    import mkProgress from './progress.vue'
    import uploadFinish from './uploadFinish.vue'
    export default {
        name: 'img-box',
        props: {
            imgSrc: {
                type: String,
                default: ''
            },
            percentage: {
                default: 0
            }
        },
        data() {
            return {
               progressInstance: null,
               uploadFinishInstance: null,
               isShow: true
            }
        },
        watch: {
           percentage(val) {
               this.progressInstance.percentage = val
           } 
        },
        methods: {
            show() {
                this.isShow = true
            },
            hide() {
                this.isShow = false
            },
            hideProgress() {
                this.progressInstance.hide()
            },
            showProgress() {
                this.progressInstance.show()
            },
            showUploadFinish() {
                this.uploadFinishInstance && this.uploadFinishInstance.show()
            },
            hideUploadFinish() {
                this.uploadFinishInstance && this.uploadFinishInstance.hide()
            },
            mountUploadFinish() {
                // 上传完的遮罩
                this.uploadFinishInstance = new Vue({
                    ...uploadFinish
                })
                this.uploadFinishInstance.isShow = false
                this.uploadFinishInstance.$mount()
                this.$refs.imgBox.appendChild(this.uploadFinishInstance.$el)
                this.$children.push(this.uploadFinishInstance)
                this.uploadFinishInstance.$parent = this
            }
        },
        beforeMount() {
            // 上传遮罩
        },
        mounted() {
            this.progressInstance = new Vue({
                ...mkProgress
            })
            this.progressInstance.isShow = true
            this.progressInstance.$mount()
            this.progressInstance.percentage = this.percentage
            this.progressInstance.$parent = this
            this.$refs.imgBox.appendChild(this.progressInstance.$el)
            this.$children.push(this.progressInstance)
            this.$on('trash', () => {
                this.$el.remove()
            })
        }
    }
</script>
<style lang="postcss" scoped>
    .img-box {
        width: 150px;
        height: 150px;
        line-height: 150px;
        border: 1px solid #c0ccda;
        border-radius: 10px;
        background: #FFFFFF;
        overflow: hidden;
        box-sizing: border-box;
        display: inline-block;
        margin-right: 8px;
        position: relative;
    }
    .img-box-img {
        width: 100%;
    }
</style>   