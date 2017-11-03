'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _posts = require('../modules/posts/posts.selectors');

var _posts2 = require('../modules/posts/posts.reducer');

var _profile = require('../modules/profile/profile.selectors');

var _Modal = require('../components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Post = require('../components/Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/containers/PostModalContainer.js';


var PostModal = function PostModal(_ref) {
    var post = _ref.post,
        author = _ref.author,
        liked = _ref.liked,
        layout = _ref.layout,
        like = _ref.like,
        userId = _ref.userId,
        onClose = _ref.onClose;
    return post ? _react2.default.createElement(_Modal2.default, { onClose: onClose, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_Post2.default, { layout: 'standalone', post: post, author: author, liked: liked, like: like, userId: userId, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    })) : _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    });
};

var mapStateToProps = function mapStateToProps(state) {
    var focused = state.posts.ui.focusedPost;
    if (!focused) {
        return {};
    }
    var post = (0, _posts.getPost)(state, state.posts.ui.focusedPost);
    var userId = state.user.data.profileId;

    return {
        post: post,
        userId: userId,
        author: (0, _profile.getAuthor)(state, post.author),
        liked: post.likes.indexOf(userId) > -1
    };
};

var mapDispatchToProps = {
    like: _posts2.actions.likePost,
    onClose: _posts2.actions.blurPost
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PostModal);