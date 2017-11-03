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

var _profile = require('../../modules/profile/profile.selectors');

var _Profile = require('../../layouts/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _ProfileSummary = require('../../components/ProfileSummary');

var _ProfileSummary2 = _interopRequireDefault(_ProfileSummary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/pages/profile/following.js?entry';


var FollowingView = function FollowingView(_ref) {
    var userProfile = _ref.userProfile,
        profiles = _ref.profiles;

    return _react2.default.createElement(_Profile2.default, { profile: userProfile, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1708124367' + ' ' + 'posts',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, profiles.map(function (p) {
        return _react2.default.createElement(_ProfileSummary2.default, { key: p.id, profile: p, __source: {
                fileName: _jsxFileName,
                lineNumber: 16
            }
        });
    })), _react2.default.createElement(_style2.default, {
        styleId: '1708124367',
        css: '.posts.jsx-1708124367{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-1708124367{max-width:1199px;}.post-container.jsx-1708124367{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}.posts--tile.jsx-1708124367 .post-container.jsx-1708124367{max-width:375px;margin:0 0 25px 25px;max-height:500px;}.posts--tile.jsx-1708124367 .post-container.jsx-1708124367:nth-child(3n + 1),.posts--tile.jsx-1708124367 .post-container.jsx-1708124367:first-child{margin-left:0;}'
    }));
};

FollowingView.displayName = 'FollowingView';
FollowingView.PropTypes = {};

var mapStateToProps = function mapStateToProps(state) {
    var userProfile = (0, _profile.getAuthor)(state, state.user.data.profileId);

    return {
        userProfile: userProfile,
        profiles: userProfile.following.map(function (id) {
            return (0, _profile.getAuthor)(state, id);
        })
    };
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default, mapStateToProps)(FollowingView);