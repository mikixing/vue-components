<template>
    <div class="mk-container" ref="mkContainer">
        <slot></slot>
    </div>
</template>
<script>
    import mkHeader from './header.vue'
    import mkMain from './main.vue'
    export default {
        name: 'mk-container',
        props: {
            direction: {
                type: String,
                default: 'horizontal'
            },
        },
        components: {
            mkHeader,
            mkMain,
        },
        mounted() {
            if (this.direction === 'vertical') {
                this.$refs.mkContainer.style.flexDirection = 'column'
            }
        },
    }
</script>
<style lang="postcss">
    .mk-container {
        width: 100%;
        height: 100%;
        display: flex;
    }
</style>