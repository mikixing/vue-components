<template>
    <transition name="fade">
        <div class="mk-shade fade" v-if="isShow">
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

<style lang="postcss" scoped>
    .fade {
        position: absolute;
        top: 0;
        background: rgba(0, 0, 0, .5);
        width: 100%;
        height: 100%;
        opacity: 1;
        transition: .3s;
    }
    .fade-bofore-enter {
        opacity: 1;
    }
    .fade-bofore-enter-active {
        transition: all .3s;
    }
    .fade-bofore-leave {
        opacity: 0;
    }
</style>