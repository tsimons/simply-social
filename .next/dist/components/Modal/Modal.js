'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/Modal/Modal.js';


var Modal = function Modal(_ref) {
    var children = _ref.children,
        onClose = _ref.onClose;
    return _react2.default.createElement('div', {
        className: 'jsx-3026301867' + ' ' + 'modal',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-3026301867' + ' ' + 'modal__shield',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }), _react2.default.createElement('div', {
        className: 'jsx-3026301867' + ' ' + 'modal__container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-3026301867' + ' ' + 'modal__content',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: onClose, className: 'jsx-3026301867' + ' ' + 'modal__close-btn',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, '\xD7'), children)), _react2.default.createElement(_style2.default, {
        styleId: '3026301867',
        css: '.modal.jsx-3026301867{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;}.modal__shield.jsx-3026301867{background:rgba(0,0,0,.8);position:absolute;height:100%;width:100%;}.modal__container.jsx-3026301867{position:absolute;top:183px;left:0;right:0;text-align:center;}.modal__content.jsx-3026301867{position:relative;display:inline-block;text-align:left;}.modal__close-btn.jsx-3026301867{position:absolute;left:calc(100% + 4px);bottom:calc(100% + 4px);display:inline-block;height:21px;width:21px;padding:8.5px 5.5px;color:#70767f;font-size:16px;border:1px solid #70767f;border-radius:21px;-webkit-transition:color .25s,border .25s;transition:color .25s,border .25s;text-align:center;text-decoration:none;line-height:0;}.modal__close-btn.jsx-3026301867:hover,.modal__close-btn.jsx-3026301867:focus{color:white;border-color:white;}'
    }));
};

Modal.displayName = 'Modal';
Modal.propTypes = {
    children: _propTypes.node.isRequired,
    onClose: _propTypes.func.isRequired
};

exports.default = Modal;