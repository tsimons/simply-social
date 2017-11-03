'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/RadioButton/RadioButton.js';


var RadioButton = function RadioButton(_ref) {
    var checked = _ref.checked,
        onClick = _ref.onClick;
    return _react2.default.createElement('span', {
        className: 'jsx-2920679937' + ' ' + ((0, _classnames2.default)('radio-button', {
            on: checked,
            off: !checked
        }) || ''),
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('span', {
        className: 'jsx-2920679937' + ' ' + 'radio-button__circle',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement(_style2.default, {
        styleId: '2920679937',
        css: '.radio-button.jsx-2920679937{display:inline-block;height:23px;width:23px;padding:3px;border:1px solid #bec3cc;border-radius:23px;}.radio-button__circle.jsx-2920679937{display:inline-block;height:15px;width:15px;background:#00b286;border-radius:15px;}.off.jsx-2920679937 .radio-button__circle.jsx-2920679937{disply:none;}'
    }));
};

exports.default = RadioButton;