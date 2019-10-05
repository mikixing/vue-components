/**
 * author: mikixing
 * input: timeStamp
 * output: xxxx-xx-xx
 */

function getDate(stm, reg) {
    stm = stm && new Date(stm) || new Date()
    reg = reg || '-'
    return stm.getFullYear() + reg + stm.getMonth() + 1 + reg + stm.getDate()
}
/**
 * 
 * @param {*} stm timeStamp
 * @param {*} reg 
 */
function getAllDate(stm, reg) {
    stm = stm && new Date(stm) || new Date()
    reg = reg || '-- ::'
    return stm.getFullYear() + reg[0] + stm.getMonth() + 1 + reg[1] + stm.getDate() + reg[2] + stm.getHours() + reg[3] + stm.getMinutes() + reg[4] + stm.getSeconds()
}
/**
 * input: a randam timeStamp
 * output: this month's first day
*/
function getAMonthFirstday(stm) {
    stm = stm instanceof Date ? stm :  (stm ? new Date(stm) : new Date())
    const month = stm.getMonth()
    const year = stm.getFullYear()
    return new Date(year, month, 1)
}
/** 
 * input: a randam timeStamp or number
 * output: this month's last day
*/
function getAMonthLastDay(stm) {
    stm = stm instanceof Date ? stm :  (stm ? new Date(stm) : new Date())
    const month = stm.getMonth()
    const year = stm.getFullYear()
    return new Date(year, month + 1, 0)
}
export default {
    getDate,
    getAllDate,
    getAMonthFirstday,
    getAMonthLastDay
}