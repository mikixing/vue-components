<template>
    <div class="mk-upload-box" ref="box">
        <div class="mk-upload-img" ref="imgWrap"></div>
        <div class="mk-upload" @click="doClick" :class="{'mk-upload-active': isActive}" ref="upload">
            <span><i class="icon-plus icon-plus-fixed"></i></span>
            <input type="file" class="mk-upload-input" ref="input" @change="change($event)">
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import imgBox from './imgBox.vue'
    export default {
        name: 'mk-upload',
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            doClick() {
                this.$refs.input.click()
            },
            change(e) {
                const file = e.target.files[0]
                let reader = new FileReader()
                reader.readAsDataURL(file)
                const imgBoxInstance = new Vue({
                    ...imgBox
                })
                imgBoxInstance.$mount()
                reader.onload = e => {
                    // 显示预览图
                    imgBoxInstance.imgSrc = e.target.result
                    this.$refs.imgWrap.appendChild(imgBoxInstance.$el)
                }
                let fd = new FormData()
                fd.append('file', file)
                this.ajax({
                    data: fd,
                    url: 'http://localhost:8055/upload',
                    method: 'post',
                    onUploadProgress: function (progressEvent) {
                        let percentage = progressEvent.loaded / progressEvent.total
                        console.log(progressEvent)
                        imgBoxInstance.percentage = percentage
                    },
                })
            }
        },
        mounted() {
            console.log(this.ajax)
        }
    }
</script>
<style>
    .mk-upload-img {
        display: inline-block;
    }
    .mk-upload {
        width: 150px;
        height: 150px;
        line-height: 150px;
        border: 1px dashed #c0ccda;
        border-radius: 10px;
        background: #fbfdff;
        cursor: pointer;
        display: inline-block;
        vertical-align: top;
        box-sizing: border-box;
    }
    .mk-upload-active {
        border-color: #409eff;
    }
    .icon-plus-fixed {
        font-size: 26px;
    }
    .mk-upload-input {
        display: none;
    }
</style>