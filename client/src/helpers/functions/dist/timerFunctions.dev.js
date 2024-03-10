"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDateTemplate = exports.getDay = exports.getHour = exports.getMinute = exports.getSecond = void 0;

var getSecond = function getSecond(second) {
  return second % 60;
};

exports.getSecond = getSecond;

var getMinute = function getMinute(second) {
  var secondOfOneHour = 3600;
  var hours = Math.floor(second / secondOfOneHour);
  return second >= 60 ? Math.floor((second - hours * secondOfOneHour) / 60) : 0;
};

exports.getMinute = getMinute;

var getHour = function getHour(second) {
  var secondOfOneDay = 3600 * 24;
  var days = getDay(second);
  return second >= 3600 ? Math.floor((second - days * secondOfOneDay) / 3600) : 0;
};

exports.getHour = getHour;

var getDay = function getDay(second) {
  return second >= 3600 * 24 ? Math.floor(second / (3600 * 24)) : 0;
};

exports.getDay = getDay;

var getDateTemplate = function getDateTemplate(num) {
  var date = new Date(num).getDate() < 10 ? "0".concat(new Date(num).getDate()) : "".concat(new Date(num).getDate());
  var month = new Date(num).getMonth() + 1 < 10 ? "0".concat(new Date(num).getMonth() + 1) : "".concat(new Date(num).getMonth() + 1);
  var year = new Date(num).getFullYear();
  var hour = new Date(num).getHours() < 10 ? "0".concat(new Date(num).getHours()) : "".concat(new Date(num).getHours());
  var minute = new Date(num).getMinutes() < 10 ? "0".concat(new Date(num).getMinutes()) : "".concat(new Date(num).getMinutes());
  console.log("".concat(date, "-").concat(month, "-").concat(year, ", ").concat(hour, ":").concat(minute));
  return "".concat(date, "-").concat(month, "-").concat(year, ", ").concat(hour, ":").concat(minute);
};

exports.getDateTemplate = getDateTemplate;