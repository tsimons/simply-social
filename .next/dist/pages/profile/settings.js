'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../../modules/store');

var _store2 = _interopRequireDefault(_store);

var _Base = require('../../layouts/Base');

var _Base2 = _interopRequireDefault(_Base);

var _Slider = require('../../components/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _RadioButton = require('../../components/RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/pages/profile/settings.js?entry';


var FeedView = function FeedView() {
    return _react2.default.createElement(_Base2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'Settings'), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__account-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, 'Account'), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__account',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__account-image-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement('img', { src: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p160x160/20228285_10156386606534638_4208836979691078674_n.jpg?oh=fbeb0943ca159be516c2eba0fd068152&oe=5A6A3C09', alt: '', className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }), _react2.default.createElement('button', {
        className: 'jsx-2654467106' + ' ' + 'settings__account-change-image-btn',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, 'change')), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__account-form-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__account-form-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement('input', { type: 'text', value: 'TJ Simons', className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__account-form-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, _react2.default.createElement('input', { type: 'email', value: 't.simons88@gmail.com', className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__account-form-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement('input', { type: 'password', className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__account-form-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, _react2.default.createElement('input', { type: 'password', className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    })))), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__notifications',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, 'Notifications'), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, _react2.default.createElement(_Slider2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, 'email me when my posts are marked as favorites')), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, _react2.default.createElement(_Slider2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, 'email me when I\'m mentioned')), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, _react2.default.createElement(_Slider2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, 'email me when I get a reply')), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }, _react2.default.createElement(_Slider2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, 'email me when someone follows me'))), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__privacy',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    }, 'Privacy'), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, 'allow anyone to tag me')), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }, 'only allow people I follow to tag me')), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 66
        }
    }, 'don\'t allow anyone to tag me'))), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, 'add a location to my posts'))), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 75
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 76
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 76
        }
    }, 'let others find me by email address'))), _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 79
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2654467106' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-2654467106',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, 'tailor ads based on my information')))))), _react2.default.createElement(_style2.default, {
        styleId: '2654467106',
        css: '.settings.jsx-2654467106{max-width:575px;margin:49px auto 0;font-size:16px;color:#70767f;}h1.jsx-2654467106{margin:0 0 54px;font-size:30px;font-weight:normal;color:#3f454d;}h2.jsx-2654467106{margin:0 0 25px;font-size:13px;font-weight:500;color:#70767f;text-transform:uppercase;}.settings__account.jsx-2654467106{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-itmes:flex-start;-webkit-box-align-itmes:flex-start;-ms-flex-align-itmes:flex-start;align-itmes:flex-start;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;}.settings__account.jsx-2654467106,.settings__notifications.jsx-2654467106{padding:0 0 50px 0;margin:0 0 48px;border-bottom:1px solid #dee1e5;}.settings__account-image-container.jsx-2654467106{-webkit-flex:0 0 85px;-ms-flex:0 0 85px;flex:0 0 85px;}.settings__account-image-container.jsx-2654467106 img.jsx-2654467106{border-radius:4px;margin:0 0 10px 0;}.settings__account-change-image-btn.jsx-2654467106{display:block;width:100%;padding:6px 0;background:#fff;border:1px solid #bec3cc;border-radius:4px;text-align:center;color:#bec3cc;cursor:pointer;}.settings__account-change-image-btn.jsx-2654467106:hover,.settings__account-change-image-btn.jsx-2654467106:active{color:#9a9fa9;border-color:#9a9fa9;}.settings__account-form-container.jsx-2654467106{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin:0 0 0 50px;}.settings__account-form-row.jsx-2654467106{margin-bottom:20px;}.settings__account.jsx-2654467106 input.jsx-2654467106{width:100%;padding:14px 14px 9px 40px;border:1px solid #bec3cc;border-radius:4px;outline:none;font-size:16px;color:#33f454d;}.settings__account.jsx-2654467106 input.jsx-2654467106:focus{outline:none;}.settings__notifications-row.jsx-2654467106{margin:0 0 20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.settings__notifications-row.jsx-2654467106 span.jsx-2654467106{margin:0 0 0 25px;}.settings__privacy-row.jsx-2654467106{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 0 10px 0;}.settings__privacy-row.jsx-2654467106 span.jsx-2654467106{margin:0 0 0 26px;}.settings__privacy-group.jsx-2654467106{margin:0 0 25px 0;}'
    }));
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default)(FeedView);