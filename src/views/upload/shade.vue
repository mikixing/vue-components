<template>
    <div class="mk-shade" v-if="isShow"></div>
</template>

<script>
    export default {
        name: 'mk-shade',
        props: {
            txt: {
                default: ''
            }
        },
        data() {
            return {
                isShow: true
            }
        },
        methods: {
            show() {
                this.isShow = true
            },
            close() {
                this.isShow = false
            }
        }   
    }
</script>

<style>
    .mk-shade {
        position: absolute;
        top: 0;
        background: rgba(0, 0, 0, .5);
        width: 100%;
        height: 100%;
    }
</style>