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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvUG9zdE1vZGFsQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsImdldFBvc3QiLCJhY3Rpb25zIiwiZ2V0QXV0aG9yIiwiTW9kYWwiLCJQb3N0IiwiUG9zdE1vZGFsIiwicG9zdCIsImF1dGhvciIsImxpa2VkIiwibGF5b3V0IiwibGlrZSIsInVzZXJJZCIsIm9uQ2xvc2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImZvY3VzZWQiLCJwb3N0cyIsInVpIiwiZm9jdXNlZFBvc3QiLCJ1c2VyIiwiZGF0YSIsInByb2ZpbGVJZCIsImxpa2VzIiwiaW5kZXhPZiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImxpa2VQb3N0IiwiYmx1clBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUVULEFBQVMsQUFBZTs7QUFDeEIsQUFBUyxBQUFlOztBQUN4QixBQUFTLEFBQWlCOztBQUUxQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFVOzs7Ozs7Ozs7QUFFakIsSUFBTSxZQUFZLFNBQVosQUFBWSxnQkFBQTtRQUFBLEFBQUcsWUFBSCxBQUFHO1FBQUgsQUFBUyxjQUFULEFBQVM7UUFBVCxBQUFpQixhQUFqQixBQUFpQjtRQUFqQixBQUF3QixjQUF4QixBQUF3QjtRQUF4QixBQUFnQyxZQUFoQyxBQUFnQztRQUFoQyxBQUFzQyxjQUF0QyxBQUFzQztRQUF0QyxBQUE4QyxlQUE5QyxBQUE4QztrQ0FFeEQsQUFBQyxpQ0FBTSxTQUFQLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxBQUFDLGdDQUFLLFFBQU4sQUFBYSxjQUFhLE1BQTFCLEFBQWdDLE1BQU0sUUFBdEMsQUFBOEMsUUFBUSxPQUF0RCxBQUE2RCxPQUFPLE1BQXBFLEFBQTBFLE1BQU0sUUFBaEYsQUFBd0Y7c0JBQXhGO3dCQUZSLEFBQ0ksQUFDSTtBQUFBO09BRlI7O3NCQUtJO3dCQU5VLEFBTVY7QUFBQTtBQUFBLEtBQUE7QUFOUjs7QUFTQSxJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDL0I7UUFBTSxVQUFVLE1BQUEsQUFBTSxNQUFOLEFBQVksR0FBNUIsQUFBK0IsQUFDL0I7UUFBSSxDQUFKLEFBQUssU0FBUyxBQUNWO2VBQUEsQUFBTyxBQUNWO0FBQ0Q7UUFBTSxPQUFPLG9CQUFBLEFBQVEsT0FBTyxNQUFBLEFBQU0sTUFBTixBQUFZLEdBQXhDLEFBQWEsQUFBOEIsQUFDM0M7UUFBTSxTQUFTLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FBMUIsQUFBK0IsQUFFL0I7OztjQUFPLEFBRUg7Z0JBRkcsQUFHSDtnQkFBUSx3QkFBQSxBQUFVLE9BQU8sS0FIdEIsQUFHSyxBQUFzQixBQUM5QjtlQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixVQUFVLENBSnhDLEFBQU8sQUFJa0MsQUFFNUM7QUFOVSxBQUNIO0FBVFI7O0FBZ0JBLElBQU07VUFDSSxnQkFEaUIsQUFDVCxBQUNkO2FBQVMsZ0JBRmIsQUFBMkIsQUFFTixBQUdyQjtBQUwyQixBQUN2Qjs7a0JBSVcseUJBQUEsQUFBUSxpQkFBUixBQUF5QixvQkFBeEMsQUFBZSxBQUE2QyIsImZpbGUiOiJQb3N0TW9kYWxDb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==