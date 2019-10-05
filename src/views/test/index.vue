<template>
    <div>
        <test ref="test"></test>
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
        </el-row>
        <el-container style="height: 500px; border: 1px solid #eee">
            <!-- <el-header style="background-color: pink"></el-header> -->
            <el-aside width="200px" style="height: 200px;background-color: green"></el-aside>
            <el-main  style="width: 200px;background-color: red"></el-main>
            <!-- <el-footer style="background-color: yellow"></el-footer> -->
            <template v-slot:footer>
                <div class="haha"></div>
            </template>
        </el-container>
        <div class="calendar-box" ref="calendar">
            <div>{{calendar}}</div>
            <mk-calendar v-model="calendar"></mk-calendar>
        </div>
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
                calendar: ''
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
        mounted() {
            // const instance = this.$createMkMessage({
            //     type: 'success',
            //     text: 'haha',
            //     duration: 0
            // }).show()
            // const messageBox = this.$createMkMessageBox({
            // }).show()
            
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