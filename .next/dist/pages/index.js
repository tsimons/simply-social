'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _redux = require('redux');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _store = require('../modules/store');

var _store2 = _interopRequireDefault(_store);

var _posts = require('../modules/posts');

var _profile = require('../modules/profile/profile.selectors');

var _Home = require('../layouts/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Post = require('../components/Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/pages/index.js?entry';


var allPosts = function allPosts(_ref) {
    var layout = _ref.layout,
        posts = _ref.posts,
        likePost = _ref.likePost,
        setPostLayout = _ref.setPostLayout,
        addPost = _ref.addPost,
        userId = _ref.userId,
        focusPost = _ref.focusPost,
        reply = _ref.reply;
    return _react2.default.createElement(_Home2.default, { setPostLayout: setPostLayout, layout: layout, route: 'All Posts', addPost: addPost, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement('title', {
        className: 'jsx-2164670294',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, 'simplysocial | All Posts')), _react2.default.createElement('div', {
        className: 'jsx-2164670294' + ' ' + ('posts posts--' + layout),
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, posts.map(function (p) {
        return _react2.default.createElement('div', { key: p.post.id, className: 'jsx-2164670294' + ' ' + 'post__container',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 21
            }
        }, _react2.default.createElement(_Post2.default, { post: p.post, author: p.author, liked: p.liked, layout: layout, like: likePost, userId: userId, focusPost: focusPost, reply: reply, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
            }
        }));
    })), _react2.default.createElement(_style2.default, {
        styleId: '2164670294',
        css: '.posts.jsx-2164670294{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-2164670294{max-width:1199px;}.post__container.jsx-2164670294{width:100%;}.posts--tile.jsx-2164670294 .post__container.jsx-2164670294{width:100%;max-width:375px;margin:0 0 25px 25px;}.posts--tile.jsx-2164670294 .post__container.jsx-2164670294:nth-child(3n + 1),.posts--tile.jsx-2164670294 .post__container.jsx-2164670294:first-child{margin-left:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCb0IsQUFHOEIsQUFVSSxBQUlOLEFBSUEsQUFPRyxXQVZsQixBQUlvQixHQU9wQixHQWZBLFVBU3lCLHFCQUN6QiwwQkFwQnVCLHFFQUNJLDZHQUNPLG1IQUNkLGdCQUNGLGNBQ00sb0JBQ3hCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuLi9tb2R1bGVzL3N0b3JlJztcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuLi9tb2R1bGVzL3Bvc3RzJztcbmltcG9ydCB7IGdldEF1dGhvciB9IGZyb20gJy4uL21vZHVsZXMvcHJvZmlsZS9wcm9maWxlLnNlbGVjdG9ycyc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4uL2xheW91dHMvSG9tZSc7XG5pbXBvcnQgUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3QnO1xuXG5cbmNvbnN0IGFsbFBvc3RzID0gKHsgbGF5b3V0LCBwb3N0cywgbGlrZVBvc3QsIHNldFBvc3RMYXlvdXQsIGFkZFBvc3QsIHVzZXJJZCwgZm9jdXNQb3N0LCByZXBseSB9KSA9PiAoXG4gICAgPEhvbWUgc2V0UG9zdExheW91dD17c2V0UG9zdExheW91dH0gbGF5b3V0PXtsYXlvdXR9IHJvdXRlPVwiQWxsIFBvc3RzXCIgYWRkUG9zdD17YWRkUG9zdH0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPnNpbXBseXNvY2lhbCB8IEFsbCBQb3N0czwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3N0cyBwb3N0cy0tJHtsYXlvdXR9YH0+XG4gICAgICAgICAgICB7cG9zdHMubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGFpbmVyXCIga2V5PXtwLnBvc3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8UG9zdCBwb3N0PXtwLnBvc3R9IGF1dGhvcj17cC5hdXRob3J9IGxpa2VkPXtwLmxpa2VkfSBsYXlvdXQ9e2xheW91dH0gbGlrZT17bGlrZVBvc3R9IHVzZXJJZD17dXNlcklkfSBmb2N1c1Bvc3Q9e2ZvY3VzUG9zdH0gcmVwbHk9e3JlcGx5fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5wb3N0cyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU5OXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMTJweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTE5OXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RzLS10aWxlIC5wb3N0X19jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjVweCAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUgLnBvc3RfX2NvbnRhaW5lcjpudGgtY2hpbGQoM24gKyAxKSxcbiAgICAgICAgICAgIC5wb3N0cy0tdGlsZSAucG9zdF9fY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvSG9tZT5cbik7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBvc3RzOiBzdGF0ZS5wb3N0cy5kYXRhLm1hcCgocG9zdCkgPT4gKHtcbiAgICAgICAgICAgIHBvc3Q6IHtcbiAgICAgICAgICAgICAgICAuLi5wb3N0LFxuICAgICAgICAgICAgICAgIHJlcGxpZXM6IHBvc3QucmVwbGllcy5tYXAoKHIpID0+ICh7IC4uLnIsIGF1dGhvcjogZ2V0QXV0aG9yKHN0YXRlLCByLmF1dGhvcikgfSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXV0aG9yOiBnZXRBdXRob3Ioc3RhdGUsIHBvc3QuYXV0aG9yKSxcbiAgICAgICAgICAgIGxpa2VkOiBwb3N0Lmxpa2VzLmluZGV4T2Yoc3RhdGUudXNlci5kYXRhLnByb2ZpbGVJZCkgPiAtMVxuICAgICAgICB9KSksXG4gICAgICAgIGxheW91dDogc3RhdGUucG9zdHMudWkubGF5b3V0LFxuICAgICAgICB1c2VySWQ6IHN0YXRlLnVzZXIuZGF0YS5wcm9maWxlSWRcbiAgICB9XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgbGlrZVBvc3Q6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLmxpa2VQb3N0LCBkaXNwYXRjaCksXG4gICAgcmVwbHk6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLnJlcGx5VG9Qb3N0LCBkaXNwYXRjaCksXG4gICAgc2V0UG9zdExheW91dDogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMuc2V0UG9zdExheW91dCwgZGlzcGF0Y2gpLFxuICAgIGFkZFBvc3Q6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLmFkZFBvc3QsIGRpc3BhdGNoKSxcbiAgICBmb2N1c1Bvc3Q6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLmZvY3VzUG9zdCwgZGlzcGF0Y2gpXG59KVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY3JlYXRlU3RvcmUsIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShhbGxQb3N0cyk7Il19 */\n/*@ sourceURL=pages/index.js?entry */'
    }));
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        posts: state.posts.data.map(function (post) {
            return {
                post: (0, _extends3.default)({}, post, {
                    replies: post.replies.map(function (r) {
                        return (0, _extends3.default)({}, r, { author: (0, _profile.getAuthor)(state, r.author) });
                    })
                }),
                author: (0, _profile.getAuthor)(state, post.author),
                liked: post.likes.indexOf(state.user.data.profileId) > -1
            };
        }),
        layout: state.posts.ui.layout,
        userId: state.user.data.profileId
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        likePost: (0, _redux.bindActionCreators)(_posts.actions.likePost, dispatch),
        reply: (0, _redux.bindActionCreators)(_posts.actions.replyToPost, dispatch),
        setPostLayout: (0, _redux.bindActionCreators)(_posts.actions.setPostLayout, dispatch),
        addPost: (0, _redux.bindActionCreators)(_posts.actions.addPost, dispatch),
        focusPost: (0, _redux.bindActionCreators)(_posts.actions.focusPost, dispatch)
    };
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default, mapStateToProps, mapDispatchToProps)(allPosts);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlYWN0Iiwid2l0aFJlZHV4IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiSGVhZCIsImNyZWF0ZVN0b3JlIiwiYWN0aW9ucyIsImdldEF1dGhvciIsIkhvbWUiLCJQb3N0IiwiYWxsUG9zdHMiLCJsYXlvdXQiLCJwb3N0cyIsImxpa2VQb3N0Iiwic2V0UG9zdExheW91dCIsImFkZFBvc3QiLCJ1c2VySWQiLCJmb2N1c1Bvc3QiLCJyZXBseSIsIm1hcCIsInAiLCJwb3N0IiwiaWQiLCJhdXRob3IiLCJsaWtlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGF0YSIsInJlcGxpZXMiLCJyIiwibGlrZXMiLCJpbmRleE9mIiwidXNlciIsInByb2ZpbGVJZCIsInVpIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJyZXBseVRvUG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUVQLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUyxBQUFlOztBQUN4QixBQUFTLEFBQWlCOztBQUUxQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7Ozs7Ozs7QUFHakIsSUFBTSxXQUFXLFNBQVgsQUFBVyxlQUFBO1FBQUEsQUFBRyxjQUFILEFBQUc7UUFBSCxBQUFXLGFBQVgsQUFBVztRQUFYLEFBQWtCLGdCQUFsQixBQUFrQjtRQUFsQixBQUE0QixxQkFBNUIsQUFBNEI7UUFBNUIsQUFBMkMsZUFBM0MsQUFBMkM7UUFBM0MsQUFBb0QsY0FBcEQsQUFBb0Q7UUFBcEQsQUFBNEQsaUJBQTVELEFBQTREO1FBQTVELEFBQXVFLGFBQXZFLEFBQXVFOzJCQUNwRixBQUFDLGdDQUFLLGVBQU4sQUFBcUIsZUFBZSxRQUFwQyxBQUE0QyxRQUFRLE9BQXBELEFBQTBELGFBQVksU0FBdEUsQUFBK0U7c0JBQS9FO3dCQUFBLEFBQ0k7QUFESjtLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUZSLEFBQ0ksQUFDSSxBQUVKLDhDQUFBLGNBQUE7K0RBQUEsQUFBZ0M7O3NCQUFoQzt3QkFBQSxBQUNLO0FBREw7QUFBQSxhQUNLLEFBQU0sSUFBSSxhQUFBOytCQUNQLGNBQUEsU0FBaUMsS0FBSyxFQUFBLEFBQUUsS0FBeEMsQUFBNkMsd0NBQTdDLEFBQWU7OzBCQUFmOzRCQUFBLEFBQ0k7QUFESjtTQUFBLGtCQUNJLEFBQUMsZ0NBQUssTUFBTSxFQUFaLEFBQWMsTUFBTSxRQUFRLEVBQTVCLEFBQThCLFFBQVEsT0FBTyxFQUE3QyxBQUErQyxPQUFPLFFBQXRELEFBQThELFFBQVEsTUFBdEUsQUFBNEUsVUFBVSxRQUF0RixBQUE4RixRQUFRLFdBQXRHLEFBQWlILFdBQVcsT0FBNUgsQUFBbUk7MEJBQW5JOzRCQUZHLEFBQ1AsQUFDSTtBQUFBOztBQVBoQixBQUlJLEFBQ0s7aUJBTFQ7YUFEYSxBQUNiO0FBQUE7QUFESjs7QUE4Q0EsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsZ0JBQUEsQUFBQyxPQUFVLEFBQy9COztxQkFDVyxBQUFNLE1BQU4sQUFBWSxLQUFaLEFBQWlCLElBQUksVUFBQSxBQUFDLE1BQUQ7O2lEQUN4QixBQUNPO2tDQUNNLEFBQUssUUFBTCxBQUFhLElBQUksVUFBQSxBQUFDLEdBQUQ7MERBQUEsQUFBYSxLQUFHLFFBQVEsd0JBQUEsQUFBVSxPQUFPLEVBQXpDLEFBQXdCLEFBQW1CO0FBSHRDLEFBQ25DLEFBRWEsQUFFYixxQkFGYTtBQUFUO3dCQUVJLHdCQUFBLEFBQVUsT0FBTyxLQUxVLEFBSzNCLEFBQXNCLEFBQzlCO3VCQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxNQUFBLEFBQU0sS0FBTixBQUFXLEtBQTlCLEFBQW1DLGFBQWEsQ0FOL0IsQUFBVyxBQU1xQjtBQU5yQixBQUNuQztBQUZELEFBQ0ksQUFRUCxTQVJPO2dCQVFDLE1BQUEsQUFBTSxNQUFOLEFBQVksR0FUakIsQUFTb0IsQUFDdkI7Z0JBQVEsTUFBQSxBQUFNLEtBQU4sQUFBVyxLQVZ2QixBQUFPLEFBVXFCLEFBRS9CO0FBWlUsQUFDSDtBQUZSOztBQWVBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBRDs7a0JBQ2IsK0JBQW1CLGVBQW5CLEFBQTJCLFVBREMsQUFDNUIsQUFBcUMsQUFDL0M7ZUFBTywrQkFBbUIsZUFBbkIsQUFBMkIsYUFGSSxBQUUvQixBQUF3QyxBQUMvQzt1QkFBZSwrQkFBbUIsZUFBbkIsQUFBMkIsZUFISixBQUd2QixBQUEwQyxBQUN6RDtpQkFBUywrQkFBbUIsZUFBbkIsQUFBMkIsU0FKRSxBQUk3QixBQUFvQyxBQUM3QzttQkFBVywrQkFBbUIsZUFBbkIsQUFBMkIsV0FMZixBQUFlLEFBSzNCLEFBQXNDO0FBTFgsQUFDdEM7QUFESixBQVFBOztrQkFBZSxBQUFVLGlEQUFWLEFBQXVCLGlCQUF2QixBQUF3QyxvQkFBdkQsQUFBZSxBQUE0RCIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCJ9