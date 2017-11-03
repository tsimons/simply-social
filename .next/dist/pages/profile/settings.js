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
        css: '.settings.jsx-1216333739{max-width:575px;margin:49px auto 0;font-size:16px;color:#70767f;}h1.jsx-1216333739{margin:0 0 54px;font-size:30px;font-weight:normal;color:#3f454d;}h2.jsx-1216333739{margin:0 0 25px;font-size:13px;font-weight:500;color:#70767f;text-transform:uppercase;}.settings__account.jsx-1216333739{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-itmes:flex-start;-webkit-box-align-itmes:flex-start;-ms-flex-align-itmes:flex-start;align-itmes:flex-start;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;}.settings__account.jsx-1216333739,.settings__notifications.jsx-1216333739{padding:0 0 50px 0;margin:0 0 48px;border-bottom:1px solid #dee1e5;}.settings__account-image-container.jsx-1216333739{-webkit-flex:0 0 85px;-ms-flex:0 0 85px;flex:0 0 85px;}.settings__account-image-container.jsx-1216333739 img.jsx-1216333739{border-radius:4px;margin:0 0 10px 0;}.settings__account-change-image-btn.jsx-1216333739{display:block;width:100%;padding:6px 0;background:#fff;border:1px solid #bec3cc;border-radius:4px;text-align:center;color:#bec3cc;cursor:pointer;}.settings__account-change-image-btn.jsx-1216333739:hover,.settings__account-change-image-btn.jsx-1216333739:active{color:#9a9fa9;border-color:#9a9fa9;}.settings__account-form-container.jsx-1216333739{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin:0 0 0 50px;}.settings__account-form-row.jsx-1216333739{margin-bottom:20px;position:relative;}.settings__account.jsx-1216333739 input.jsx-1216333739{width:100%;padding:9px 14px 9px 40px;border:1px solid #bec3cc;border-radius:4px;outline:none;font-size:16px;color:#33f454d;}.settings__account.jsx-1216333739 input.jsx-1216333739:focus{outline:none;}.settings__account-icon.jsx-1216333739{position:absolute;top:13px;left:13px;}.settings__notifications-row.jsx-1216333739{margin:0 0 20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.settings__notifications-row.jsx-1216333739 span.jsx-1216333739{margin:0 0 0 25px;}.settings__privacy-row.jsx-1216333739{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 0 10px 0;}.settings__privacy-row.jsx-1216333739 span.jsx-1216333739{margin:0 0 0 26px;}.settings__privacy-group.jsx-1216333739{margin:0 0 25px 0;}'
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