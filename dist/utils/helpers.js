"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizeClass = exports.variants = exports.variantClass = exports.getShortString = exports.formatDate = exports.addLeadingZeros = exports.getMonthName = void 0;
var months = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
];
var monthsShort = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июнь',
    'июль',
    'авг',
    'сент',
    'окт',
    'нояб',
    'дек'
];
var week = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота'
];
/**
 * Функция для добавления окончаний к месяцам
 * @param value - имя месяца
 *
 */
var getMonthName = function (value) {
    if (value) {
        var arr = value.split('');
        var result = void 0;
        if (months.indexOf(value) !== -1) {
            arr.splice(arr.length - 1, 1, 'я');
            result = arr.join('');
            return result;
        }
        arr.push('а');
        result = arr.join('');
        return result;
    }
    return '';
};
exports.getMonthName = getMonthName;
/** Добавить нули */
var addLeadingZeros = function (number, length) {
    if (length === void 0) { length = 2; }
    return ('0'.repeat(length) + number).slice(-length);
};
exports.addLeadingZeros = addLeadingZeros;
/**
 * Функция для форматирования даты
 *  @param date - дата, которую нужно преобразовать
 *
 */
var formatDate = function (date) {
    if (!date) {
        date = Date.now();
    }
    var tempDate = new Date(date);
    var month = exports.addLeadingZeros(tempDate.getMonth() + 1);
    var monthLong = exports.getMonthName(months[tempDate.getMonth()]);
    var monthShort = monthsShort[tempDate.getMonth()];
    var dayOfMonth = exports.addLeadingZeros(tempDate.getDate());
    var dayOfWeek = week[tempDate.getDay()];
    var tempHour = tempDate.getHours();
    var hour = exports.addLeadingZeros(tempHour);
    var tempMinutes = tempDate.getMinutes();
    var minutes = exports.addLeadingZeros(tempMinutes);
    var year = tempDate.getFullYear();
    return {
        month: month,
        monthLong: monthLong,
        monthShort: monthShort,
        dayOfMonth: dayOfMonth,
        dayOfWeek: dayOfWeek,
        hour: hour,
        minutes: minutes,
        year: year,
        date: dayOfMonth + "." + month + "." + year,
        time: hour + ":" + minutes
    };
};
exports.formatDate = formatDate;
/**
 * Функция обрезки текста
 * @param text - строка, которую нужно сократить
 * @param n - количество видимых символов
 * @param symbol - символ, который нужно поставить в конце строки
 */
var getShortString = function (text, n, symbol) {
    if (n === void 0) { n = 50; }
    if (symbol === void 0) { symbol = '...'; }
    return n > text.length ? text : "" + text.slice(0, n) + symbol;
};
exports.getShortString = getShortString;
/** Общий класс для цветового оформления */
exports.variantClass = {
    'neutral': 'rf--neutral',
    'primary': 'rf--primary',
    'extra-one': 'rf--extra-one',
    'attention': 'rf--attention',
    'success': 'rf--success',
    'error': 'rf--error',
    'warning': 'rf--warning'
};
exports.variants = [
    'neutral',
    'primary',
    'extra-one',
    'success',
    'attention',
    'warning',
    'error'
];
exports.sizeClass = {
    'big': 'rf--big',
    'medium': 'rf--medium',
    'small': 'rf--small',
    'micro': 'rf--micro'
};
