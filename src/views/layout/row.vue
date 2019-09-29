<template>
    <div class="mk-layout-row">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "mk-layout-row"
    }
</script>
<style>
    .mk-layout-row::after {
        display: block;
        visibility: hidden;
        height: 0;
        font-size: 0;
        clear: both;
    }
</style>