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
        <!-- <input type="checkbox" value="haha" checked="" abc="abc1"> -->
        <!-- <mk-tree :data="treeList" :load="load"></mk-tree> -->
        <!-- <mk-matte>
            <div  class="pos-bottom">
                <mk-area></mk-area>
            </div>
        </mk-matte> -->
        <!-- <van-area :area-list="areaList" /> -->
        <!-- <div>111</div>> -->
        <div class="mk-container-wrap">
            <mk-container direction="vertical">
                <mk-header class="mk-header-wrap"></mk-header>
                <mk-main class="mk-main-wrap"></mk-main>
                <mk-footer class="mk-footer-wrap"></mk-footer>
            </mk-container>
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
    import mkTree from '../tree/index.vue'
    import mkArea from '../area/index.vue'
    import mkMatte from '../matte/index.vue'
    import mkContainer from '../container/index.vue'
    import mkHeader from '../container/header.vue'
    import mkMain from '../container/main.vue'
    import mkFooter from '../container/footer.vue'
    export default {
        data() {
            return {
                n: 0,
                show: true,
                calendar: '',
                checkbox: [false, false, false, false, false],
                treeList: [{
                    label: '一级1',
                    children: [{
                        label: '二级2-1'
                    }]
                }, {
                    label: '一级2',
                    children: [{
                        label: '二级2-2',
                        children: [{
                            label: '三级'
                        }]
                    }]
                }],
                areaList: {
                    province_list: {
                        110000: '北京市',
                        120000: '天津市'
                    },
                    city_list: {
                        110100: '北京市',
                        110200: '县',
                        120100: '天津市',
                        120200: '县'
                    },
                    county_list: {
                        110101: '东城区',
                        110102: '西城区',
                        110105: '朝阳区',
                        110106: '丰台区',
                        120101: '和平区',
                        120102: '河东区',
                        120103: '河西区',
                        120104: '南开区',
                        120105: '河北区',
                        // ....
                    }
                }
            }
        },
        methods: {
            goShow() {
                // this.$refs.test.show = !this.$refs.test.show
                this.$refs.shade.isShow = !this.$refs.shade.isShow
            },
            load(node, r, j) {
                this.n++
                setTimeout(_ => {
                    if (this.n === 3) {
                      r([])  
                    } else {
                        r([{
                            label: 'n级' + this.n,
                            // children: [{
                            //     label: '三级'
                            // }]
                        }])
                    }
                    
                }, 2000)
            }
        },
        components: {
            test,
            shade,
            mkLayoutRow,
            mkLayoutCol,
            mkCalendar,
            mkTree,
            mkArea,
            mkMatte,
            mkContainer,
            mkHeader,
            mkMain,
            mkFooter,
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
            // console.log(this, this.$refs.input)
        }
    }
</script>




<style>
    .mk-container-wrap {
        width: 500px;
        height: 300px;
    }
    .mk-header-wrap {
        background: #b3c0d1;
    }
    .mk-main-wrap {
        background: #e9eef3;
    }
    .mk-footer-wrap {
        background: #b3c0d1;
    }
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
    .pos-bottom {
        position: fixed;
        bottom: 0;
        width: 100%;
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