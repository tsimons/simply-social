"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var thirdDigitPattern = /\B(?=(\d{3})+(?!\d))/g;
var formatNumber = function formatNumber() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return num.toString().replace(thirdDigitPattern, ",");
};
exports.default = formatNumber;