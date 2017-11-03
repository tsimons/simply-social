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
        addPost = _ref.addPost,
        userId = _ref.userId;
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
        }, _react2.default.createElement(_Post2.default, { post: p.post, author: p.author, liked: p.liked, layout: layout, like: likePost, userId: userId, __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            }
        }));
    })), _react2.default.createElement(_style2.default, {
        styleId: '2164670294',
        css: '.posts.jsx-2164670294{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-2164670294{max-width:1199px;}.post__container.jsx-2164670294{width:100%;}.posts--tile.jsx-2164670294 .post__container.jsx-2164670294{width:100%;max-width:375px;margin:0 0 25px 25px;}.posts--tile.jsx-2164670294 .post__container.jsx-2164670294:nth-child(3n + 1),.posts--tile.jsx-2164670294 .post__container.jsx-2164670294:first-child{margin-left:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFHOEIsQUFVSSxBQUlOLEFBSUEsQUFPRyxXQVZsQixBQUlvQixHQU9wQixHQWZBLFVBU3lCLHFCQUN6QiwwQkFwQnVCLHFFQUNJLDZHQUNPLG1IQUNkLGdCQUNGLGNBQ00sb0JBQ3hCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4uL21vZHVsZXMvc3RvcmUnO1xuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL21vZHVsZXMvcG9zdHMnO1xuaW1wb3J0IHsgZ2V0QXV0aG9yIH0gZnJvbSAnLi4vbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUuc2VsZWN0b3JzJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vbGF5b3V0cy9Ib21lJztcbmltcG9ydCBQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdCc7XG5cblxuY29uc3QgYWxsUG9zdHMgPSAoeyBsYXlvdXQsIHBvc3RzLCBsaWtlUG9zdCwgc2V0UG9zdExheW91dCwgYWRkUG9zdCwgdXNlcklkIH0pID0+IChcbiAgICA8SG9tZSBzZXRQb3N0TGF5b3V0PXtzZXRQb3N0TGF5b3V0fSBsYXlvdXQ9e2xheW91dH0gcm91dGU9XCJBbGwgUG9zdHNcIiBhZGRQb3N0PXthZGRQb3N0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3N0cyBwb3N0cy0tJHtsYXlvdXR9YH0+XG4gICAgICAgICAgICB7cG9zdHMubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGFpbmVyXCIga2V5PXtwLnBvc3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8UG9zdCBwb3N0PXtwLnBvc3R9IGF1dGhvcj17cC5hdXRob3J9IGxpa2VkPXtwLmxpa2VkfSBsYXlvdXQ9e2xheW91dH0gbGlrZT17bGlrZVBvc3R9IHVzZXJJZD17dXNlcklkfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5wb3N0cyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU5OXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMTJweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTE5OXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RzLS10aWxlIC5wb3N0X19jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjVweCAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUgLnBvc3RfX2NvbnRhaW5lcjpudGgtY2hpbGQoM24gKyAxKSxcbiAgICAgICAgICAgIC5wb3N0cy0tdGlsZSAucG9zdF9fY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvSG9tZT5cbik7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBvc3RzOiBzdGF0ZS5wb3N0cy5kYXRhLm1hcCgocG9zdCkgPT4gKHtcbiAgICAgICAgICAgIHBvc3QsXG4gICAgICAgICAgICBhdXRob3I6IGdldEF1dGhvcihzdGF0ZSwgcG9zdC5hdXRob3IpLFxuICAgICAgICAgICAgbGlrZWQ6IHBvc3QubGlrZXMuaW5kZXhPZihzdGF0ZS51c2VyLmRhdGEucHJvZmlsZUlkKSA+IC0xXG4gICAgICAgIH0pKSxcbiAgICAgICAgbGF5b3V0OiBzdGF0ZS5wb3N0cy51aS5sYXlvdXQsXG4gICAgICAgIHVzZXJJZDogc3RhdGUudXNlci5kYXRhLnByb2ZpbGVJZFxuICAgIH1cbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBsaWtlUG9zdDogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMubGlrZVBvc3QsIGRpc3BhdGNoKSxcbiAgICBzZXRQb3N0TGF5b3V0OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucy5zZXRQb3N0TGF5b3V0LCBkaXNwYXRjaCksXG4gICAgYWRkUG9zdDogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMuYWRkUG9zdCwgZGlzcGF0Y2gpXG59KVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY3JlYXRlU3RvcmUsIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShhbGxQb3N0cyk7Il19 */\n/*@ sourceURL=pages/index.js?entry */'
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
        layout: state.posts.ui.layout,
        userId: state.user.data.profileId
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlYWN0Iiwid2l0aFJlZHV4IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY3JlYXRlU3RvcmUiLCJhY3Rpb25zIiwiZ2V0QXV0aG9yIiwiSG9tZSIsIlBvc3QiLCJhbGxQb3N0cyIsImxheW91dCIsInBvc3RzIiwibGlrZVBvc3QiLCJzZXRQb3N0TGF5b3V0IiwiYWRkUG9zdCIsInVzZXJJZCIsIm1hcCIsInAiLCJwb3N0IiwiaWQiLCJhdXRob3IiLCJsaWtlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGF0YSIsImxpa2VzIiwiaW5kZXhPZiIsInVzZXIiLCJwcm9maWxlSWQiLCJ1aSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUVULEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUyxBQUFlOztBQUN4QixBQUFTLEFBQWlCOztBQUUxQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7Ozs7Ozs7QUFHakIsSUFBTSxXQUFXLFNBQVgsQUFBVyxlQUFBO1FBQUEsQUFBRyxjQUFILEFBQUc7UUFBSCxBQUFXLGFBQVgsQUFBVztRQUFYLEFBQWtCLGdCQUFsQixBQUFrQjtRQUFsQixBQUE0QixxQkFBNUIsQUFBNEI7UUFBNUIsQUFBMkMsZUFBM0MsQUFBMkM7UUFBM0MsQUFBb0QsY0FBcEQsQUFBb0Q7MkJBQ2pFLEFBQUMsZ0NBQUssZUFBTixBQUFxQixlQUFlLFFBQXBDLEFBQTRDLFFBQVEsT0FBcEQsQUFBMEQsYUFBWSxTQUF0RSxBQUErRTtzQkFBL0U7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksY0FBQTsrREFBQSxBQUFnQzs7c0JBQWhDO3dCQUFBLEFBQ0s7QUFETDtBQUFBLGFBQ0ssQUFBTSxJQUFJLGFBQUE7K0JBQ1AsY0FBQSxTQUFpQyxLQUFLLEVBQUEsQUFBRSxLQUF4QyxBQUE2Qyx3Q0FBN0MsQUFBZTs7MEJBQWY7NEJBQUEsQUFDSTtBQURKO1NBQUEsa0JBQ0ksQUFBQyxnQ0FBSyxNQUFNLEVBQVosQUFBYyxNQUFNLFFBQVEsRUFBNUIsQUFBOEIsUUFBUSxPQUFPLEVBQTdDLEFBQStDLE9BQU8sUUFBdEQsQUFBOEQsUUFBUSxNQUF0RSxBQUE0RSxVQUFVLFFBQXRGLEFBQThGOzBCQUE5Rjs0QkFGRyxBQUNQLEFBQ0k7QUFBQTs7QUFKaEIsQUFDSSxBQUNLO2lCQUZUO2FBRGEsQUFDYjtBQUFBO0FBREo7O0FBMkNBLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBVSxBQUMvQjs7cUJBQ1csQUFBTSxNQUFOLEFBQVksS0FBWixBQUFpQixJQUFJLFVBQUEsQUFBQyxNQUFEOztzQkFBVyxBQUVuQzt3QkFBUSx3QkFBQSxBQUFVLE9BQU8sS0FGVSxBQUUzQixBQUFzQixBQUM5Qjt1QkFBTyxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsTUFBQSxBQUFNLEtBQU4sQUFBVyxLQUE5QixBQUFtQyxhQUFhLENBSC9CLEFBQVcsQUFHcUI7QUFIckIsQUFDbkM7QUFGRCxBQUNJLEFBS1AsU0FMTztnQkFLQyxNQUFBLEFBQU0sTUFBTixBQUFZLEdBTmpCLEFBTW9CLEFBQ3ZCO2dCQUFRLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FQdkIsQUFBTyxBQU9xQixBQUUvQjtBQVRVLEFBQ0g7QUFGUjs7QUFZQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQUQ7O2tCQUNiLCtCQUFtQixlQUFuQixBQUEyQixVQURDLEFBQzVCLEFBQXFDLEFBQy9DO3VCQUFlLCtCQUFtQixlQUFuQixBQUEyQixlQUZKLEFBRXZCLEFBQTBDLEFBQ3pEO2lCQUFTLCtCQUFtQixlQUFuQixBQUEyQixTQUhiLEFBQWUsQUFHN0IsQUFBb0M7QUFIUCxBQUN0QztBQURKLEFBTUE7O2tCQUFlLEFBQVUsaURBQVYsQUFBdUIsaUJBQXZCLEFBQXdDLG9CQUF2RCxBQUFlLEFBQTREIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=