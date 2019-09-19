<template>
    <div class="mk-shade" :class="{active: isShow}"></div>
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
            hide() {
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
        opacity: 0;
    }
    .active {
        opacity: 1;
        transition: opacity 3s;
    }
</style>