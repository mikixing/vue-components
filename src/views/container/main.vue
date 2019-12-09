<template>
    <div class="mk-main">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'mk-main',
    }
</script>
<style lang="postcss">
    .mk-main {
        flex: 1;
    }
</style>