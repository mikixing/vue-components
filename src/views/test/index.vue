<template>
    <div>
        <test ref="test"></test>
        <div @click="goShow">点击点击点击</div>
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
            // this.$createMatte().show()
            let n = 0
            this.timer = setInterval(_ => {
                n++
                if (n > 3) {
                    clearInterval(this.timer)
                }
                const instance = new Vue({
                    ...message
                })
                instance.isShow = true
                instance.$mount()
                this.$refs.message.appendChild(instance.$el)
            }, 1000)
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