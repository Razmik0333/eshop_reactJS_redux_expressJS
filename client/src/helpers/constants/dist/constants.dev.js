"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dates = exports.months_eng = exports.months_arm = exports.days = exports.FILTER_OPTIONS = exports.COUNT_BOOKS = exports.filters = exports.languages = exports.currencyes = exports.root = void 0;
var root = "http://localhost:3001";
exports.root = root;
var currencyes = [{
  target: 'amdChange',
  option: 'AMD'
}, {
  target: 'rubChange',
  option: 'RUB'
}, {
  target: 'usdChange',
  option: 'USD'
}];
exports.currencyes = currencyes;
var languages = [{
  target: 'armChange',
  option: 'Հայ'
}, {
  target: 'rusChange',
  option: 'Рус'
}, {
  target: 'engChange',
  option: 'Eng'
}];
exports.languages = languages;
var filters = [{
  alias: 'newest',
  arm: 'Թարմություն'
}, {
  alias: 'price',
  arm: 'Գին'
}, {
  alias: 'name',
  arm: 'Անվանում'
}];
exports.filters = filters;
var COUNT_BOOKS = 15;
exports.COUNT_BOOKS = COUNT_BOOKS;
var FILTER_OPTIONS = ['title', 'categories', 'longDescription', 'authors'];
exports.FILTER_OPTIONS = FILTER_OPTIONS;
var days = ["Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շբթ", "Կիր"];
exports.days = days;
var months_arm = ["Հուն", "Փետ", "Մրտ", "Ապր", "Մյս", "Հուն", "Հուլ", "Օգս", "Սեպ", "Հոկ", "Նոյ", "Դեկ"];
exports.months_arm = months_arm;
var months_eng = ["Հուն", "Փետ", "Մրտ", "Ապր", "Մյս", "Հուն", "Հուլ", "Օգս", "Սեպ", "Հոկ", "Նոյ", "Դեկ"];
exports.months_eng = months_eng;
var dates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "26", "27", "28", "29", "29", "30", "31"];
exports.dates = dates;