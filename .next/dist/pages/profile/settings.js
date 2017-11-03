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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _store = require('../../modules/store');

var _store2 = _interopRequireDefault(_store);

var _profile = require('../../modules/profile/profile.selectors');

var _Base = require('../../layouts/Base');

var _Base2 = _interopRequireDefault(_Base);

var _Slider = require('../../components/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _RadioButton = require('../../components/RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _user = require('../../modules/user');

var _profile2 = require('../../modules/profile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/pages/profile/settings.js?entry';


var Settings = function Settings(_ref) {
    var user = _ref.user,
        profile = _ref.profile,
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
            lineNumber: 32
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement('title', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, 'simplysocial | Settings')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, 'Settings'), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, 'Account'), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-image-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, _react2.default.createElement('img', { src: profile.image, alt: '', className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }), _react2.default.createElement('button', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-change-image-btn',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, 'change')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-form-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-form-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, _react2.default.createElement('input', { type: 'text', value: profile.name, onChange: function onChange(e) {
            return setName({ profileId: user.data.profileId, name: e.target.value });
        }, className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }), _react2.default.createElement('img', { src: '/static/user-icon.png', alt: '', className: 'jsx-1216333739' + ' ' + 'settings__account-icon',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-form-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }, _react2.default.createElement('input', { type: 'email', value: profile.email, onChange: function onChange(e) {
            return setEmail({ profileId: user.data.profileId, email: e.target.value });
        }, className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }), _react2.default.createElement('img', { src: '/static/mail-icon.png', alt: '', className: 'jsx-1216333739' + ' ' + 'settings__account-icon',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-form-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, _react2.default.createElement('input', { type: 'password', className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    }), _react2.default.createElement('img', { src: '/static/lock-icon.png', alt: '', className: 'jsx-1216333739' + ' ' + 'settings__account-icon',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-form-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }, _react2.default.createElement('input', { type: 'password', className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }), _react2.default.createElement('img', { src: '/static/lock-icon.png', alt: '', className: 'jsx-1216333739' + ' ' + 'settings__account-icon',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    })))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 66
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 67
        }
    }, 'Notifications'), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }, _react2.default.createElement(_Slider2.default, { checked: user.data.emailOnFavorite, onClick: function onClick() {
            return setEmailOnFav(!user.data.emailOnFavorite);
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
    }, 'email me when my posts are marked as favorites')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, _react2.default.createElement(_Slider2.default, { checked: user.data.emailOnMention, onClick: function onClick() {
            return setEmailOnMention(!user.data.emailOnMention);
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
    }, 'email me when I\'m mentioned')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }, _react2.default.createElement(_Slider2.default, { checked: user.data.emailOnReply, onClick: function onClick() {
            return setEmailOnReply(!user.data.emailOnReply);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 75
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 75
        }
    }, 'email me when I get a reply')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 77
        }
    }, _react2.default.createElement(_Slider2.default, { checked: user.data.emailOnFollow, onClick: function onClick() {
            return setEmailOnFollow(!user.data.emailOnFollow);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 78
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 78
        }
    }, 'email me when someone follows me'))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 83
        }
    }, 'Privacy'), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 84
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 85
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.followPreference === 'anyone', onClick: function onClick() {
            return setFollowPreference('anyone');
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
    }, 'allow anyone to tag me')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 88
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.followPreference === 'followers', onClick: function onClick() {
            return setFollowPreference('followers');
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 89
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 89
        }
    }, 'only allow people I follow to tag me')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 91
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.followPreference === 'nobody', onClick: function onClick() {
            return setFollowPreference('nobody');
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }, 'don\'t allow anyone to tag me'))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 95
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 96
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.addLocationToPost, onClick: function onClick() {
            return setAddLocationPost(!user.data.addLocationToPost);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 97
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 97
        }
    }, 'add a location to my posts'))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 100
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 101
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.discoverableByEmail, onClick: function onClick() {
            return setDiscoverableEmail(!user.data.discoverableByEmail);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 102
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 102
        }
    }, 'let others find me by email address'))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 105
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 106
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.customAds, onClick: function onClick() {
            return setCustomAds(!user.data.customAds);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 107
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 107
        }
    }, 'tailor ads based on my information')))))), _react2.default.createElement(_style2.default, {
        styleId: '1216333739',
        css: '.settings.jsx-1216333739{max-width:575px;margin:49px auto 0;font-size:16px;color:#70767f;}h1.jsx-1216333739{margin:0 0 54px;font-size:30px;font-weight:normal;color:#3f454d;}h2.jsx-1216333739{margin:0 0 25px;font-size:13px;font-weight:500;color:#70767f;text-transform:uppercase;}.settings__account.jsx-1216333739{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-itmes:flex-start;-webkit-box-align-itmes:flex-start;-ms-flex-align-itmes:flex-start;align-itmes:flex-start;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;}.settings__account.jsx-1216333739,.settings__notifications.jsx-1216333739{padding:0 0 50px 0;margin:0 0 48px;border-bottom:1px solid #dee1e5;}.settings__account-image-container.jsx-1216333739{-webkit-flex:0 0 85px;-ms-flex:0 0 85px;flex:0 0 85px;}.settings__account-image-container.jsx-1216333739 img.jsx-1216333739{border-radius:4px;margin:0 0 10px 0;}.settings__account-change-image-btn.jsx-1216333739{display:block;width:100%;padding:6px 0;background:#fff;border:1px solid #bec3cc;border-radius:4px;text-align:center;color:#bec3cc;cursor:pointer;}.settings__account-change-image-btn.jsx-1216333739:hover,.settings__account-change-image-btn.jsx-1216333739:active{color:#9a9fa9;border-color:#9a9fa9;}.settings__account-form-container.jsx-1216333739{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin:0 0 0 50px;}.settings__account-form-row.jsx-1216333739{margin-bottom:20px;position:relative;}.settings__account.jsx-1216333739 input.jsx-1216333739{width:100%;padding:9px 14px 9px 40px;border:1px solid #bec3cc;border-radius:4px;outline:none;font-size:16px;color:#33f454d;}.settings__account.jsx-1216333739 input.jsx-1216333739:focus{outline:none;}.settings__account-icon.jsx-1216333739{position:absolute;top:13px;left:13px;}.settings__notifications-row.jsx-1216333739{margin:0 0 20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.settings__notifications-row.jsx-1216333739 span.jsx-1216333739{margin:0 0 0 25px;}.settings__privacy-row.jsx-1216333739{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 0 10px 0;}.settings__privacy-row.jsx-1216333739 span.jsx-1216333739{margin:0 0 0 26px;}.settings__privacy-group.jsx-1216333739{margin:0 0 25px 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvc2V0dGluZ3MuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhvQixBQUdpQyxBQVFBLEFBUUEsQUFTSCxBQVFNLEFBT0wsQUFJSSxBQUtKLEFBa0JBLEFBS0EsQUFLSyxBQUtSLEFBYUUsQUFJSyxBQU1BLEFBUUEsQUFJTCxBQU9LLEFBSUEsV0E3Q1EsRUFhOUIsQ0E5Q2UsQUFrQlUsRUFuRUYsQUFTSixBQVFBLEVBMkJHLEFBdURULEFBT0ksQUFPakIsQUFXQSxBQUlBLENBL0ZvQixBQTRDRSxNQTFCSixFQWlESixJQTFGUyxBQVFILElBaEJELEFBaUNpQixBQWlDcEMsQ0F2QkEsQ0FpQ0EsQUFNNkIsQUFpQjdCLEVBaERvQixRQWxDRixHQWhCQSxBQVFBLElBNkJsQixBQWdDc0IsQ0FqQk8sTUFuQ0EsQ0FpRVAsRUFqRnRCLEFBUUEsR0F3QkEsS0FxQ0EsRUFoRHVCLEFBNEZBLE1BN0RELEFBK0JMLE1BbEVqQixNQXNGdUIsQ0FsQkosS0EvQkcsVUFnQ0gsUUEvQkQsT0FnQ2xCLE9BOUJtQixhQW5DUSxBQTRGSixFQXhEdkIsZ0JBOEN1QiwyRUFZRCxrQkFYdEIsQUFZQSxVQTlGNEIsdUdBQzVCIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUvc2V0dGluZ3MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuLi8uLi9tb2R1bGVzL3N0b3JlJztcbmltcG9ydCB7IGdldEF1dGhvciB9IGZyb20gJy4uLy4uL21vZHVsZXMvcHJvZmlsZS9wcm9maWxlLnNlbGVjdG9ycyc7XG5pbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9sYXlvdXRzL0Jhc2UnO1xuXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2xpZGVyJztcbmltcG9ydCBSYWRpb0J1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1JhZGlvQnV0dG9uJztcblxuaW1wb3J0IHsgYWN0aW9ucyBhcyB1c2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uL21vZHVsZXMvdXNlcic7XG5pbXBvcnQgeyBhY3Rpb25zIGFzIHByb2ZpbGVBY3Rpb25zIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9wcm9maWxlJztcblxuY29uc3QgU2V0dGluZ3MgPSAoe1xuICAgIHVzZXIsXG4gICAgcHJvZmlsZSxcbiAgICBzZXRQcm9maWxlSW1nLFxuICAgIHNldE5hbWUsXG4gICAgc2V0RW1haWwsXG4gICAgc2V0RW1haWxPbkZhdixcbiAgICBzZXRFbWFpbE9uTWVudGlvbixcbiAgICBzZXRFbWFpbE9uUmVwbHksXG4gICAgc2V0RW1haWxPbkZvbGxvdyxcbiAgICBzZXRGb2xsb3dQcmVmZXJlbmNlLFxuICAgIHNldEFkZExvY2F0aW9uUG9zdCxcbiAgICBzZXREaXNjb3ZlcmFibGVFbWFpbCxcbiAgICBzZXRDdXN0b21BZHNcbn0pID0+IChcbiAgICA8QmFzZT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+c2ltcGx5c29jaWFsIHwgU2V0dGluZ3M8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxoMT5TZXR0aW5nczwvaDE+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPkFjY291bnQ8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fYWNjb3VudC1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9maWxlLmltYWdlfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNldHRpbmdzX19hY2NvdW50LWNoYW5nZS1pbWFnZS1idG5cIj5jaGFuZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvZmlsZS5uYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoeyBwcm9maWxlSWQ6IHVzZXIuZGF0YS5wcm9maWxlSWQsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtaWNvblwiIHNyYz1cIi9zdGF0aWMvdXNlci1pY29uLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fYWNjb3VudC1mb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17cHJvZmlsZS5lbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbCh7IHByb2ZpbGVJZDogdXNlci5kYXRhLnByb2ZpbGVJZCwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtaWNvblwiIHNyYz1cIi9zdGF0aWMvbWFpbC1pY29uLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fYWNjb3VudC1mb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtaWNvblwiIHNyYz1cIi9zdGF0aWMvbG9jay1pY29uLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fYWNjb3VudC1mb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNldHRpbmdzX19hY2NvdW50LWljb25cIiBzcmM9XCIvc3RhdGljL2xvY2staWNvbi5wbmdcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19ub3RpZmljYXRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Ob3RpZmljYXRpb25zPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fbm90aWZpY2F0aW9ucy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgY2hlY2tlZD17dXNlci5kYXRhLmVtYWlsT25GYXZvcml0ZX0gb25DbGljaz17KCkgPT4gc2V0RW1haWxPbkZhdighdXNlci5kYXRhLmVtYWlsT25GYXZvcml0ZSl9IC8+IDxzcGFuPmVtYWlsIG1lIHdoZW4gbXkgcG9zdHMgYXJlIG1hcmtlZCBhcyBmYXZvcml0ZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19ub3RpZmljYXRpb25zLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBjaGVja2VkPXt1c2VyLmRhdGEuZW1haWxPbk1lbnRpb259IG9uQ2xpY2s9eygpID0+IHNldEVtYWlsT25NZW50aW9uKCF1c2VyLmRhdGEuZW1haWxPbk1lbnRpb24pfSAvPiA8c3Bhbj5lbWFpbCBtZSB3aGVuIEknbSBtZW50aW9uZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19ub3RpZmljYXRpb25zLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBjaGVja2VkPXt1c2VyLmRhdGEuZW1haWxPblJlcGx5fSBvbkNsaWNrPXsoKSA9PiBzZXRFbWFpbE9uUmVwbHkoIXVzZXIuZGF0YS5lbWFpbE9uUmVwbHkpfSAvPiA8c3Bhbj5lbWFpbCBtZSB3aGVuIEkgZ2V0IGEgcmVwbHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19ub3RpZmljYXRpb25zLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBjaGVja2VkPXt1c2VyLmRhdGEuZW1haWxPbkZvbGxvd30gb25DbGljaz17KCkgPT4gc2V0RW1haWxPbkZvbGxvdyghdXNlci5kYXRhLmVtYWlsT25Gb2xsb3cpfSAvPiA8c3Bhbj5lbWFpbCBtZSB3aGVuIHNvbWVvbmUgZm9sbG93cyBtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19wcml2YWN5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Qcml2YWN5PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b24gY2hlY2tlZD17dXNlci5kYXRhLmZvbGxvd1ByZWZlcmVuY2UgPT09ICdhbnlvbmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRGb2xsb3dQcmVmZXJlbmNlKCdhbnlvbmUnKX0gLz4gPHNwYW4+YWxsb3cgYW55b25lIHRvIHRhZyBtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b24gY2hlY2tlZD17dXNlci5kYXRhLmZvbGxvd1ByZWZlcmVuY2UgPT09ICdmb2xsb3dlcnMnfSBvbkNsaWNrPXsoKSA9PiBzZXRGb2xsb3dQcmVmZXJlbmNlKCdmb2xsb3dlcnMnKX0gLz4gPHNwYW4+b25seSBhbGxvdyBwZW9wbGUgSSBmb2xsb3cgdG8gdGFnIG1lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19wcml2YWN5LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvbiBjaGVja2VkPXt1c2VyLmRhdGEuZm9sbG93UHJlZmVyZW5jZSA9PT0gJ25vYm9keSd9IG9uQ2xpY2s9eygpID0+IHNldEZvbGxvd1ByZWZlcmVuY2UoJ25vYm9keScpfSAvPiA8c3Bhbj5kb24ndCBhbGxvdyBhbnlvbmUgdG8gdGFnIG1lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19wcml2YWN5LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19wcml2YWN5LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvbiBjaGVja2VkPXt1c2VyLmRhdGEuYWRkTG9jYXRpb25Ub1Bvc3R9IG9uQ2xpY2s9eygpID0+IHNldEFkZExvY2F0aW9uUG9zdCghdXNlci5kYXRhLmFkZExvY2F0aW9uVG9Qb3N0KX0gLz4gPHNwYW4+YWRkIGEgbG9jYXRpb24gdG8gbXkgcG9zdHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX3ByaXZhY3ktZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX3ByaXZhY3ktcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uIGNoZWNrZWQ9e3VzZXIuZGF0YS5kaXNjb3ZlcmFibGVCeUVtYWlsfSBvbkNsaWNrPXsoKSA9PiBzZXREaXNjb3ZlcmFibGVFbWFpbCghdXNlci5kYXRhLmRpc2NvdmVyYWJsZUJ5RW1haWwpfSAvPiA8c3Bhbj5sZXQgb3RoZXJzIGZpbmQgbWUgYnkgZW1haWwgYWRkcmVzczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b24gY2hlY2tlZD17dXNlci5kYXRhLmN1c3RvbUFkc30gb25DbGljaz17KCkgPT4gc2V0Q3VzdG9tQWRzKCF1c2VyLmRhdGEuY3VzdG9tQWRzKX0gLz4gPHNwYW4+dGFpbG9yIGFkcyBiYXNlZCBvbiBteSBpbmZvcm1hdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc2V0dGluZ3Mge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTc1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0OXB4IGF1dG8gMDtcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzY3ZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDU0cHg7XG5cbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNmNDU0ZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHg7XG5cbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzY3ZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX2FjY291bnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBhbGlnbi1pdG1lczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZXR0aW5nc19fYWNjb3VudCxcbiAgICAgICAgICAgIC5zZXR0aW5nc19fbm90aWZpY2F0aW9ucyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDUwcHggMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA0OHB4O1xuXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUxZTU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZXR0aW5nc19fYWNjb3VudC1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA4NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuc2V0dGluZ3NfX2FjY291bnQtaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19hY2NvdW50LWNoYW5nZS1pbWFnZS1idG4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDA7XG5cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZWMzY2M7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYmVjM2NjO1xuXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX2FjY291bnQtY2hhbmdlLWltYWdlLWJ0bjpob3ZlcixcbiAgICAgICAgICAgIC5zZXR0aW5nc19fYWNjb3VudC1jaGFuZ2UtaW1hZ2UtYnRuOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5YTlmYTk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOWE5ZmE5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX2FjY291bnQtZm9ybS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19hY2NvdW50LWZvcm0tcm93IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19hY2NvdW50IGlucHV0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTRweCA5cHggNDBweDtcblxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZWMzY2M7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzZjQ1NGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZXR0aW5nc19fYWNjb3VudCBpbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19hY2NvdW50LWljb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEzcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMTNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19ub3RpZmljYXRpb25zLXJvdyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZXR0aW5nc19fbm90aWZpY2F0aW9ucy1yb3cgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX3ByaXZhY3ktcm93IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXR0aW5nc19fcHJpdmFjeS1yb3cgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAyNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX3ByaXZhY3ktZ3JvdXAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvQmFzZT5cbik7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyLFxuICAgIHByb2ZpbGU6IGdldEF1dGhvcihzdGF0ZSwgc3RhdGUudXNlci5kYXRhLnByb2ZpbGVJZClcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgc2V0UHJvZmlsZUltZzogYmluZEFjdGlvbkNyZWF0b3JzKHByb2ZpbGVBY3Rpb25zLnNldFByb2ZpbGVJbWcsIGRpc3BhdGNoKSxcbiAgICBzZXROYW1lOiBiaW5kQWN0aW9uQ3JlYXRvcnMocHJvZmlsZUFjdGlvbnMuc2V0TmFtZSwgZGlzcGF0Y2gpLFxuICAgIHNldEVtYWlsOiBiaW5kQWN0aW9uQ3JlYXRvcnMocHJvZmlsZUFjdGlvbnMuc2V0RW1haWwsIGRpc3BhdGNoKSxcbiAgICBzZXRFbWFpbE9uRmF2OiBiaW5kQWN0aW9uQ3JlYXRvcnModXNlckFjdGlvbnMuc2V0RW1haWxPbkZhdiwgZGlzcGF0Y2gpLFxuICAgIHNldEVtYWlsT25NZW50aW9uOiBiaW5kQWN0aW9uQ3JlYXRvcnModXNlckFjdGlvbnMuc2V0RW1haWxPbk1lbnRpb24sIGRpc3BhdGNoKSxcbiAgICBzZXRFbWFpbE9uUmVwbHk6IGJpbmRBY3Rpb25DcmVhdG9ycyh1c2VyQWN0aW9ucy5zZXRFbWFpbE9uUmVwbHksIGRpc3BhdGNoKSxcbiAgICBzZXRFbWFpbE9uRm9sbG93OiBiaW5kQWN0aW9uQ3JlYXRvcnModXNlckFjdGlvbnMuc2V0RW1haWxPbkZvbGxvdywgZGlzcGF0Y2gpLFxuICAgIHNldEZvbGxvd1ByZWZlcmVuY2U6IGJpbmRBY3Rpb25DcmVhdG9ycyh1c2VyQWN0aW9ucy5zZXRGb2xsb3dQcmVmZXJlbmNlLCBkaXNwYXRjaCksXG4gICAgc2V0QWRkTG9jYXRpb25Qb3N0OiBiaW5kQWN0aW9uQ3JlYXRvcnModXNlckFjdGlvbnMuc2V0QWRkTG9jYXRpb25Qb3N0LCBkaXNwYXRjaCksXG4gICAgc2V0RGlzY292ZXJhYmxlRW1haWw6IGJpbmRBY3Rpb25DcmVhdG9ycyh1c2VyQWN0aW9ucy5zZXREaXNjb3ZlcmFibGVFbWFpbCwgZGlzcGF0Y2gpLFxuICAgIHNldEN1c3RvbUFkczogYmluZEFjdGlvbkNyZWF0b3JzKHVzZXJBY3Rpb25zLnNldEN1c3RvbUFkcywgZGlzcGF0Y2gpXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChjcmVhdGVTdG9yZSwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNldHRpbmdzKTsiXX0= */\n/*@ sourceURL=pages/profile/settings.js?entry */'
    }));
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        user: state.user,
        profile: (0, _profile.getAuthor)(state, state.user.data.profileId)
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        setProfileImg: (0, _redux.bindActionCreators)(_profile2.actions.setProfileImg, dispatch),
        setName: (0, _redux.bindActionCreators)(_profile2.actions.setName, dispatch),
        setEmail: (0, _redux.bindActionCreators)(_profile2.actions.setEmail, dispatch),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJ3aXRoUmVkdXgiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJIZWFkIiwiY3JlYXRlU3RvcmUiLCJnZXRBdXRob3IiLCJCYXNlIiwiU2xpZGVyIiwiUmFkaW9CdXR0b24iLCJhY3Rpb25zIiwidXNlckFjdGlvbnMiLCJwcm9maWxlQWN0aW9ucyIsIlNldHRpbmdzIiwidXNlciIsInByb2ZpbGUiLCJzZXRQcm9maWxlSW1nIiwic2V0TmFtZSIsInNldEVtYWlsIiwic2V0RW1haWxPbkZhdiIsInNldEVtYWlsT25NZW50aW9uIiwic2V0RW1haWxPblJlcGx5Iiwic2V0RW1haWxPbkZvbGxvdyIsInNldEZvbGxvd1ByZWZlcmVuY2UiLCJzZXRBZGRMb2NhdGlvblBvc3QiLCJzZXREaXNjb3ZlcmFibGVFbWFpbCIsInNldEN1c3RvbUFkcyIsImltYWdlIiwibmFtZSIsImUiLCJwcm9maWxlSWQiLCJkYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJlbWFpbCIsImVtYWlsT25GYXZvcml0ZSIsImVtYWlsT25NZW50aW9uIiwiZW1haWxPblJlcGx5IiwiZW1haWxPbkZvbGxvdyIsImZvbGxvd1ByZWZlcmVuY2UiLCJhZGRMb2NhdGlvblRvUG9zdCIsImRpc2NvdmVyYWJsZUJ5RW1haWwiLCJjdXN0b21BZHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFTLEFBQWlCOztBQUMxQixBQUFPLEFBQVU7Ozs7QUFFakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFFeEIsQUFBUyxBQUFXLEFBQW1C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a0QsQUFDckU7eUJBQWlCLCtCQUFtQixjQUFuQixBQUErQixpQkFOVixBQU1yQixBQUFnRCxBQUNqRTswQkFBa0IsK0JBQW1CLGNBQW5CLEFBQStCLGtCQVBYLEFBT3BCLEFBQWlELEFBQ25FOzZCQUFxQiwrQkFBbUIsY0FBbkIsQUFBK0IscUJBUmQsQUFRakIsQUFBb0QsQUFDekU7NEJBQW9CLCtCQUFtQixjQUFuQixBQUErQixvQkFUYixBQVNsQixBQUFtRCxBQUN2RTs4QkFBc0IsK0JBQW1CLGNBQW5CLEFBQStCLHNCQVZmLEFBVWhCLEFBQXFELEFBQzNFO3NCQUFjLCtCQUFtQixjQUFuQixBQUErQixjQVh0QixBQUFlLEFBV3hCLEFBQTZDO0FBWHJCLEFBQ3RDO0FBREosQUFlQTs7a0JBQWUsQUFBVSxpREFBVixBQUF1QixpQkFBdkIsQUFBd0Msb0JBQXZELEFBQWUsQUFBNEQiLCJmaWxlIjoic2V0dGluZ3MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==