<template>
    <div class="img-box">
        <img :src="imgSrc" alt="" class="img-box-img">
    </div>
</template>
<script>
    export default {
        name: 'img-box',
        props: {
            imgSrc: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                showBox: false
            }
        },
        methods: {
            show() {
                this.showBox = true
            },
            hide() {
                this.showBox = false
            }
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
    }
    .img-box-img {
        width: 100%;
    }
</style>   