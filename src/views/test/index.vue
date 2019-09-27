<template>
    <div>
        <test ref="test"></test>
        <div @click="goShow" class="btn">
            <div class="btn__text">点击点击点击</div>
        </div>
        <div class="wrap">
            <shade ref="shade"></shade>
        </div>
        <div ref="message"></div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import test from './test.vue'
    import shade from '../upload/shade.vue'
    import message from '../message/index.vue'
    export default {
        data() {
            return {
                show: true
            }
        },
        methods: {
            goShow() {
                // this.$refs.test.show = !this.$refs.test.show
                this.$refs.shade.isShow = !this.$refs.shade.isShow
            }
        },
        components: {
            test,
            shade
        },
        mounted() {
            const instance = this.$createMkMessage({
                type: 'success',
                text: 'haha',
                duration: 0
            }).show()
            const messageBox = this.$createMkMessageBox({
            }).show()
        }
    }
</script>
<style>
    .wrap {
        width: 100px;
        height: 200px;
        position: relative;
    }
</style>
<style lang="postcss" scoped>
    .btn {
        color: red;
        &__text {
            color: green;
        }
    }
</style>