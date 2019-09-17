<template>
    <div class="light-box"></div>
</template>
<script>
export default {
    name:'light-box',
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