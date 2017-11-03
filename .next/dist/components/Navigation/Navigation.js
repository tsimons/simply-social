'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Logo = require('../Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _DropDown = require('../DropDown');

var _DropDown2 = _interopRequireDefault(_DropDown);

var _NewPostModal = require('./NewPostModal');

var _NewPostModal2 = _interopRequireDefault(_NewPostModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/Navigation/Navigation.js';

exports.default = function (_ref) {
    var isPostModalOpen = _ref.isPostModalOpen,
        openPostModal = _ref.openPostModal,
        closePostModal = _ref.closePostModal;
    return _react2.default.createElement('div', {
        className: 'jsx-709846349' + ' ' + 'navigation',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-709846349' + ' ' + 'navigation__logo-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_link2.default, { href: '/home', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('a', {
        className: 'jsx-709846349',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement(_Logo2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    })))), _react2.default.createElement('div', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__new-message',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('a', { href: 'javascript:void(0)', onClick: openPostModal, className: 'jsx-709846349',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement('img', { src: '/static/new-message.png', alt: 'new message', className: 'jsx-709846349',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }))), _react2.default.createElement('div', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__search',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement('input', { type: 'search', className: 'jsx-709846349' + ' ' + 'navigation__tools__search-input',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }), _react2.default.createElement('span', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__search-icon',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement('img', { src: '/static/search-icon.png', alt: '', className: 'jsx-709846349',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }))), _react2.default.createElement('div', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__profile',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement(_DropDown2.default, { trigger: _react2.default.createElement('img', {
            src: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p160x160/20228285_10156386606534638_4208836979691078674_n.jpg?oh=fbeb0943ca159be516c2eba0fd068152&oe=5A6A3C09',
            className: 'jsx-709846349' + ' ' + 'navigation__tools__profile-img',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 26
            }
        }), __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement('ul', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__profile-links',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('li', {
        className: 'jsx-709846349',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement(_link2.default, { href: '/profile', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement('a', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__profile-link',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, 'Profile'))), _react2.default.createElement('li', {
        className: 'jsx-709846349',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement(_link2.default, { href: '/profile/settings', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement('a', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__profile-link',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, 'Settings'))), _react2.default.createElement('li', {
        className: 'jsx-709846349',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement(_link2.default, { href: '/logout', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement('a', {
        className: 'jsx-709846349' + ' ' + 'navigation__tools__profile-link',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, 'Logout')))))), isPostModalOpen && _react2.default.createElement(_NewPostModal2.default, { onClose: closePostModal, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '709846349',
        css: '.navigation.jsx-709846349{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:15px 103px;background:#262728;}.navigation__tools.jsx-709846349{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:325px;}.navigation__tools__new-message.jsx-709846349{-webkit-transition:opacity .25s;transition:opacity .25s;}.navigation__tools__new-message.jsx-709846349:hover,.navigation__tools__new-message.jsx-709846349:focus{opacity:.8;}.navigation__tools__search.jsx-709846349{position:relative;}.navigation__tools__search-input.jsx-709846349{background:transparent;border:1px solid #44474b;border-radius:4px;height:30px;width:200px;padding:4px 30px 4px 4px;font-size:13px;color:#262728;-webkit-transition:border-color .25s,background .25s;transition:border-color .25s,background .25s;}.navigation__tools__search-input.jsx-709846349:hover{border-color:#5c6166;}.navigation__tools__search-input.jsx-709846349:focus{background:white;outline:none;}.navigation__tools__search-icon.jsx-709846349{height:16px;position:absolute;top:5px;right:9px;display:block;color:#44474b;-webkit-transition:color .25s;transition:color .25s;}.navigation__tools__profile.jsx-709846349{text-decoration:none;color:#4b4f54;-webkit-transition:color .25s;transition:color .25s;}.navigation__tools__profile.jsx-709846349:hover{cursor:pointer;}.navigation__tools__profile.jsx-709846349:hover,.navigation__tools__profile.jsx-709846349:focus{color:#5c6166;}.navigation__tools__profile-img.jsx-709846349{width:30px;border-radius:4px;margin:0 10px 0 0;}.navigation__tools__profile-link.jsx-709846349,.navigation__tools__profile-link.jsx-709846349:link{display:inline-block;width:150px;padding:6px 32px;font-size:12px;color:#747c83;text-decoration:none;-webkit-transition:color .15s;transition:color .15s;}.navigation__tools__profile-link.jsx-709846349:hover,.navigation__tools__profile-link.jsx-709846349:active{background:#00cc99;color:#e3e8ed;}'
    }));
};