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

var _jsxFileName = '/Users/TJ/projects/simply-social/pages/videos.js?entry';


var Videos = function Videos(_ref) {
    var posts = _ref.posts,
        likePost = _ref.likePost,
        focusPost = _ref.focusPost,
        userId = _ref.userId,
        reply = _ref.reply;
    return _react2.default.createElement(_Home2.default, { route: 'Videos', __source: {
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
    }, 'simplysocial | Video Posts')), _react2.default.createElement('div', {
        className: 'jsx-2164670294' + ' ' + 'posts posts--tile',
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
        }, _react2.default.createElement(_Post2.default, { post: p.post, author: p.author, liked: p.liked, layout: 'tile', like: likePost, userId: userId, focusPost: focusPost, reply: reply, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
            }
        }));
    })), _react2.default.createElement(_style2.default, {
        styleId: '2164670294',
        css: '.posts.jsx-2164670294{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-2164670294{max-width:1199px;}.post__container.jsx-2164670294{width:100%;}.posts--tile.jsx-2164670294 .post__container.jsx-2164670294{width:100%;max-width:375px;margin:0 0 25px 25px;}.posts--tile.jsx-2164670294 .post__container.jsx-2164670294:nth-child(3n + 1),.posts--tile.jsx-2164670294 .post__container.jsx-2164670294:first-child{margin-left:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ZpZGVvcy5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQm9CLEFBRzhCLEFBVUksQUFJTixBQUlBLEFBT0csV0FWbEIsQUFJb0IsR0FPcEIsR0FmQSxVQVN5QixxQkFDekIsMEJBcEJ1QixxRUFDSSw2R0FDTyxtSEFDZCxnQkFDRixjQUNNLG9CQUN4QiIsImZpbGUiOiJwYWdlcy92aWRlb3MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4uL21vZHVsZXMvc3RvcmUnO1xuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL21vZHVsZXMvcG9zdHMnO1xuaW1wb3J0IHsgZ2V0QXV0aG9yIH0gZnJvbSAnLi4vbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUuc2VsZWN0b3JzJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vbGF5b3V0cy9Ib21lJztcbmltcG9ydCBQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdCc7XG5cblxuY29uc3QgVmlkZW9zID0gKHsgcG9zdHMsIGxpa2VQb3N0LCBmb2N1c1Bvc3QsIHVzZXJJZCwgcmVwbHkgfSkgPT4gKFxuICAgIDxIb21lIHJvdXRlPVwiVmlkZW9zXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPnNpbXBseXNvY2lhbCB8IFZpZGVvIFBvc3RzPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc3RzIHBvc3RzLS10aWxlYH0+XG4gICAgICAgICAgICB7cG9zdHMubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGFpbmVyXCIga2V5PXtwLnBvc3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8UG9zdCBwb3N0PXtwLnBvc3R9IGF1dGhvcj17cC5hdXRob3J9IGxpa2VkPXtwLmxpa2VkfSBsYXlvdXQ9XCJ0aWxlXCIgbGlrZT17bGlrZVBvc3R9IHVzZXJJZD17dXNlcklkfSBmb2N1c1Bvc3Q9e2ZvY3VzUG9zdH0gcmVwbHk9e3JlcGx5fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5wb3N0cyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU5OXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMTJweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTE5OXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RzLS10aWxlIC5wb3N0X19jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjVweCAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUgLnBvc3RfX2NvbnRhaW5lcjpudGgtY2hpbGQoM24gKyAxKSxcbiAgICAgICAgICAgIC5wb3N0cy0tdGlsZSAucG9zdF9fY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvSG9tZT5cbik7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBvc3RzOiBzdGF0ZS5wb3N0cy5kYXRhLmZpbHRlcihwID0+IHAudmlkZW8pLm1hcCgocG9zdCkgPT4gKHtcbiAgICAgICAgICAgIHBvc3Q6IHtcbiAgICAgICAgICAgICAgICAuLi5wb3N0LFxuICAgICAgICAgICAgICAgIHJlcGxpZXM6IHBvc3QucmVwbGllcy5tYXAocG9zdCA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi5wb3N0LFxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6IGdldEF1dGhvcihzdGF0ZSwgcG9zdC5hdXRob3IpXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXV0aG9yOiBnZXRBdXRob3Ioc3RhdGUsIHBvc3QuYXV0aG9yKSxcbiAgICAgICAgICAgIGxpa2VkOiBwb3N0Lmxpa2VzLmluZGV4T2Yoc3RhdGUudXNlci5kYXRhLnByb2ZpbGVJZCkgPiAtMVxuICAgICAgICB9KSksXG4gICAgICAgIHVzZXJJZDogc3RhdGUudXNlci5kYXRhLnByb2ZpbGVJZFxuICAgIH1cbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBsaWtlUG9zdDogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMubGlrZVBvc3QsIGRpc3BhdGNoKSxcbiAgICByZXBseTogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMucmVwbHlUb1Bvc3QsIGRpc3BhdGNoKSxcbiAgICBmb2N1c1Bvc3Q6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLmZvY3VzUG9zdCwgZGlzcGF0Y2gpXG59KVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY3JlYXRlU3RvcmUsIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShWaWRlb3MpOyJdfQ== */\n/*@ sourceURL=pages/videos.js?entry */'
    }));
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        posts: state.posts.data.filter(function (p) {
            return p.video;
        }).map(function (post) {
            return {
                post: (0, _extends3.default)({}, post, {
                    replies: post.replies.map(function (post) {
                        return (0, _extends3.default)({}, post, {
                            author: (0, _profile.getAuthor)(state, post.author)
                        });
                    })
                }),
                author: (0, _profile.getAuthor)(state, post.author),
                liked: post.likes.indexOf(state.user.data.profileId) > -1
            };
        }),
        userId: state.user.data.profileId
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        likePost: (0, _redux.bindActionCreators)(_posts.actions.likePost, dispatch),
        reply: (0, _redux.bindActionCreators)(_posts.actions.replyToPost, dispatch),
        focusPost: (0, _redux.bindActionCreators)(_posts.actions.focusPost, dispatch)
    };
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default, mapStateToProps, mapDispatchToProps)(Videos);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ZpZGVvcy5qcyJdLCJuYW1lcyI6WyJyZWFjdCIsIndpdGhSZWR1eCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsIkhlYWQiLCJjcmVhdGVTdG9yZSIsImFjdGlvbnMiLCJnZXRBdXRob3IiLCJIb21lIiwiUG9zdCIsIlZpZGVvcyIsInBvc3RzIiwibGlrZVBvc3QiLCJmb2N1c1Bvc3QiLCJ1c2VySWQiLCJyZXBseSIsIm1hcCIsInAiLCJwb3N0IiwiaWQiLCJhdXRob3IiLCJsaWtlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGF0YSIsImZpbHRlciIsInZpZGVvIiwicmVwbGllcyIsImxpa2VzIiwiaW5kZXhPZiIsInVzZXIiLCJwcm9maWxlSWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInJlcGx5VG9Qb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFTLEFBQWU7O0FBQ3hCLEFBQVMsQUFBaUI7O0FBRTFCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7Ozs7OztBQUdqQixJQUFNLFNBQVMsU0FBVCxBQUFTLGFBQUE7UUFBQSxBQUFHLGFBQUgsQUFBRztRQUFILEFBQVUsZ0JBQVYsQUFBVTtRQUFWLEFBQW9CLGlCQUFwQixBQUFvQjtRQUFwQixBQUErQixjQUEvQixBQUErQjtRQUEvQixBQUF1QyxhQUF2QyxBQUF1QzsyQkFDbEQsQUFBQyxnQ0FBSyxPQUFOLEFBQVk7c0JBQVo7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BRlIsQUFDSSxBQUNJLEFBRUosZ0RBQUEsY0FBQTs0Q0FBQTs7c0JBQUE7d0JBQUEsQUFDSztBQURMO0FBQUEsYUFDSyxBQUFNLElBQUksYUFBQTsrQkFDUCxjQUFBLFNBQWlDLEtBQUssRUFBQSxBQUFFLEtBQXhDLEFBQTZDLHdDQUE3QyxBQUFlOzswQkFBZjs0QkFBQSxBQUNJO0FBREo7U0FBQSxrQkFDSSxBQUFDLGdDQUFLLE1BQU0sRUFBWixBQUFjLE1BQU0sUUFBUSxFQUE1QixBQUE4QixRQUFRLE9BQU8sRUFBN0MsQUFBK0MsT0FBTyxRQUF0RCxBQUE2RCxRQUFPLE1BQXBFLEFBQTBFLFVBQVUsUUFBcEYsQUFBNEYsUUFBUSxXQUFwRyxBQUErRyxXQUFXLE9BQTFILEFBQWlJOzBCQUFqSTs0QkFGRyxBQUNQLEFBQ0k7QUFBQTs7QUFQaEIsQUFJSSxBQUNLO2lCQUxUO2FBRFcsQUFDWDtBQUFBO0FBREo7O0FBOENBLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBVSxBQUMvQjs7cUJBQ1csQUFBTSxNQUFOLEFBQVksS0FBWixBQUFpQixPQUFPLGFBQUE7bUJBQUssRUFBTCxBQUFPO0FBQS9CLFNBQUEsRUFBQSxBQUFzQyxJQUFJLFVBQUEsQUFBQyxNQUFEOztpREFDN0MsQUFDTztrQ0FDTSxBQUFLLFFBQUwsQUFBYSxJQUFJLGdCQUFBOzBEQUFBLEFBQ25CO29DQUNLLHdCQUFBLEFBQVUsT0FBTyxLQUZILEFBRWQsQUFBc0I7QUFBOUI7QUFMZ0QsQUFDeEQsQUFFYSxBQUtiLHFCQUxhO0FBQVQ7d0JBS0ksd0JBQUEsQUFBVSxPQUFPLEtBUitCLEFBUWhELEFBQXNCLEFBQzlCO3VCQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxNQUFBLEFBQU0sS0FBTixBQUFXLEtBQTlCLEFBQW1DLGFBQWEsQ0FUVixBQUFXLEFBU0E7QUFUQSxBQUN4RDtBQUZELEFBQ0ksQUFXUDtnQkFBUSxNQUFBLEFBQU0sS0FBTixBQUFXLEtBWnZCLEFBQU8sQUFZcUIsQUFFL0I7QUFkVSxBQUNIO0FBRlI7O0FBaUJBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBRDs7a0JBQ2IsK0JBQW1CLGVBQW5CLEFBQTJCLFVBREMsQUFDNUIsQUFBcUMsQUFDL0M7ZUFBTywrQkFBbUIsZUFBbkIsQUFBMkIsYUFGSSxBQUUvQixBQUF3QyxBQUMvQzttQkFBVywrQkFBbUIsZUFBbkIsQUFBMkIsV0FIZixBQUFlLEFBRzNCLEFBQXNDO0FBSFgsQUFDdEM7QUFESixBQU1BOztrQkFBZSxBQUFVLGlEQUFWLEFBQXVCLGlCQUF2QixBQUF3QyxvQkFBdkQsQUFBZSxBQUE0RCIsImZpbGUiOiJ2aWRlb3MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==