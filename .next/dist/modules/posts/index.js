'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionConstants = exports.actions = undefined;

var _posts = require('./posts.reducer');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _posts2.default;
exports.actions = _posts.actions;
exports.actionConstants = _posts.actionConstants;