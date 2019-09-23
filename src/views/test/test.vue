<template>
        <transition name="come">
            <div class="box" v-if="show">123</div>
        </transition>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
                show: true
            }
        }
    }
</script>
<style>
    .box {
        width: 100px;
        height: 200px;
        background: red;
        position: absolute;
        left: 200px;
    }
    .come-enter {
        left: -100px;
    }
    .come-enter-active, .come-leave-active  {
        transition: 30s;
    }
    .come-leave-to{
        left: -100px;
    }
</style>