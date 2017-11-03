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

var _redux = require('redux');

var _store = require('../../modules/store');

var _store2 = _interopRequireDefault(_store);

var _Base = require('../../layouts/Base');

var _Base2 = _interopRequireDefault(_Base);

var _Slider = require('../../components/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _RadioButton = require('../../components/RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _user = require('../../modules/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/pages/profile/settings.js?entry';


var Settings = function Settings(_ref) {
    var user = _ref.user,
        setProfileImg = _ref.setProfileImg,
        setName = _ref.setName,
        setEmail = _ref.setEmail,
        setEmailOnFav = _ref.setEmailOnFav,
        setEmailOnMention = _ref.setEmailOnMention,
        setEmailOnReply = _ref.setEmailOnReply,
        setEmailOnFollow = _ref.setEmailOnFollow,
        setFollowPreference = _ref.setFollowPreference,
        setAddLocationPost = _ref.setAddLocationPost,
        setDiscoverableEmail = _ref.setDiscoverableEmail,
        setCustomAds = _ref.setCustomAds;
    return _react2.default.createElement(_Base2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, 'Settings'), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, 'Account'), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-image-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement('img', { src: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p160x160/20228285_10156386606534638_4208836979691078674_n.jpg?oh=fbeb0943ca159be516c2eba0fd068152&oe=5A6A3C09', alt: '', className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }), _react2.default.createElement('button', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-change-image-btn',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, 'change')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-form-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-form-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, _react2.default.createElement('input', { type: 'text', value: user.data.name, onChange: function onChange(e) {
            return setName(e.target.value);
        }, className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }), _react2.default.createElement('img', { src: '/static/user-icon.png', alt: '', className: 'jsx-1216333739' + ' ' + 'settings__account-icon',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-form-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, _react2.default.createElement('input', { type: 'email', value: user.data.email, onChange: function onChange(e) {
            return setEmail(e.target.value);
        }, className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }), _react2.default.createElement('img', { src: '/static/mail-icon.png', alt: '', className: 'jsx-1216333739' + ' ' + 'settings__account-icon',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-form-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, _react2.default.createElement('input', { type: 'password', className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }), _react2.default.createElement('img', { src: '/static/lock-icon.png', alt: '', className: 'jsx-1216333739' + ' ' + 'settings__account-icon',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-form-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }, _react2.default.createElement('input', { type: 'password', className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }), _react2.default.createElement('img', { src: '/static/lock-icon.png', alt: '', className: 'jsx-1216333739' + ' ' + 'settings__account-icon',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    })))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }, 'Notifications'), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }, _react2.default.createElement(_Slider2.default, { checked: user.data.emailOnFavorite, onClick: function onClick() {
            return setEmailOnFav(!user.data.emailOnFavorite);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }, 'email me when my posts are marked as favorites')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }, _react2.default.createElement(_Slider2.default, { checked: user.data.emailOnMention, onClick: function onClick() {
            return setEmailOnMention(!user.data.emailOnMention);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 66
        }
    }, 'email me when I\'m mentioned')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }, _react2.default.createElement(_Slider2.default, { checked: user.data.emailOnReply, onClick: function onClick() {
            return setEmailOnReply(!user.data.emailOnReply);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, 'email me when I get a reply')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, _react2.default.createElement(_Slider2.default, { checked: user.data.emailOnFollow, onClick: function onClick() {
            return setEmailOnFollow(!user.data.emailOnFollow);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }, 'email me when someone follows me'))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 76
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 77
        }
    }, 'Privacy'), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 78
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 79
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.followPreference === 'anyone', onClick: function onClick() {
            return setFollowPreference('anyone');
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }, 'allow anyone to tag me')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.followPreference === 'followers', onClick: function onClick() {
            return setFollowPreference('followers');
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 83
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 83
        }
    }, 'only allow people I follow to tag me')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 85
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.followPreference === 'nobody', onClick: function onClick() {
            return setFollowPreference('nobody');
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }, 'don\'t allow anyone to tag me'))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 89
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 90
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.addLocationToPost, onClick: function onClick() {
            return setAddLocationPost(!user.data.addLocationToPost);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 91
        }
    }, 'add a location to my posts'))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 95
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.discoverableByEmail, onClick: function onClick() {
            return setDiscoverableEmail(!user.data.discoverableByEmail);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 96
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 96
        }
    }, 'let others find me by email address'))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 99
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 100
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.customAds, onClick: function onClick() {
            return setCustomAds(!user.data.customAds);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 101
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 101
        }
    }, 'tailor ads based on my information')))))), _react2.default.createElement(_style2.default, {
        styleId: '1216333739',
        css: '.settings.jsx-1216333739{max-width:575px;margin:49px auto 0;font-size:16px;color:#70767f;}h1.jsx-1216333739{margin:0 0 54px;font-size:30px;font-weight:normal;color:#3f454d;}h2.jsx-1216333739{margin:0 0 25px;font-size:13px;font-weight:500;color:#70767f;text-transform:uppercase;}.settings__account.jsx-1216333739{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-itmes:flex-start;-webkit-box-align-itmes:flex-start;-ms-flex-align-itmes:flex-start;align-itmes:flex-start;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;}.settings__account.jsx-1216333739,.settings__notifications.jsx-1216333739{padding:0 0 50px 0;margin:0 0 48px;border-bottom:1px solid #dee1e5;}.settings__account-image-container.jsx-1216333739{-webkit-flex:0 0 85px;-ms-flex:0 0 85px;flex:0 0 85px;}.settings__account-image-container.jsx-1216333739 img.jsx-1216333739{border-radius:4px;margin:0 0 10px 0;}.settings__account-change-image-btn.jsx-1216333739{display:block;width:100%;padding:6px 0;background:#fff;border:1px solid #bec3cc;border-radius:4px;text-align:center;color:#bec3cc;cursor:pointer;}.settings__account-change-image-btn.jsx-1216333739:hover,.settings__account-change-image-btn.jsx-1216333739:active{color:#9a9fa9;border-color:#9a9fa9;}.settings__account-form-container.jsx-1216333739{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin:0 0 0 50px;}.settings__account-form-row.jsx-1216333739{margin-bottom:20px;position:relative;}.settings__account.jsx-1216333739 input.jsx-1216333739{width:100%;padding:9px 14px 9px 40px;border:1px solid #bec3cc;border-radius:4px;outline:none;font-size:16px;color:#33f454d;}.settings__account.jsx-1216333739 input.jsx-1216333739:focus{outline:none;}.settings__account-icon.jsx-1216333739{position:absolute;top:13px;left:13px;}.settings__notifications-row.jsx-1216333739{margin:0 0 20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.settings__notifications-row.jsx-1216333739 span.jsx-1216333739{margin:0 0 0 25px;}.settings__privacy-row.jsx-1216333739{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 0 10px 0;}.settings__privacy-row.jsx-1216333739 span.jsx-1216333739{margin:0 0 0 26px;}.settings__privacy-group.jsx-1216333739{margin:0 0 25px 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvc2V0dGluZ3MuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkdvQixBQUdpQyxBQVFBLEFBUUEsQUFTSCxBQVFNLEFBT0wsQUFJSSxBQUtKLEFBa0JBLEFBS0EsQUFLSyxBQUtSLEFBYUUsQUFJSyxBQU1BLEFBUUEsQUFJTCxBQU9LLEFBSUEsV0E3Q1EsRUFhOUIsQ0E5Q2UsQUFrQlUsRUFuRUYsQUFTSixBQVFBLEVBMkJHLEFBdURULEFBT0ksQUFPakIsQUFXQSxBQUlBLENBL0ZvQixBQTRDRSxNQTFCSixFQWlESixJQTFGUyxBQVFILElBaEJELEFBaUNpQixBQWlDcEMsQ0F2QkEsQ0FpQ0EsQUFNNkIsQUFpQjdCLEVBaERvQixRQWxDRixHQWhCQSxBQVFBLElBNkJsQixBQWdDc0IsQ0FqQk8sTUFuQ0EsQ0FpRVAsRUFqRnRCLEFBUUEsR0F3QkEsS0FxQ0EsRUFoRHVCLEFBNEZBLE1BN0RELEFBK0JMLE1BbEVqQixNQXNGdUIsQ0FsQkosS0EvQkcsVUFnQ0gsUUEvQkQsT0FnQ2xCLE9BOUJtQixhQW5DUSxBQTRGSixFQXhEdkIsZ0JBOEN1QiwyRUFZRCxrQkFYdEIsQUFZQSxVQTlGNEIsdUdBQzVCIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUvc2V0dGluZ3MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi4vLi4vbW9kdWxlcy9zdG9yZSc7XG5cbmltcG9ydCBCYXNlIGZyb20gJy4uLy4uL2xheW91dHMvQmFzZSc7XG5cbmltcG9ydCBTbGlkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TbGlkZXInO1xuaW1wb3J0IFJhZGlvQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmFkaW9CdXR0b24nO1xuXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy91c2VyJztcblxuY29uc3QgU2V0dGluZ3MgPSAoe1xuICAgIHVzZXIsXG4gICAgc2V0UHJvZmlsZUltZyxcbiAgICBzZXROYW1lLFxuICAgIHNldEVtYWlsLFxuICAgIHNldEVtYWlsT25GYXYsXG4gICAgc2V0RW1haWxPbk1lbnRpb24sXG4gICAgc2V0RW1haWxPblJlcGx5LFxuICAgIHNldEVtYWlsT25Gb2xsb3csXG4gICAgc2V0Rm9sbG93UHJlZmVyZW5jZSxcbiAgICBzZXRBZGRMb2NhdGlvblBvc3QsXG4gICAgc2V0RGlzY292ZXJhYmxlRW1haWwsXG4gICAgc2V0Q3VzdG9tQWRzXG59KSA9PiAoXG4gICAgPEJhc2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxoMT5TZXR0aW5nczwvaDE+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPkFjY291bnQ8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fYWNjb3VudC1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zY29udGVudC1vcnQyLTIueHguZmJjZG4ubmV0L3YvdDEuMC0xL3AxNjB4MTYwLzIwMjI4Mjg1XzEwMTU2Mzg2NjA2NTM0NjM4XzQyMDg4MzY5Nzk2OTEwNzg2NzRfbi5qcGc/b2g9ZmJlYjA5NDNjYTE1OWJlNTE2YzJlYmEwZmQwNjgxNTImb2U9NUE2QTNDMDlcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNldHRpbmdzX19hY2NvdW50LWNoYW5nZS1pbWFnZS1idG5cIj5jaGFuZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlci5kYXRhLm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzZXR0aW5nc19fYWNjb3VudC1pY29uXCIgc3JjPVwiL3N0YXRpYy91c2VyLWljb24ucG5nXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19hY2NvdW50LWZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHZhbHVlPXt1c2VyLmRhdGEuZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtaWNvblwiIHNyYz1cIi9zdGF0aWMvbWFpbC1pY29uLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fYWNjb3VudC1mb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtaWNvblwiIHNyYz1cIi9zdGF0aWMvbG9jay1pY29uLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fYWNjb3VudC1mb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNldHRpbmdzX19hY2NvdW50LWljb25cIiBzcmM9XCIvc3RhdGljL2xvY2staWNvbi5wbmdcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19ub3RpZmljYXRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Ob3RpZmljYXRpb25zPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fbm90aWZpY2F0aW9ucy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgY2hlY2tlZD17dXNlci5kYXRhLmVtYWlsT25GYXZvcml0ZX0gb25DbGljaz17KCkgPT4gc2V0RW1haWxPbkZhdighdXNlci5kYXRhLmVtYWlsT25GYXZvcml0ZSl9IC8+IDxzcGFuPmVtYWlsIG1lIHdoZW4gbXkgcG9zdHMgYXJlIG1hcmtlZCBhcyBmYXZvcml0ZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19ub3RpZmljYXRpb25zLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBjaGVja2VkPXt1c2VyLmRhdGEuZW1haWxPbk1lbnRpb259IG9uQ2xpY2s9eygpID0+IHNldEVtYWlsT25NZW50aW9uKCF1c2VyLmRhdGEuZW1haWxPbk1lbnRpb24pfSAvPiA8c3Bhbj5lbWFpbCBtZSB3aGVuIEknbSBtZW50aW9uZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19ub3RpZmljYXRpb25zLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBjaGVja2VkPXt1c2VyLmRhdGEuZW1haWxPblJlcGx5fSBvbkNsaWNrPXsoKSA9PiBzZXRFbWFpbE9uUmVwbHkoIXVzZXIuZGF0YS5lbWFpbE9uUmVwbHkpfSAvPiA8c3Bhbj5lbWFpbCBtZSB3aGVuIEkgZ2V0IGEgcmVwbHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19ub3RpZmljYXRpb25zLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBjaGVja2VkPXt1c2VyLmRhdGEuZW1haWxPbkZvbGxvd30gb25DbGljaz17KCkgPT4gc2V0RW1haWxPbkZvbGxvdyghdXNlci5kYXRhLmVtYWlsT25Gb2xsb3cpfSAvPiA8c3Bhbj5lbWFpbCBtZSB3aGVuIHNvbWVvbmUgZm9sbG93cyBtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19wcml2YWN5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Qcml2YWN5PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b24gY2hlY2tlZD17dXNlci5kYXRhLmZvbGxvd1ByZWZlcmVuY2UgPT09ICdhbnlvbmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRGb2xsb3dQcmVmZXJlbmNlKCdhbnlvbmUnKX0gLz4gPHNwYW4+YWxsb3cgYW55b25lIHRvIHRhZyBtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b24gY2hlY2tlZD17dXNlci5kYXRhLmZvbGxvd1ByZWZlcmVuY2UgPT09ICdmb2xsb3dlcnMnfSBvbkNsaWNrPXsoKSA9PiBzZXRGb2xsb3dQcmVmZXJlbmNlKCdmb2xsb3dlcnMnKX0gLz4gPHNwYW4+b25seSBhbGxvdyBwZW9wbGUgSSBmb2xsb3cgdG8gdGFnIG1lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19wcml2YWN5LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvbiBjaGVja2VkPXt1c2VyLmRhdGEuZm9sbG93UHJlZmVyZW5jZSA9PT0gJ25vYm9keSd9IG9uQ2xpY2s9eygpID0+IHNldEZvbGxvd1ByZWZlcmVuY2UoJ25vYm9keScpfSAvPiA8c3Bhbj5kb24ndCBhbGxvdyBhbnlvbmUgdG8gdGFnIG1lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19wcml2YWN5LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19wcml2YWN5LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvbiBjaGVja2VkPXt1c2VyLmRhdGEuYWRkTG9jYXRpb25Ub1Bvc3R9IG9uQ2xpY2s9eygpID0+IHNldEFkZExvY2F0aW9uUG9zdCghdXNlci5kYXRhLmFkZExvY2F0aW9uVG9Qb3N0KX0gLz4gPHNwYW4+YWRkIGEgbG9jYXRpb24gdG8gbXkgcG9zdHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX3ByaXZhY3ktZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX3ByaXZhY3ktcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uIGNoZWNrZWQ9e3VzZXIuZGF0YS5kaXNjb3ZlcmFibGVCeUVtYWlsfSBvbkNsaWNrPXsoKSA9PiBzZXREaXNjb3ZlcmFibGVFbWFpbCghdXNlci5kYXRhLmRpc2NvdmVyYWJsZUJ5RW1haWwpfSAvPiA8c3Bhbj5sZXQgb3RoZXJzIGZpbmQgbWUgYnkgZW1haWwgYWRkcmVzczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b24gY2hlY2tlZD17dXNlci5kYXRhLmN1c3RvbUFkc30gb25DbGljaz17KCkgPT4gc2V0Q3VzdG9tQWRzKCF1c2VyLmRhdGEuY3VzdG9tQWRzKX0gLz4gPHNwYW4+dGFpbG9yIGFkcyBiYXNlZCBvbiBteSBpbmZvcm1hdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc2V0dGluZ3Mge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTc1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0OXB4IGF1dG8gMDtcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzY3ZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDU0cHg7XG5cbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNmNDU0ZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHg7XG5cbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzY3ZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX2FjY291bnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBhbGlnbi1pdG1lczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZXR0aW5nc19fYWNjb3VudCxcbiAgICAgICAgICAgIC5zZXR0aW5nc19fbm90aWZpY2F0aW9ucyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDUwcHggMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA0OHB4O1xuXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUxZTU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZXR0aW5nc19fYWNjb3VudC1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA4NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuc2V0dGluZ3NfX2FjY291bnQtaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19hY2NvdW50LWNoYW5nZS1pbWFnZS1idG4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDA7XG5cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZWMzY2M7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYmVjM2NjO1xuXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX2FjY291bnQtY2hhbmdlLWltYWdlLWJ0bjpob3ZlcixcbiAgICAgICAgICAgIC5zZXR0aW5nc19fYWNjb3VudC1jaGFuZ2UtaW1hZ2UtYnRuOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5YTlmYTk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOWE5ZmE5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX2FjY291bnQtZm9ybS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19hY2NvdW50LWZvcm0tcm93IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19hY2NvdW50IGlucHV0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTRweCA5cHggNDBweDtcblxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZWMzY2M7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzZjQ1NGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZXR0aW5nc19fYWNjb3VudCBpbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19hY2NvdW50LWljb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEzcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMTNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19ub3RpZmljYXRpb25zLXJvdyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZXR0aW5nc19fbm90aWZpY2F0aW9ucy1yb3cgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX3ByaXZhY3ktcm93IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXR0aW5nc19fcHJpdmFjeS1yb3cgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAyNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX3ByaXZhY3ktZ3JvdXAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvQmFzZT5cbik7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0UHJvZmlsZUltZzogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMuc2V0UHJvZmlsZUltZywgZGlzcGF0Y2gpLFxuICAgICAgICBzZXROYW1lOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucy5zZXROYW1lLCBkaXNwYXRjaCksXG4gICAgICAgIHNldEVtYWlsOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucy5zZXRFbWFpbCwgZGlzcGF0Y2gpLFxuICAgICAgICBzZXRFbWFpbE9uRmF2OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucy5zZXRFbWFpbE9uRmF2LCBkaXNwYXRjaCksXG4gICAgICAgIHNldEVtYWlsT25NZW50aW9uOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucy5zZXRFbWFpbE9uTWVudGlvbiwgZGlzcGF0Y2gpLFxuICAgICAgICBzZXRFbWFpbE9uUmVwbHk6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLnNldEVtYWlsT25SZXBseSwgZGlzcGF0Y2gpLFxuICAgICAgICBzZXRFbWFpbE9uRm9sbG93OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucy5zZXRFbWFpbE9uRm9sbG93LCBkaXNwYXRjaCksXG4gICAgICAgIHNldEZvbGxvd1ByZWZlcmVuY2U6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLnNldEZvbGxvd1ByZWZlcmVuY2UsIGRpc3BhdGNoKSxcbiAgICAgICAgc2V0QWRkTG9jYXRpb25Qb3N0OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucy5zZXRBZGRMb2NhdGlvblBvc3QsIGRpc3BhdGNoKSxcbiAgICAgICAgc2V0RGlzY292ZXJhYmxlRW1haWw6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLnNldERpc2NvdmVyYWJsZUVtYWlsLCBkaXNwYXRjaCksXG4gICAgICAgIHNldEN1c3RvbUFkczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMuc2V0Q3VzdG9tQWRzLCBkaXNwYXRjaClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGNyZWF0ZVN0b3JlLCBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2V0dGluZ3MpOyJdfQ== */\n/*@ sourceURL=pages/profile/settings.js?entry */'
    }));
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        user: state.user
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        setProfileImg: (0, _redux.bindActionCreators)(_user.actions.setProfileImg, dispatch),
        setName: (0, _redux.bindActionCreators)(_user.actions.setName, dispatch),
        setEmail: (0, _redux.bindActionCreators)(_user.actions.setEmail, dispatch),
        setEmailOnFav: (0, _redux.bindActionCreators)(_user.actions.setEmailOnFav, dispatch),
        setEmailOnMention: (0, _redux.bindActionCreators)(_user.actions.setEmailOnMention, dispatch),
        setEmailOnReply: (0, _redux.bindActionCreators)(_user.actions.setEmailOnReply, dispatch),
        setEmailOnFollow: (0, _redux.bindActionCreators)(_user.actions.setEmailOnFollow, dispatch),
        setFollowPreference: (0, _redux.bindActionCreators)(_user.actions.setFollowPreference, dispatch),
        setAddLocationPost: (0, _redux.bindActionCreators)(_user.actions.setAddLocationPost, dispatch),
        setDiscoverableEmail: (0, _redux.bindActionCreators)(_user.actions.setDiscoverableEmail, dispatch),
        setCustomAds: (0, _redux.bindActionCreators)(_user.actions.setCustomAds, dispatch)
    };
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default, mapStateToProps, mapDispatchToProps)(Settings);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJ3aXRoUmVkdXgiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjcmVhdGVTdG9yZSIsIkJhc2UiLCJTbGlkZXIiLCJSYWRpb0J1dHRvbiIsImFjdGlvbnMiLCJTZXR0aW5ncyIsInVzZXIiLCJzZXRQcm9maWxlSW1nIiwic2V0TmFtZSIsInNldEVtYWlsIiwic2V0RW1haWxPbkZhdiIsInNldEVtYWlsT25NZW50aW9uIiwic2V0RW1haWxPblJlcGx5Iiwic2V0RW1haWxPbkZvbGxvdyIsInNldEZvbGxvd1ByZWZlcmVuY2UiLCJzZXRBZGRMb2NhdGlvblBvc3QiLCJzZXREaXNjb3ZlcmFibGVFbWFpbCIsInNldEN1c3RvbUFkcyIsImRhdGEiLCJuYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZW1haWwiLCJlbWFpbE9uRmF2b3JpdGUiLCJlbWFpbE9uTWVudGlvbiIsImVtYWlsT25SZXBseSIsImVtYWlsT25Gb2xsb3ciLCJmb2xsb3dQcmVmZXJlbmNlIiwiYWRkTG9jYXRpb25Ub1Bvc3QiLCJkaXNjb3ZlcmFibGVCeUVtYWlsIiwiY3VzdG9tQWRzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBRVQsQUFBTyxBQUFpQjs7OztBQUV4QixBQUFPLEFBQVU7Ozs7QUFFakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFFeEIsQUFBUyxBQUFlOzs7Ozs7O0FBRXhCLElBQU0sV0FBVyxTQUFYLEFBQVcsZUFBQTtRQUFBLEFBQ2IsWUFEYSxBQUNiO1FBRGEsQUFFYixxQkFGYSxBQUViO1FBRmEsQUFHYixlQUhhLEFBR2I7UUFIYSxBQUliLGdCQUphLEFB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