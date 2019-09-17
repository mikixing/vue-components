<template>
    <div class="img-box" ref="imgBox">
        <img :src="imgSrc" alt="" class="img-box-img">
    </div>
</template>
<script>
    import Vue from 'vue'
    import mkProgress from './progress.vue'
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
        mounted() {
            // 显示进度条
            const progressInstance = new Vue({
                ...mkProgress
            })
            progressInstance.$mount()
            progressInstance.percentage = this.percentage
            this.$refs.imgBox.appendChild(progressInstance.$el)
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