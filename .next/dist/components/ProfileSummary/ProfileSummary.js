'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _formatNumber = require('../../helpers/formatNumber');

var _formatNumber2 = _interopRequireDefault(_formatNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/ProfileSummary/ProfileSummary.js';


var ProfileSummary = function ProfileSummary(_ref) {
    var profile = _ref.profile;
    return _react2.default.createElement('div', {
        className: 'jsx-597172903' + ' ' + 'profile',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-597172903' + ' ' + 'profile__image',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('img', { src: profile.image, alt: 'A photo of ' + profile.name, className: 'jsx-597172903',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-597172903' + ' ' + 'profile__info',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('p', {
        className: 'jsx-597172903' + ' ' + 'profile__name',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, profile.name), _react2.default.createElement('div', {
        className: 'jsx-597172903' + ' ' + 'profile__details',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('span', {
        className: 'jsx-597172903' + ' ' + 'profile__post-count',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, (0, _formatNumber2.default)(profile.posts.length), ' posts'), _react2.default.createElement('span', {
        className: 'jsx-597172903' + ' ' + 'profile__follower-count',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, (0, _formatNumber2.default)(profile.followers.length), ' Followers'), _react2.default.createElement('span', {
        className: 'jsx-597172903' + ' ' + 'profile__following-count',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, (0, _formatNumber2.default)(profile.following.length), ' Following'))), _react2.default.createElement('div', {
        className: 'jsx-597172903' + ' ' + 'profile__is-following',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement('img', { src: '/static/following-icon.png', alt: '', className: 'jsx-597172903',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '597172903',
        css: '.profile.jsx-597172903{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;width:100%;padding:25px 0;border-bottom:1px solid #dee1e5;}.profile__image.jsx-597172903{-webkit-flex:0 0 40px;-ms-flex:0 0 40px;flex:0 0 40px;}.profile__image.jsx-597172903 img.jsx-597172903{border-radius:4px;}.profile__info.jsx-597172903{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 0 0 16px;}.profile__name.jsx-597172903{font-size:16px;color:#3f454d;margin:0 0 12px;}.profile__details.jsx-597172903{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.profile__details.jsx-597172903 span.jsx-597172903{margin:0 22px 0 0;font-size:13px;color:#bec3cc;}.profile__is-following.jsx-597172903{-webkit-flex:0 0 30px;-ms-flex:0 0 30px;flex:0 0 30px;}'
    }));
};

ProfileSummary.displayName = 'ProfileSummary';
ProfileSummary.propTypes = {
    profile: (0, _propTypes.shape)({
        name: _propTypes.string,
        image: _propTypes.string,
        postCount: _propTypes.number,
        followersCount: _propTypes.number,
        followingCount: _propTypes.number
    }).isRequired
};

exports.default = ProfileSummary;