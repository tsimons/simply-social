'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/Slider/Slider.js';


var Slider = function Slider(_ref) {
    var checked = _ref.checked,
        onClick = _ref.onClick;
    return _react2.default.createElement('span', { onClick: onClick, className: 'jsx-2219802500' + ' ' + ((0, _classnames2.default)('slider-container', {
            on: checked,
            off: !checked
        }) || ''),
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('span', {
        className: 'jsx-2219802500' + ' ' + 'slider-thumb',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement(_style2.default, {
        styleId: '2219802500',
        css: '.slider-container.jsx-2219802500{display:inline-block;position:relative;width:48px;height:23px;border:1px solid #00b286;border-radius:25px;-webkit-transition:background .15s,border .15s;transition:background .15s,border .15s;}.slider-container.on.jsx-2219802500{background:#00b286;border-color:#00b286;}.slider-container.off.jsx-2219802500{background:#dee1e5;border-color:#dee1e5;}.slider-thumb.jsx-2219802500{display:inline-block;width:21px;height:21px;position:absolute;top:0;bottom:0;margin:auto 0;background:white;border-radius:21px;-webkit-transition:left .25s;transition:left .25s;}.on.jsx-2219802500 .slider-thumb.jsx-2219802500{left:1px;}.off.jsx-2219802500 .slider-thumb.jsx-2219802500{left:26px;}'
    }));
};

Slider.displayName = 'Slider';
Slider.propTypes = {
    checked: _propTypes.bool,
    onClick: _propTypes.func
};

exports.default = Slider;