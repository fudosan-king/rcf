import {DateTime} from 'luxon';
import {formatNumber} from '../helpers/utils';
import {dateTimeFormat, yearMonthFormat, monthDayYearFormat} from '../helpers/constant';
import moment from "moment";


export function jpyFormat(money, decimal) {
    decimal = typeof decimal === 'undefined' ? 0 : decimal
    if (money < 0) {
        return '- ¥ ' + formatNumber(Math.abs(money), decimal)
    }
    return '¥ ' + formatNumber(money, decimal)

}

export function number(number, decimal) {
    decimal = typeof decimal === 'undefined' ? 0 : decimal
    return formatNumber(number, decimal)
}

export function dateTime(value) {
    return DateTime.fromISO(value).toFormat(dateTimeFormat);
}

export function date(value) {
    return DateTime.fromISO(value).toISODate();
}

export function yearMonth(value) {
    return DateTime.fromISO(value).toFormat(yearMonthFormat)
}

export function monthDayYear(value) {
    return DateTime.fromISO(value).toFormat(monthDayYearFormat)
}

export function weekDay() {
    return DateTime.local().setLocale('ja').toLocaleString(DateTime.DATE_HUGE, {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    })
}

export function currentDateTime() {
    return DateTime.local().toLocaleString(DateTime.DATETIME_SHORT)
}

export function momentFormat(date, format = 'YYYY-MM-DD') {
    return moment(date).format(format)
}

export function dateJapanese(date, format = 'YYYY年MM月DD日') {
    return moment(date).format(format)
}
