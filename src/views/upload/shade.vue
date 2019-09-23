<template>
    <transition name="shade">
        <div class="mk-shade" v-if="isShow">
            <slot></slot>
        </div>
    </transition>
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
                isShow: false
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
        opacity: 1;
        /* transition: .3s; */
    }
    .shade-enter, .shade-leave-to {
        opacity: 0;
    }
    .shade-enter-active, .shade-leave-active {
        transition: opacity .3s;
    }
</style>