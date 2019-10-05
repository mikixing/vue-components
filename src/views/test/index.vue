<template>
    <div>
        <!-- <test ref="test"></test>
        <div @click="goShow" class="btn">
            <div class="btn__text">点击点击点击</div>
        </div>
        <div class="wrap">
            <shade ref="shade"></shade>
        </div>
        <div ref="message"></div>
        <mk-layout-row>
            <mk-layout-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="left-sec"></div>
            </mk-layout-col>
            <mk-layout-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="right-sec"></div>
            </mk-layout-col>
        </mk-layout-row>
        <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row> -->
        <!-- <div class="calendar-box" ref="calendar">
            <div>{{calendar}}</div>
            <mk-calendar v-model="calendar"></mk-calendar>
        </div> -->
        <input type="checkbox" v-model="checkbox[0]" >
        <input type="checkbox" v-model="checkbox[1]" >
        <input type="checkbox" v-model="checkbox[2]" >
        <input type="checkbox" v-model="checkbox[3]" >
        <input type="checkbox" v-model="checkbox[4]" >
    </div>
</template>

<script>
    import Vue from 'vue'
    import test from './test.vue'
    import shade from '../upload/shade.vue'
    import message from '../message/index.vue'
    import mkLayoutRow from '../layout/row.vue'
    import mkLayoutCol from '../layout/col.vue'
    import mkCalendar from '../calendar/index.vue'
    export default {
        data() {
            return {
                show: true,
                calendar: '',
                checkbox: [false, false, false, false, false]
            }
        },
        methods: {
            goShow() {
                // this.$refs.test.show = !this.$refs.test.show
                this.$refs.shade.isShow = !this.$refs.shade.isShow
            }
        },
        components: {
            test,
            shade,
            mkLayoutRow,
            mkLayoutCol,
            mkCalendar
        },
        watch: {
            checkbox(val) {
                console.log(val)
            }
        },
        mounted() {
            // const instance = this.$createMkMessage({
            //     type: 'success',
            //     text: 'haha',
            //     duration: 0
            // }).show()
            // const messageBox = this.$createMkMessageBox({
            // }).show()
            console.log(this, this.$refs.input)
        }
    }
</script>
<style>
    .wrap {
        width: 100px;
        height: 200px;
        position: relative;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>
<style lang="postcss" scoped>
    .btn {
        color: red;
        &__text {
            color: green;
        }
    }
    .left-sec {
        background: green;
        height: 20px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .right-sec {
        background: yellow;
        height: 20px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .calendar-box {
        width: 300px;
    }
</style>