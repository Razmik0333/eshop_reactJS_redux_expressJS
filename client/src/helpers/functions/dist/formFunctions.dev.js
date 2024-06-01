"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkPhoneNumber = exports.checkConfirmPassword = exports.checkStrWithNumber = exports.checkCapitalLetter = exports.checkStrLength = exports.checkPassword = exports.checkEmail = void 0;

var checkEmail = function checkEmail(str) {
  return str.length === 0 || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str);
};

exports.checkEmail = checkEmail;

var checkPassword = function checkPassword(str) {
  return str.length === 0 || /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(str);
};

exports.checkPassword = checkPassword;

var checkStrLength = function checkStrLength(str, num) {
  return str.length === 0 || str.trim().length > num;
};

exports.checkStrLength = checkStrLength;

var checkCapitalLetter = function checkCapitalLetter(str) {
  return str.trim().toLowerCase() !== str.trim();
};

exports.checkCapitalLetter = checkCapitalLetter;

var checkStrWithNumber = function checkStrWithNumber(str) {
  return str.split("").filter(function (item) {
    return +item >= 0 && +item <= 9;
  }).length > 1;
};

exports.checkStrWithNumber = checkStrWithNumber;

var checkConfirmPassword = function checkConfirmPassword(str1, str2) {
  return str1 === str2;
};

exports.checkConfirmPassword = checkConfirmPassword;

var checkPhoneNumber = function checkPhoneNumber(str) {
  return str.trim().split('').find(function (item) {
    return isNaN(+item);
  });
};

exports.checkPhoneNumber = checkPhoneNumber;