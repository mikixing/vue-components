<template>
    <div class="mk-calendar">
        <div class="mk-calendar-header clearfix">
            <div class="mk-calendar-header-time">{{calendarTitle}}</div>
            <div class="mk-calendar-header-btn" onselectstart="return false">
                <div class="mk-calendar-header-btn__text" @click="goPre">上个月</div>
                <div class="mk-calendar-header-btn__text" @click="goToday">今天</div>
                <div class="mk-calendar-header-btn__text" @click="goNext">下个月</div>
            </div>
        </div>
        <div class="mk-calendar-week">
            <div class="mk-calendar-weekday">一</div>
            <div class="mk-calendar-weekday">二</div>
            <div class="mk-calendar-weekday">三</div>
            <div class="mk-calendar-weekday">四</div>
            <div class="mk-calendar-weekday">五</div>
            <div class="mk-calendar-weekday">六</div>
            <div class="mk-calendar-weekday">日</div>
        </div>
        <div class="mk-calendar-content">
            <div class="mk-calendar-list" v-for="(item, i) in timeArr" v-bind:key= "i">
                <div class="mk-calendar-item" :class="{'mk-calendar-item__today': obj.today, 'is-not-month': obj.isNotMonth, 'is-selected': obj.isSelected}" v-for="(obj, i) in item" v-bind:key= "i" :title="obj.title" @click="selectDay(obj.title)">{{obj.day}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import { time } from '@/util/index.js'
    export default {
        name: 'mk-calendar',
        props: {
            value: {
                default: '',
                type: [Date, String, Number]
            }
        },
        data() {
            return {
                timeArr: [],
                calendarTitle: '',
                today: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
                month: new Date().getMonth() + 1,
                preMonth: new Date().getMonth() + 1 > 1 ? new Date().getMonth() : 12,
                nextMonth: new Date().getMonth() + 1 === 12 ? 1 : new Date().getMonth() + 2,
                year: new Date().getFullYear(),
            }
        },
        methods: {
            selectDay(val) {
                this.$emit('input', val)
            },
            goPre() {
                if (this.month <= 1) {
                    this.month = 12
                    this.year -= 1
                } else {
                    this.month -= 1
                    this.year = this.year
                }
                const stm = new Date(this.year, this.month - 1)
                this.initCalendar(stm)
            },
            goToday() {
                this.year = new Date().getFullYear()
                this.month = new Date().getMonth() + 1
                const stm = new Date()
                this.initCalendar(stm)
            },
            goNext() {
                if (this.month === 12) {
                    this.month = 1
                    this.year += 1
                } else {
                    this.month += 1
                    this.year = this.year
                }
                const stm = new Date(this.year, this.month - 1)
                this.initCalendar(stm)
            },
            initCalendar(stm) {
                const date = stm instanceof Date ? stm :  (stm ? new Date(stm) : new Date())
                const this_month = date.getMonth() + 1
                const this_year = date.getFullYear()
                const this_date = date.getDate()
                const this_lastDay = time.getAMonthLastDay(date).getDate()
                this.calendarTitle = this_year + '年' + this_month + '月'
                const firstDay = time.getAMonthFirstday(date)
                const firstDay_weekday = firstDay.getDay() > 0 ? firstDay.getDay() : 7
                const lastDay = time.getAMonthLastDay(date)
                const lastDay_weekday = lastDay.getDay() > 0 ? lastDay.getDay() : 7
                let tmpArr = []
                let pre_time,
                    pre_year,
                    pre_month,
                    pre_lastDay
                // last month
                if (this_month > 1) {
                    pre_time = this_year + '-' + (this_month - 1)
                    pre_year = this_year
                    pre_month = this_month - 1
                    pre_lastDay = time.getAMonthLastDay(new Date(pre_year, pre_month, 0)).getDate()
                } else {
                    pre_time = this_year - 1 + '-' + 12
                    pre_year = this_year - 1
                    pre_month = 12
                    pre_lastDay = 30
                }
                for (let i = 0; i < firstDay_weekday - 1; i++) {
                    const tmp = pre_lastDay - i
                    tmpArr.unshift({
                        title: pre_time + '-' + tmp,
                        day: tmp,
                        today: pre_time + '-' + tmp === this.today,
                        isNotMonth: true, // 是否是当月
                        isSelected: pre_time + '-' + tmp === this.value
                    })
                }
                // this month
                for (let i = 1; i <= this_lastDay; i++) {
                    tmpArr.push({
                        title: this_year + '-' + this_month + '-' + i,
                        day: i,
                        today: this_year + '-' + this_month + '-' + i === this.today,
                        isNotMonth: false,
                        isSelected: this_year + '-' + this_month + '-' + i === this.value
                    })
                }
                // next month
                let next_time, next_year, next_month
                if (lastDay_weekday !== 7) {
                    if (this_month === 12) {
                        next_time = this_year + 1 + '-' + 1
                        next_year = this_year + 1
                        next_month = 1
                    } else {
                        next_time = this_year + '-' + (this_month + 1)
                        next_year = this_year
                        next_month = this_month + 1
                    }
                    for (let i = 0; i < 7 - lastDay_weekday; i++) {
                        tmpArr.push({
                            title: next_year + '-' + next_month + '-' + (i + 1),
                            day: i + 1,
                            today: next_year + '-' + next_month + '-' + (i + 1) === this.today,
                            isNotMonth: true,
                            isSelected: next_year + '-' + next_month + '-' + (i + 1) === this.value
                        })
                    }
                }
                this.timeArr = []
                for (let i = 0; i < tmpArr.length; i++) {
                    const item = tmpArr[i]
                    if (i % 7 === 0) {
                        this.timeArr.push([])
                        this.timeArr[this.timeArr.length -1].push(item)
                    } else {
                        this.timeArr[this.timeArr.length -1].push(item)
                    }
                }
            }
        },
        watch: {
            value(newVal, oldValue) {
                if (newVal !== oldValue) {
                    this.initCalendar(newVal)
                }
            }
        }
    }
</script>
<style lang="postcss">
    .clearfix:after {
        content: '';
        visibility: hidden;
        display: block;
        clear: both;
        height: 0;
    }
    .mk-calendar-header {
        border-top: 1px solid #EBEEF5;
        border-bottom: 1px solid #EBEEF5;
        padding: 10px;
    }
    .mk-calendar-header-time {
        float: left;
    }
    .mk-calendar-header-btn {
        float: right;
        display: flex;
        border-left: 1px solid #EBEEF5;
        border-bottom: 1px solid #EBEEF5;
    }
    .mk-calendar-header-btn__text {
        border-right: 1px solid #EBEEF5;
        border-top: 1px solid #EBEEF5;
        padding: 3px 10px;
        font-size: 12px;
        cursor: pointer;
    }
    .mk-calendar-week {
        display: flex;
    }
    .mk-calendar-weekday {
        flex: 1;
        padding: 12px 0;
        text-align: center;
    }
    .mk-calendar-content {
        border-left: 1px solid #ebeef5;
        border-bottom: 1px solid #ebeef5;
    }
    .mk-calendar-list {
        display: flex;
    }
    .mk-calendar-item {
        flex: 1;
        height: 85px;
        padding: 8px;
        border-top: 1px solid #ebeef5;
        border-right: 1px solid #ebeef5;
    }
    .mk-calendar-item:hover {
        cursor: pointer;
        background-color: #F2F8FE;
    }
    .mk-calendar-item__today {
        color: #409EFF;
    }
    .is-not-month {
        color: #c0c4cc;
    }
    .is-selected {
        color: #409EFF;
    }
</style>