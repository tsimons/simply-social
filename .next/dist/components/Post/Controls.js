'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _formatTimeString = require('../../helpers/formatTimeString');

var _formatTimeString2 = _interopRequireDefault(_formatTimeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/Post/Controls.js';


var Controls = function Controls(_ref) {
    var reply = _ref.reply,
        like = _ref.like,
        timestamp = _ref.timestamp;
    return _react2.default.createElement('div', {
        className: 'jsx-91151716' + ' ' + 'controls',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: reply, className: 'jsx-91151716' + ' ' + 'control__reply',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('img', { src: '/static/reply-icon.png', alt: 'reply', className: 'jsx-91151716',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    })), _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: like, className: 'jsx-91151716' + ' ' + 'control__love',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('img', { src: '/static/like-icon.png', alt: 'like', className: 'jsx-91151716',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    })), _react2.default.createElement('span', {
        className: 'jsx-91151716' + ' ' + 'post__timestamp',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, (0, _formatTimeString2.default)(timestamp)), _react2.default.createElement(_style2.default, {
        styleId: '91151716',
        css: '.controls.jsx-91151716{font-size:14px;color:#bec3cc;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.controls.jsx-91151716 a.jsx-91151716,.controls.jsx-91151716 span.jsx-91151716{text-decoration:none;color:#dee1e5;margin-left:23px;}.controls.jsx-91151716 a.jsx-91151716{-webkit-transition:color .25s;transition:color .25s;}.controls.jsx-91151716 a.jsx-91151716:hover,.controls.jsx-91151716 a.jsx-91151716:focus{color:#b5bac0;}'
    }));
};

Controls.displayName = 'PostControls';
Controls.propTypes = {
    reply: _propTypes.func.isRequired,
    like: _propTypes.func.isRquired,
    timestamp: _propTypes.number
};

exports.default = Controls;