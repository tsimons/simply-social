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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvZm9ybWF0TnVtYmVyLmpzIl0sIm5hbWVzIjpbInRoaXJkRGlnaXRQYXR0ZXJuIiwiZm9ybWF0TnVtYmVyIiwibnVtIiwidG9TdHJpbmciLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU0sb0JBQW9CLEFBQTFCO0FBQ0EsSUFBTSxlQUFlLFNBQWYsQUFBZSxlQUFBO01BQUMsQUFBRCwwRUFBTyxBQUFQO1NBQWEsSUFBSSxBQUFKLFdBQWUsQUFBZixRQUF1QixBQUF2QixtQkFBMEMsQUFBMUMsQUFBYjtBQUFyQixBQUNBO2tCQUFlLEFBQWYiLCJmaWxlIjoiZm9ybWF0TnVtYmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=