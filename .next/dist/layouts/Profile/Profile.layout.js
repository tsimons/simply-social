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

var _Base = require('../Base');

var _Base2 = _interopRequireDefault(_Base);

var _SubNavigation = require('../../components/SubNavigation');

var _SubNavigation2 = _interopRequireDefault(_SubNavigation);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/layouts/Profile/Profile.layout.js';


var ProfileLayout = function ProfileLayout(_ref) {
    var profile = _ref.profile,
        children = _ref.children;

    var followersCount = (0, _formatNumber2.default)(profile.followers.length);
    var followingCount = (0, _formatNumber2.default)(profile.following.length);

    var links = [{
        href: '/profile',
        name: profile.name + '\'s Feed'
    }, {
        href: '/profile/followers',
        name: followersCount + ' Followers'
    }, {
        href: '/profile/following',
        name: followingCount + ' following'
    }];

    return _react2.default.createElement(_Base2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2729932527' + ' ' + 'profile-layout__header',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement(_Header2.default, { profile: profile, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }), _react2.default.createElement(_SubNavigation2.default, { links: links, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-2729932527' + ' ' + 'profile-layout__content',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, children), _react2.default.createElement(_style2.default, {
        styleId: '2729932527',
        css: '.profile-layout__header.jsx-2729932527{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:427px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-top:90px;background:url(/static/hero-background.jpg) center center no-repeat;background-size:cover;}'
    }));
};

ProfileLayout.displayName = 'ProfileLayout';
ProfileLayout.propTypes = {
    children: _propTypes.node.isRequired
};

exports.default = ProfileLayout;