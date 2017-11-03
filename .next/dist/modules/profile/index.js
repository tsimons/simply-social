'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionConstants = exports.actions = undefined;

var _profile = require('./profile.reducer');

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _profile2.default;
exports.actions = _profile.actions;
exports.actionConstants = _profile.actionConstants;