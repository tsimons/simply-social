'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _redux = require('redux');

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
        addPost = _ref.addPost;
    return _react2.default.createElement(_Home2.default, { setPostLayout: setPostLayout, layout: layout, route: 'All Posts', addPost: addPost, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2164670294' + ' ' + ('posts posts--' + layout),
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, posts.map(function (p) {
        return _react2.default.createElement('div', { key: p.post.id, className: 'jsx-2164670294' + ' ' + 'post__container',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 17
            }
        }, _react2.default.createElement(_Post2.default, { post: p.post, author: p.author, liked: p.liked, layout: layout, like: likePost, __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            }
        }));
    })), _react2.default.createElement(_style2.default, {
        styleId: '2164670294',
        css: '.posts.jsx-2164670294{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-2164670294{max-width:1199px;}.post__container.jsx-2164670294{width:100%;}.posts--tile.jsx-2164670294 .post__container.jsx-2164670294{width:100%;max-width:375px;margin:0 0 25px 25px;}.posts--tile.jsx-2164670294 .post__container.jsx-2164670294:nth-child(3n + 1),.posts--tile.jsx-2164670294 .post__container.jsx-2164670294:first-child{margin-left:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFHOEIsQUFVSSxBQUlOLEFBSUEsQUFPRyxXQVZsQixBQUlvQixHQU9wQixHQWZBLFVBU3lCLHFCQUN6QiwwQkFwQnVCLHFFQUNJLDZHQUNPLG1IQUNkLGdCQUNGLGNBQ00sb0JBQ3hCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4uL21vZHVsZXMvc3RvcmUnO1xuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL21vZHVsZXMvcG9zdHMnO1xuaW1wb3J0IHsgZ2V0QXV0aG9yIH0gZnJvbSAnLi4vbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUuc2VsZWN0b3JzJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vbGF5b3V0cy9Ib21lJztcbmltcG9ydCBQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdCc7XG5cblxuY29uc3QgYWxsUG9zdHMgPSAoeyBsYXlvdXQsIHBvc3RzLCBsaWtlUG9zdCwgc2V0UG9zdExheW91dCwgYWRkUG9zdCB9KSA9PiAoXG4gICAgPEhvbWUgc2V0UG9zdExheW91dD17c2V0UG9zdExheW91dH0gbGF5b3V0PXtsYXlvdXR9IHJvdXRlPVwiQWxsIFBvc3RzXCIgYWRkUG9zdD17YWRkUG9zdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zdHMgcG9zdHMtLSR7bGF5b3V0fWB9PlxuICAgICAgICAgICAge3Bvc3RzLm1hcChwID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRhaW5lclwiIGtleT17cC5wb3N0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPFBvc3QgcG9zdD17cC5wb3N0fSBhdXRob3I9e3AuYXV0aG9yfSBsaWtlZD17cC5saWtlZH0gbGF5b3V0PXtsYXlvdXR9IGxpa2U9e2xpa2VQb3N0fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5wb3N0cyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU5OXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMTJweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTE5OXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RzLS10aWxlIC5wb3N0X19jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjVweCAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUgLnBvc3RfX2NvbnRhaW5lcjpudGgtY2hpbGQoM24gKyAxKSxcbiAgICAgICAgICAgIC5wb3N0cy0tdGlsZSAucG9zdF9fY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvSG9tZT5cbik7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBvc3RzOiBzdGF0ZS5wb3N0cy5kYXRhLm1hcCgocG9zdCkgPT4gKHtcbiAgICAgICAgICAgIHBvc3QsXG4gICAgICAgICAgICBhdXRob3I6IGdldEF1dGhvcihzdGF0ZSwgcG9zdC5hdXRob3IpLFxuICAgICAgICAgICAgbGlrZWQ6IHBvc3QubGlrZXMuaW5kZXhPZihzdGF0ZS51c2VyLnByb2ZpbGVJZCkgPiAtMVxuICAgICAgICB9KSksXG4gICAgICAgIGxheW91dDogc3RhdGUucG9zdHMudWkubGF5b3V0XG4gICAgfVxufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIGxpa2VQb3N0OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucy5saWtlUG9zdCwgZGlzcGF0Y2gpLFxuICAgIHNldFBvc3RMYXlvdXQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLnNldFBvc3RMYXlvdXQsIGRpc3BhdGNoKSxcbiAgICBhZGRQb3N0OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucy5hZGRQb3N0LCBkaXNwYXRjaClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChjcmVhdGVTdG9yZSwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKGFsbFBvc3RzKTsiXX0= */\n/*@ sourceURL=pages/index.js?entry */'
    }));
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        posts: state.posts.data.map(function (post) {
            return {
                post: post,
                author: (0, _profile.getAuthor)(state, post.author),
                liked: post.likes.indexOf(state.user.profileId) > -1
            };
        }),
        layout: state.posts.ui.layout
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        likePost: (0, _redux.bindActionCreators)(_posts.actions.likePost, dispatch),
        setPostLayout: (0, _redux.bindActionCreators)(_posts.actions.setPostLayout, dispatch),
        addPost: (0, _redux.bindActionCreators)(_posts.actions.addPost, dispatch)
    };
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default, mapStateToProps, mapDispatchToProps)(allPosts);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlYWN0Iiwid2l0aFJlZHV4IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY3JlYXRlU3RvcmUiLCJhY3Rpb25zIiwiZ2V0QXV0aG9yIiwiSG9tZSIsIlBvc3QiLCJhbGxQb3N0cyIsImxheW91dCIsInBvc3RzIiwibGlrZVBvc3QiLCJzZXRQb3N0TGF5b3V0IiwiYWRkUG9zdCIsIm1hcCIsInAiLCJwb3N0IiwiaWQiLCJhdXRob3IiLCJsaWtlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGF0YSIsImxpa2VzIiwiaW5kZXhPZiIsInVzZXIiLCJwcm9maWxlSWQiLCJ1aSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUVULEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUyxBQUFlOztBQUN4QixBQUFTLEFBQWlCOztBQUUxQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7Ozs7Ozs7QUFHakIsSUFBTSxXQUFXLFNBQVgsQUFBVyxlQUFBO1FBQUEsQUFBRyxjQUFILEFBQUc7UUFBSCxBQUFXLGFBQVgsQUFBVztRQUFYLEFBQWtCLGdCQUFsQixBQUFrQjtRQUFsQixBQUE0QixxQkFBNUIsQUFBNEI7UUFBNUIsQUFBMkMsZUFBM0MsQUFBMkM7MkJBQ3hELEFBQUMsZ0NBQUssZUFBTixBQUFxQixlQUFlLFFBQXBDLEFBQTRDLFFBQVEsT0FBcEQsQUFBMEQsYUFBWSxTQUF0RSxBQUErRTtzQkFBL0U7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksY0FBQTsrREFBQSxBQUFnQzs7c0JBQWhDO3dCQUFBLEFBQ0s7QUFETDtBQUFBLGFBQ0ssQUFBTSxJQUFJLGFBQUE7K0JBQ1AsY0FBQSxTQUFpQyxLQUFLLEVBQUEsQUFBRSxLQUF4QyxBQUE2Qyx3Q0FBN0MsQUFBZTs7MEJBQWY7NEJBQUEsQUFDSTtBQURKO1NBQUEsa0JBQ0ksQUFBQyxnQ0FBSyxNQUFNLEVBQVosQUFBYyxNQUFNLFFBQVEsRUFBNUIsQUFBOEIsUUFBUSxPQUFPLEVBQTdDLEFBQStDLE9BQU8sUUFBdEQsQUFBOEQsUUFBUSxNQUF0RSxBQUE0RTswQkFBNUU7NEJBRkcsQUFDUCxBQUNJO0FBQUE7O0FBSmhCLEFBQ0ksQUFDSztpQkFGVDthQURhLEFBQ2I7QUFBQTtBQURKOztBQTJDQSxJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDL0I7O3FCQUNXLEFBQU0sTUFBTixBQUFZLEtBQVosQUFBaUIsSUFBSSxVQUFBLEFBQUMsTUFBRDs7c0JBQVcsQUFFbkM7d0JBQVEsd0JBQUEsQUFBVSxPQUFPLEtBRlUsQUFFM0IsQUFBc0IsQUFDOUI7dUJBQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLE1BQUEsQUFBTSxLQUF6QixBQUE4QixhQUFhLENBSDFCLEFBQVcsQUFHZ0I7QUFIaEIsQUFDbkM7QUFGRCxBQUNJLEFBS1AsU0FMTztnQkFLQyxNQUFBLEFBQU0sTUFBTixBQUFZLEdBTnhCLEFBQU8sQUFNb0IsQUFFOUI7QUFSVSxBQUNIO0FBRlI7O0FBV0EsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFEOztrQkFDYiwrQkFBbUIsZUFBbkIsQUFBMkIsVUFEQyxBQUM1QixBQUFxQyxBQUMvQzt1QkFBZSwrQkFBbUIsZUFBbkIsQUFBMkIsZUFGSixBQUV2QixBQUEwQyxBQUN6RDtpQkFBUywrQkFBbUIsZUFBbkIsQUFBMkIsU0FIYixBQUFlLEFBRzdCLEFBQW9DO0FBSFAsQUFDdEM7QUFESixBQU1BOztrQkFBZSxBQUFVLGlEQUFWLEFBQXVCLGlCQUF2QixBQUF3QyxvQkFBdkQsQUFBZSxBQUE0RCIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCJ9