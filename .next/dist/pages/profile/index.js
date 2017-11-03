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

var _posts = require('../../modules/posts');

var _profile = require('../../modules/profile/profile.selectors');

var _Profile = require('../../layouts/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _Post = require('../../components/Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/pages/profile/index.js?entry';


var FeedView = function FeedView(_ref) {
    var posts = _ref.posts,
        profile = _ref.profile,
        userId = _ref.userId,
        likePost = _ref.likePost,
        focusPost = _ref.focusPost;
    return _react2.default.createElement(_Profile2.default, { profile: profile, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1796691531' + ' ' + 'posts',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, posts.map(function (p) {
        return _react2.default.createElement('div', {
            className: 'jsx-1796691531' + ' ' + 'post-container',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            }
        }, _react2.default.createElement(_Post2.default, { key: p.post.message, post: p.post, author: p.author, liked: p.liked, like: likePost, layout: 'list', userId: userId, focusPost: focusPost, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
            }
        }));
    })), _react2.default.createElement(_style2.default, {
        styleId: '1796691531',
        css: '.posts.jsx-1796691531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-1796691531{max-width:1199px;}.post-container.jsx-1796691531{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}.posts--tile.jsx-1796691531 .post-container.jsx-1796691531{max-width:375px;margin:0 0 25px 25px;max-height:500px;}.posts--tile.jsx-1796691531 .post-container.jsx-1796691531:nth-child(3n + 1),.posts--tile.jsx-1796691531 .post-container.jsx-1796691531:first-child{margin-left:0;}'
    }));
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        posts: state.posts.data.map(function (post) {
            return {
                post: post,
                author: (0, _profile.getAuthor)(state, post.author),
                liked: post.likes.indexOf(state.user.data.profileId) > -1
            };
        }),
        profile: (0, _profile.getAuthor)(state, state.user.data.profileId),
        userId: state.user.data.profileId
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        likePost: (0, _redux.bindActionCreators)(_posts.actions.likePost, dispatch),
        focusPost: (0, _redux.bindActionCreators)(_posts.actions.focusPost, dispatch)
    };
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default, mapStateToProps, mapDispatchToProps)(FeedView);