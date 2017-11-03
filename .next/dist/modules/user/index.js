'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionConstants = exports.actions = undefined;

var _user = require('./user.reducer');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _user2.default;
exports.actions = _user.actions;
exports.actionConstants = _user.actionConstants;