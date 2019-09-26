<template>
    <transition name="fade">
        <div class="mk-matte" v-if="isShow" v-on:click.self="hide" :style="backgroundColor| background">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'mk-matte',
    props: {
        backgroundColor: {
            default: 'rgba(0, 0, 0, .8)'
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
    },
    filters: {
        background(color) {
            return `background-color: ${color}`
        }
    },
    mounted() {
        this.$on('hide', this.hide)
    }
}
</script>
<style>
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
</style>
<style lang="postcss" scoped >
    .mk-matte {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .8);
    }
</style>