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
            lineNumber: 31
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, 'Settings'), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, 'Account'), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-image-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, _react2.default.createElement('img', { src: profile.image, alt: '', className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }), _react2.default.createElement('button', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-change-image-btn',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, 'change')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-form-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-form-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, _react2.default.createElement('input', { type: 'text', value: profile.name, onChange: function onChange(e) {
            return setName({ profileId: user.data.profileId, name: e.target.value });
        }, className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }), _react2.default.createElement('img', { src: '/static/user-icon.png', alt: '', className: 'jsx-1216333739' + ' ' + 'settings__account-icon',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__account-form-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, _react2.default.createElement('input', { type: 'email', value: profile.email, onChange: function onChange(e) {
            return setEmail({ profileId: user.data.profileId, email: e.target.value });
        }, className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }), _react2.default.createElement('img', { src: '/static/mail-icon.png', alt: '', className: 'jsx-1216333739' + ' ' + 'settings__account-icon',
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
    }, _react2.default.createElement('input', { type: 'password', className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }), _react2.default.createElement('img', { src: '/static/lock-icon.png', alt: '', className: 'jsx-1216333739' + ' ' + 'settings__account-icon',
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
    })))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }, 'Notifications'), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 64
        }
    }, _react2.default.createElement(_Slider2.default, { checked: user.data.emailOnFavorite, onClick: function onClick() {
            return setEmailOnFav(!user.data.emailOnFavorite);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }, 'email me when my posts are marked as favorites')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 67
        }
    }, _react2.default.createElement(_Slider2.default, { checked: user.data.emailOnMention, onClick: function onClick() {
            return setEmailOnMention(!user.data.emailOnMention);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }, 'email me when I\'m mentioned')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }, _react2.default.createElement(_Slider2.default, { checked: user.data.emailOnReply, onClick: function onClick() {
            return setEmailOnReply(!user.data.emailOnReply);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, 'email me when I get a reply')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__notifications-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }, _react2.default.createElement(_Slider2.default, { checked: user.data.emailOnFollow, onClick: function onClick() {
            return setEmailOnFollow(!user.data.emailOnFollow);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }, 'email me when someone follows me'))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 78
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 79
        }
    }, 'Privacy'), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.followPreference === 'anyone', onClick: function onClick() {
            return setFollowPreference('anyone');
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }, 'allow anyone to tag me')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 84
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.followPreference === 'followers', onClick: function onClick() {
            return setFollowPreference('followers');
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 85
        }
    }, 'only allow people I follow to tag me')), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.followPreference === 'nobody', onClick: function onClick() {
            return setFollowPreference('nobody');
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 88
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 88
        }
    }, 'don\'t allow anyone to tag me'))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 91
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.addLocationToPost, onClick: function onClick() {
            return setAddLocationPost(!user.data.addLocationToPost);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }, 'add a location to my posts'))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 96
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 97
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.discoverableByEmail, onClick: function onClick() {
            return setDiscoverableEmail(!user.data.discoverableByEmail);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 98
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 98
        }
    }, 'let others find me by email address'))), _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-group',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 101
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1216333739' + ' ' + 'settings__privacy-row',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 102
        }
    }, _react2.default.createElement(_RadioButton2.default, { checked: user.data.customAds, onClick: function onClick() {
            return setCustomAds(!user.data.customAds);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 103
        }
    }), ' ', _react2.default.createElement('span', {
        className: 'jsx-1216333739',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 103
        }
    }, 'tailor ads based on my information')))))), _react2.default.createElement(_style2.default, {
        styleId: '1216333739',
        css: '.settings.jsx-1216333739{max-width:575px;margin:49px auto 0;font-size:16px;color:#70767f;}h1.jsx-1216333739{margin:0 0 54px;font-size:30px;font-weight:normal;color:#3f454d;}h2.jsx-1216333739{margin:0 0 25px;font-size:13px;font-weight:500;color:#70767f;text-transform:uppercase;}.settings__account.jsx-1216333739{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-itmes:flex-start;-webkit-box-align-itmes:flex-start;-ms-flex-align-itmes:flex-start;align-itmes:flex-start;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;}.settings__account.jsx-1216333739,.settings__notifications.jsx-1216333739{padding:0 0 50px 0;margin:0 0 48px;border-bottom:1px solid #dee1e5;}.settings__account-image-container.jsx-1216333739{-webkit-flex:0 0 85px;-ms-flex:0 0 85px;flex:0 0 85px;}.settings__account-image-container.jsx-1216333739 img.jsx-1216333739{border-radius:4px;margin:0 0 10px 0;}.settings__account-change-image-btn.jsx-1216333739{display:block;width:100%;padding:6px 0;background:#fff;border:1px solid #bec3cc;border-radius:4px;text-align:center;color:#bec3cc;cursor:pointer;}.settings__account-change-image-btn.jsx-1216333739:hover,.settings__account-change-image-btn.jsx-1216333739:active{color:#9a9fa9;border-color:#9a9fa9;}.settings__account-form-container.jsx-1216333739{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin:0 0 0 50px;}.settings__account-form-row.jsx-1216333739{margin-bottom:20px;position:relative;}.settings__account.jsx-1216333739 input.jsx-1216333739{width:100%;padding:9px 14px 9px 40px;border:1px solid #bec3cc;border-radius:4px;outline:none;font-size:16px;color:#33f454d;}.settings__account.jsx-1216333739 input.jsx-1216333739:focus{outline:none;}.settings__account-icon.jsx-1216333739{position:absolute;top:13px;left:13px;}.settings__notifications-row.jsx-1216333739{margin:0 0 20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.settings__notifications-row.jsx-1216333739 span.jsx-1216333739{margin:0 0 0 25px;}.settings__privacy-row.jsx-1216333739{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 0 10px 0;}.settings__privacy-row.jsx-1216333739 span.jsx-1216333739{margin:0 0 0 26px;}.settings__privacy-group.jsx-1216333739{margin:0 0 25px 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvc2V0dGluZ3MuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkdvQixBQUdpQyxBQVFBLEFBUUEsQUFTSCxBQVFNLEFBT0wsQUFJSSxBQUtKLEFBa0JBLEFBS0EsQUFLSyxBQUtSLEFBYUUsQUFJSyxBQU1BLEFBUUEsQUFJTCxBQU9LLEFBSUEsV0E3Q1EsRUFhOUIsQ0E5Q2UsQUFrQlUsRUFuRUYsQUFTSixBQVFBLEVBMkJHLEFBdURULEFBT0ksQUFPakIsQUFXQSxBQUlBLENBL0ZvQixBQTRDRSxNQTFCSixFQWlESixJQTFGUyxBQVFILElBaEJELEFBaUNpQixBQWlDcEMsQ0F2QkEsQ0FpQ0EsQUFNNkIsQUFpQjdCLEVBaERvQixRQWxDRixHQWhCQSxBQVFBLElBNkJsQixBQWdDc0IsQ0FqQk8sTUFuQ0EsQ0FpRVAsRUFqRnRCLEFBUUEsR0F3QkEsS0FxQ0EsRUFoRHVCLEFBNEZBLE1BN0RELEFBK0JMLE1BbEVqQixNQXNGdUIsQ0FsQkosS0EvQkcsVUFnQ0gsUUEvQkQsT0FnQ2xCLE9BOUJtQixhQW5DUSxBQTRGSixFQXhEdkIsZ0JBOEN1QiwyRUFZRCxrQkFYdEIsQUFZQSxVQTlGNEIsdUdBQzVCIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUvc2V0dGluZ3MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi4vLi4vbW9kdWxlcy9zdG9yZSc7XG5pbXBvcnQgeyBnZXRBdXRob3IgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Byb2ZpbGUvcHJvZmlsZS5zZWxlY3RvcnMnO1xuaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vbGF5b3V0cy9CYXNlJztcblxuaW1wb3J0IFNsaWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NsaWRlcic7XG5pbXBvcnQgUmFkaW9CdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SYWRpb0J1dHRvbic7XG5cbmltcG9ydCB7IGFjdGlvbnMgYXMgdXNlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3VzZXInO1xuaW1wb3J0IHsgYWN0aW9ucyBhcyBwcm9maWxlQWN0aW9ucyB9IGZyb20gJy4uLy4uL21vZHVsZXMvcHJvZmlsZSc7XG5cbmNvbnN0IFNldHRpbmdzID0gKHtcbiAgICB1c2VyLFxuICAgIHByb2ZpbGUsXG4gICAgc2V0UHJvZmlsZUltZyxcbiAgICBzZXROYW1lLFxuICAgIHNldEVtYWlsLFxuICAgIHNldEVtYWlsT25GYXYsXG4gICAgc2V0RW1haWxPbk1lbnRpb24sXG4gICAgc2V0RW1haWxPblJlcGx5LFxuICAgIHNldEVtYWlsT25Gb2xsb3csXG4gICAgc2V0Rm9sbG93UHJlZmVyZW5jZSxcbiAgICBzZXRBZGRMb2NhdGlvblBvc3QsXG4gICAgc2V0RGlzY292ZXJhYmxlRW1haWwsXG4gICAgc2V0Q3VzdG9tQWRzXG59KSA9PiAoXG4gICAgPEJhc2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxoMT5TZXR0aW5nczwvaDE+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPkFjY291bnQ8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fYWNjb3VudC1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9maWxlLmltYWdlfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNldHRpbmdzX19hY2NvdW50LWNoYW5nZS1pbWFnZS1idG5cIj5jaGFuZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvZmlsZS5uYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoeyBwcm9maWxlSWQ6IHVzZXIuZGF0YS5wcm9maWxlSWQsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtaWNvblwiIHNyYz1cIi9zdGF0aWMvdXNlci1pY29uLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fYWNjb3VudC1mb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17cHJvZmlsZS5lbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbCh7IHByb2ZpbGVJZDogdXNlci5kYXRhLnByb2ZpbGVJZCwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtaWNvblwiIHNyYz1cIi9zdGF0aWMvbWFpbC1pY29uLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fYWNjb3VudC1mb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2V0dGluZ3NfX2FjY291bnQtaWNvblwiIHNyYz1cIi9zdGF0aWMvbG9jay1pY29uLnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fYWNjb3VudC1mb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNldHRpbmdzX19hY2NvdW50LWljb25cIiBzcmM9XCIvc3RhdGljL2xvY2staWNvbi5wbmdcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19ub3RpZmljYXRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Ob3RpZmljYXRpb25zPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fbm90aWZpY2F0aW9ucy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgY2hlY2tlZD17dXNlci5kYXRhLmVtYWlsT25GYXZvcml0ZX0gb25DbGljaz17KCkgPT4gc2V0RW1haWxPbkZhdighdXNlci5kYXRhLmVtYWlsT25GYXZvcml0ZSl9IC8+IDxzcGFuPmVtYWlsIG1lIHdoZW4gbXkgcG9zdHMgYXJlIG1hcmtlZCBhcyBmYXZvcml0ZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19ub3RpZmljYXRpb25zLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBjaGVja2VkPXt1c2VyLmRhdGEuZW1haWxPbk1lbnRpb259IG9uQ2xpY2s9eygpID0+IHNldEVtYWlsT25NZW50aW9uKCF1c2VyLmRhdGEuZW1haWxPbk1lbnRpb24pfSAvPiA8c3Bhbj5lbWFpbCBtZSB3aGVuIEknbSBtZW50aW9uZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19ub3RpZmljYXRpb25zLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBjaGVja2VkPXt1c2VyLmRhdGEuZW1haWxPblJlcGx5fSBvbkNsaWNrPXsoKSA9PiBzZXRFbWFpbE9uUmVwbHkoIXVzZXIuZGF0YS5lbWFpbE9uUmVwbHkpfSAvPiA8c3Bhbj5lbWFpbCBtZSB3aGVuIEkgZ2V0IGEgcmVwbHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19ub3RpZmljYXRpb25zLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBjaGVja2VkPXt1c2VyLmRhdGEuZW1haWxPbkZvbGxvd30gb25DbGljaz17KCkgPT4gc2V0RW1haWxPbkZvbGxvdyghdXNlci5kYXRhLmVtYWlsT25Gb2xsb3cpfSAvPiA8c3Bhbj5lbWFpbCBtZSB3aGVuIHNvbWVvbmUgZm9sbG93cyBtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19wcml2YWN5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Qcml2YWN5PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b24gY2hlY2tlZD17dXNlci5kYXRhLmZvbGxvd1ByZWZlcmVuY2UgPT09ICdhbnlvbmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRGb2xsb3dQcmVmZXJlbmNlKCdhbnlvbmUnKX0gLz4gPHNwYW4+YWxsb3cgYW55b25lIHRvIHRhZyBtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b24gY2hlY2tlZD17dXNlci5kYXRhLmZvbGxvd1ByZWZlcmVuY2UgPT09ICdmb2xsb3dlcnMnfSBvbkNsaWNrPXsoKSA9PiBzZXRGb2xsb3dQcmVmZXJlbmNlKCdmb2xsb3dlcnMnKX0gLz4gPHNwYW4+b25seSBhbGxvdyBwZW9wbGUgSSBmb2xsb3cgdG8gdGFnIG1lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19wcml2YWN5LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvbiBjaGVja2VkPXt1c2VyLmRhdGEuZm9sbG93UHJlZmVyZW5jZSA9PT0gJ25vYm9keSd9IG9uQ2xpY2s9eygpID0+IHNldEZvbGxvd1ByZWZlcmVuY2UoJ25vYm9keScpfSAvPiA8c3Bhbj5kb24ndCBhbGxvdyBhbnlvbmUgdG8gdGFnIG1lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19wcml2YWN5LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzX19wcml2YWN5LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvbiBjaGVja2VkPXt1c2VyLmRhdGEuYWRkTG9jYXRpb25Ub1Bvc3R9IG9uQ2xpY2s9eygpID0+IHNldEFkZExvY2F0aW9uUG9zdCghdXNlci5kYXRhLmFkZExvY2F0aW9uVG9Qb3N0KX0gLz4gPHNwYW4+YWRkIGEgbG9jYXRpb24gdG8gbXkgcG9zdHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX3ByaXZhY3ktZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NfX3ByaXZhY3ktcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uIGNoZWNrZWQ9e3VzZXIuZGF0YS5kaXNjb3ZlcmFibGVCeUVtYWlsfSBvbkNsaWNrPXsoKSA9PiBzZXREaXNjb3ZlcmFibGVFbWFpbCghdXNlci5kYXRhLmRpc2NvdmVyYWJsZUJ5RW1haWwpfSAvPiA8c3Bhbj5sZXQgb3RoZXJzIGZpbmQgbWUgYnkgZW1haWwgYWRkcmVzczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc19fcHJpdmFjeS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b24gY2hlY2tlZD17dXNlci5kYXRhLmN1c3RvbUFkc30gb25DbGljaz17KCkgPT4gc2V0Q3VzdG9tQWRzKCF1c2VyLmRhdGEuY3VzdG9tQWRzKX0gLz4gPHNwYW4+dGFpbG9yIGFkcyBiYXNlZCBvbiBteSBpbmZvcm1hdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc2V0dGluZ3Mge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTc1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0OXB4IGF1dG8gMDtcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzY3ZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDU0cHg7XG5cbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNmNDU0ZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHg7XG5cbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzY3ZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX2FjY291bnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBhbGlnbi1pdG1lczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZXR0aW5nc19fYWNjb3VudCxcbiAgICAgICAgICAgIC5zZXR0aW5nc19fbm90aWZpY2F0aW9ucyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDUwcHggMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA0OHB4O1xuXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUxZTU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZXR0aW5nc19fYWNjb3VudC1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA4NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuc2V0dGluZ3NfX2FjY291bnQtaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19hY2NvdW50LWNoYW5nZS1pbWFnZS1idG4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDA7XG5cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZWMzY2M7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYmVjM2NjO1xuXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX2FjY291bnQtY2hhbmdlLWltYWdlLWJ0bjpob3ZlcixcbiAgICAgICAgICAgIC5zZXR0aW5nc19fYWNjb3VudC1jaGFuZ2UtaW1hZ2UtYnRuOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5YTlmYTk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOWE5ZmE5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX2FjY291bnQtZm9ybS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19hY2NvdW50LWZvcm0tcm93IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19hY2NvdW50IGlucHV0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTRweCA5cHggNDBweDtcblxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZWMzY2M7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzZjQ1NGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZXR0aW5nc19fYWNjb3VudCBpbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19hY2NvdW50LWljb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEzcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMTNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNldHRpbmdzX19ub3RpZmljYXRpb25zLXJvdyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZXR0aW5nc19fbm90aWZpY2F0aW9ucy1yb3cgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX3ByaXZhY3ktcm93IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXR0aW5nc19fcHJpdmFjeS1yb3cgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAyNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2V0dGluZ3NfX3ByaXZhY3ktZ3JvdXAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvQmFzZT5cbik7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyLFxuICAgIHByb2ZpbGU6IGdldEF1dGhvcihzdGF0ZSwgc3RhdGUudXNlci5kYXRhLnByb2ZpbGVJZClcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgc2V0UHJvZmlsZUltZzogYmluZEFjdGlvbkNyZWF0b3JzKHByb2ZpbGVBY3Rpb25zLnNldFByb2ZpbGVJbWcsIGRpc3BhdGNoKSxcbiAgICBzZXROYW1lOiBiaW5kQWN0aW9uQ3JlYXRvcnMocHJvZmlsZUFjdGlvbnMuc2V0TmFtZSwgZGlzcGF0Y2gpLFxuICAgIHNldEVtYWlsOiBiaW5kQWN0aW9uQ3JlYXRvcnMocHJvZmlsZUFjdGlvbnMuc2V0RW1haWwsIGRpc3BhdGNoKSxcbiAgICBzZXRFbWFpbE9uRmF2OiBiaW5kQWN0aW9uQ3JlYXRvcnModXNlckFjdGlvbnMuc2V0RW1haWxPbkZhdiwgZGlzcGF0Y2gpLFxuICAgIHNldEVtYWlsT25NZW50aW9uOiBiaW5kQWN0aW9uQ3JlYXRvcnModXNlckFjdGlvbnMuc2V0RW1haWxPbk1lbnRpb24sIGRpc3BhdGNoKSxcbiAgICBzZXRFbWFpbE9uUmVwbHk6IGJpbmRBY3Rpb25DcmVhdG9ycyh1c2VyQWN0aW9ucy5zZXRFbWFpbE9uUmVwbHksIGRpc3BhdGNoKSxcbiAgICBzZXRFbWFpbE9uRm9sbG93OiBiaW5kQWN0aW9uQ3JlYXRvcnModXNlckFjdGlvbnMuc2V0RW1haWxPbkZvbGxvdywgZGlzcGF0Y2gpLFxuICAgIHNldEZvbGxvd1ByZWZlcmVuY2U6IGJpbmRBY3Rpb25DcmVhdG9ycyh1c2VyQWN0aW9ucy5zZXRGb2xsb3dQcmVmZXJlbmNlLCBkaXNwYXRjaCksXG4gICAgc2V0QWRkTG9jYXRpb25Qb3N0OiBiaW5kQWN0aW9uQ3JlYXRvcnModXNlckFjdGlvbnMuc2V0QWRkTG9jYXRpb25Qb3N0LCBkaXNwYXRjaCksXG4gICAgc2V0RGlzY292ZXJhYmxlRW1haWw6IGJpbmRBY3Rpb25DcmVhdG9ycyh1c2VyQWN0aW9ucy5zZXREaXNjb3ZlcmFibGVFbWFpbCwgZGlzcGF0Y2gpLFxuICAgIHNldEN1c3RvbUFkczogYmluZEFjdGlvbkNyZWF0b3JzKHVzZXJBY3Rpb25zLnNldEN1c3RvbUFkcywgZGlzcGF0Y2gpXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChjcmVhdGVTdG9yZSwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNldHRpbmdzKTsiXX0= */\n/*@ sourceURL=pages/profile/settings.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJ3aXRoUmVkdXgiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjcmVhdGVTdG9yZSIsImdldEF1dGhvciIsIkJhc2UiLCJTbGlkZXIiLCJSYWRpb0J1dHRvbiIsImFjdGlvbnMiLCJ1c2VyQWN0aW9ucyIsInByb2ZpbGVBY3Rpb25zIiwiU2V0dGluZ3MiLCJ1c2VyIiwicHJvZmlsZSIsInNldFByb2ZpbGVJbWciLCJzZXROYW1lIiwic2V0RW1haWwiLCJzZXRFbWFpbE9uRmF2Iiwic2V0RW1haWxPbk1lbnRpb24iLCJzZXRFbWFpbE9uUmVwbHkiLCJzZXRFbWFpbE9uRm9sbG93Iiwic2V0Rm9sbG93UHJlZmVyZW5jZSIsInNldEFkZExvY2F0aW9uUG9zdCIsInNldERpc2NvdmVyYWJsZUVtYWlsIiwic2V0Q3VzdG9tQWRzIiwiaW1hZ2UiLCJuYW1lIiwiZSIsInByb2ZpbGVJZCIsImRhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtYWlsIiwiZW1haWxPbkZhdm9yaXRlIiwiZW1haWxPbk1lbnRpb24iLCJlbWFpbE9uUmVwbHkiLCJlbWFpbE9uRm9sbG93IiwiZm9sbG93UHJlZmVyZW5jZSIsImFkZExvY2F0aW9uVG9Qb3N0IiwiZGlzY292ZXJhYmxlQnlFbWFpbCIsImN1c3RvbUFkcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUVULEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUyxBQUFpQjs7QUFDMUIsQUFBTyxBQUFVOzs7O0FBRWpCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWlCOzs7O0FBRXhCLEFBQVMsQUFBVyxBQUFtQjs7QUFDdkMsQUFBUyxBQUFXLEFB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SSwwREFBQSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyx1Q0FBWSxTQUFTLEtBQUEsQUFBSyxLQUEzQixBQUFnQyxXQUFXLFNBQVMsbUJBQUE7bUJBQU0sYUFBYSxDQUFDLEtBQUEsQUFBSyxLQUF6QixBQUFNLEFBQXdCO0FBQWxGO3NCQUFBO3dCQURKLEFBQ0k7QUFBQTtRQUFpRyxxQkFBQSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0F4RXpILEFBQ0ksQUFHSSxBQTJDSSxBQXVCSSxBQUNJLEFBQ3FHO2lCQXhFekg7YUFmYSxBQWViO0FBQUE7QUFmSjs7QUFzT0EsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsZ0JBQUEsQUFBQyxPQUFEOztjQUNkLE1BRDBCLEFBQ3BCLEFBQ1o7aUJBQVMsd0JBQUEsQUFBVSxPQUFPLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FGakIsQUFBWSxBQUV2QixBQUFpQztBQUZWLEFBQ2hDO0FBREo7O0FBS0EsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFEOzt1QkFDUiwrQkFBbUIsa0JBQW5CLEFBQWtDLGVBRFgsQUFDdkIsQUFBaUQsQUFDaEU7aUJBQVMsK0JBQW1CLGtCQUFuQixBQUFrQyxTQUZMLEFBRTdCLEFBQTJDLEFBQ3BEO2tCQUFVLCtCQUFtQixrQkFBbkIsQUFBa0MsVUFITixBQUc1QixBQUE0QyxBQUN0RDt1QkFBZSwrQkFBbUIsY0FBbkIsQUFBK0IsZUFKUixBQUl2QixBQUE4QyxBQUM3RDsyQkFBbUIsK0JBQW1CLGNBQW5CLEFBQStCLG1CQUxaLEFBS25CLEFBQWtELEFBQ3JFO3lCQUFpQiwrQkFBbUIsY0FBbkIsQUFBK0IsaUJBTlYsQUFNckIsQUFBZ0QsQUFDakU7MEJBQWtCLCtCQUFtQixjQUFuQixBQUErQixrQkFQWCxBQU9wQixBQUFpRCxBQUNuRTs2QkFBcUIsK0JBQW1CLGNBQW5CLEFBQStCLHFCQVJkLEFBUWpCLEFBQW9ELEFBQ3pFOzRCQUFvQiwrQkFBbUIsY0FBbkIsQUFBK0Isb0JBVGIsQUFTbEIsQUFBbUQsQUFDdkU7OEJBQXNCLCtCQUFtQixjQUFuQixBQUErQixzQkFWZixBQVVoQixBQUFxRCxBQUMzRTtzQkFBYywrQkFBbUIsY0FBbkIsQUFBK0IsY0FYdEIsQUFBZSxBQVd4QixBQUE2QztBQVhyQixBQUN0QztBQURKLEFBZUE7O2tCQUFlLEFBQVUsaURBQVYsQUFBdUIsaUJBQXZCLEFBQXdDLG9CQUF2RCxBQUFlLEFBQTREIiwiZmlsZSI6InNldHRpbmdzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=