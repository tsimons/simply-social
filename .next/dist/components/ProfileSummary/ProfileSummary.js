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

var _jsxFileName = '/Users/TJ/projects/simply-social/components/ProfileSummary/ProfileSummary.js';


var ProfileSummary = function ProfileSummary(_ref) {
    var profile = _ref.profile;
    return _react2.default.createElement('div', {
        className: 'jsx-1368918888' + ' ' + 'profile',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1368918888' + ' ' + 'profile__image',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('img', { src: profile.image, alt: 'A photo of ' + profile.name, className: 'jsx-1368918888',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1368918888' + ' ' + 'profile__info',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('p', {
        className: 'jsx-1368918888' + ' ' + 'profile__name',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, profile.name), _react2.default.createElement('div', {
        className: 'jsx-1368918888' + ' ' + 'profile__details',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('span', {
        className: 'jsx-1368918888' + ' ' + 'profile__post-count',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, profile.postCount), _react2.default.createElement('span', {
        className: 'jsx-1368918888' + ' ' + 'profile__follower-count',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, profile.followersCount), _react2.default.createElement('span', {
        className: 'jsx-1368918888' + ' ' + 'profile__following-count',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, profile.followingCount))), _react2.default.createElement('div', {
        className: 'jsx-1368918888' + ' ' + 'profile__is-following',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('span', {
        className: 'jsx-1368918888' + ' ' + 'profile__is-following-check',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, '\u2713')), _react2.default.createElement(_style2.default, {
        styleId: '1368918888',
        css: '.profile.jsx-1368918888{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;padding:25px 0;border-bottom:1px solid #dee1e5;}.profile__image.jsx-1368918888{-webkit-flex:0 0 40px;-ms-flex:0 0 40px;flex:0 0 40px;}.profile__image.jsx-1368918888 img.jsx-1368918888{border-radius:4px;}.profile__info.jsx-1368918888{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 0 0 16px;}.profile__name.jsx-1368918888{font-size:16px;color:#3f454d;margin:0 0 12px;}.profile__details.jsx-1368918888{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.profile__details.jsx-1368918888 span.jsx-1368918888{margin:0 22px 0 0;font-size:13px;color:#bec3cc;}.profile__is-following.jsx-1368918888{-webkit-flex:0 0 30px;-ms-flex:0 0 30px;flex:0 0 30px;}.profile__is-following-check.jsx-1368918888{display:inline-block;padding:10px 0;height:30px;width:30px;background:#00b286;border-radius:4px;color:white;text-align:center;line-height:.7;}'
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