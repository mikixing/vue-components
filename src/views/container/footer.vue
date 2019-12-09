<template>
    <div class="mk-footer" ref="mkFooter">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'mk-footer',
        props: {
            height: {
                type: [Number, String],
                default: 60
            }
        },
        mounted() {
            this.height && (this.$refs.mkFooter.style.height = this.height + 'px')
        },
    }
</script>