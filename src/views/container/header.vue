<template>
    <div class="miki-header" ref="mkHeader">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'miki-header',
        props: {
            height: {
                type: [Number, String],
                default: 60
            }
        },
        mounted() {
            this.height && (this.$refs.mkHeader.style.height = this.height + 'px')
        },
    }
</script>
<style lang="postcss">
    .miki-header {
        height: 60px;
    }
</style>