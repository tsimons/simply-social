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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _redux = require('redux');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

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
        focusPost = _ref.focusPost,
        reply = _ref.reply;
    return _react2.default.createElement(_Profile2.default, { profile: profile, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('title', {
        className: 'jsx-1796691531',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, 'simplysocial | ', profile.name, '\'s Feed')), _react2.default.createElement('div', {
        className: 'jsx-1796691531' + ' ' + 'posts',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, posts.map(function (p) {
        return _react2.default.createElement('div', {
            className: 'jsx-1796691531' + ' ' + 'post-container',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 22
            }
        }, _react2.default.createElement(_Post2.default, { key: p.post.message, post: p.post, author: p.author, liked: p.liked, like: likePost, layout: 'list', userId: userId, focusPost: focusPost, reply: reply, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
            }
        }));
    })), _react2.default.createElement(_style2.default, {
        styleId: '1796691531',
        css: '.posts.jsx-1796691531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-1796691531{max-width:1199px;}.post-container.jsx-1796691531{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}.posts--tile.jsx-1796691531 .post-container.jsx-1796691531{max-width:375px;margin:0 0 25px 25px;max-height:500px;}.posts--tile.jsx-1796691531 .post-container.jsx-1796691531:nth-child(3n + 1),.posts--tile.jsx-1796691531 .post-container.jsx-1796691531:first-child{margin-left:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvaW5kZXguanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJvQixBQUc4QixBQVVJLEFBSUgsQUFJRSxBQU9GLGNBQ2xCLEVBUHlCLENBUnpCLG9CQVNxQixpQkFMckIsQUFNQSxvQkFwQnVCLHFFQUNJLDZHQUNPLG1IQUNkLGdCQUNGLGNBQ00sb0JBQ3hCIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuLi8uLi9tb2R1bGVzL3N0b3JlJztcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Bvc3RzJztcbmltcG9ydCB7IGdldEF1dGhvciB9IGZyb20gJy4uLy4uL21vZHVsZXMvcHJvZmlsZS9wcm9maWxlLnNlbGVjdG9ycyc7XG5cbmltcG9ydCBQcm9maWxlIGZyb20gJy4uLy4uL2xheW91dHMvUHJvZmlsZSc7XG5cbmltcG9ydCBQb3N0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdCc7XG5cbmNvbnN0IEZlZWRWaWV3ID0gKHsgcG9zdHMsIHByb2ZpbGUsIHVzZXJJZCwgbGlrZVBvc3QsIGZvY3VzUG9zdCwgcmVwbHkgfSkgPT4gKFxuICAgIDxQcm9maWxlIHByb2ZpbGU9e3Byb2ZpbGV9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5zaW1wbHlzb2NpYWwgfCB7cHJvZmlsZS5uYW1lfSdzIEZlZWQ8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHNcIj5cbiAgICAgICAgICAgIHtwb3N0cy5tYXAocCA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8UG9zdCBrZXk9e3AucG9zdC5tZXNzYWdlfSBwb3N0PXtwLnBvc3R9IGF1dGhvcj17cC5hdXRob3J9IGxpa2VkPXtwLmxpa2VkfSBsaWtlPXtsaWtlUG9zdH0gbGF5b3V0PVwibGlzdFwiIHVzZXJJZD17dXNlcklkfSBmb2N1c1Bvc3Q9e2ZvY3VzUG9zdH0gcmVwbHk9e3JlcGx5fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5wb3N0cyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU5OXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMTJweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTE5OXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUgLnBvc3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM3NXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHggMjVweDtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RzLS10aWxlIC5wb3N0LWNvbnRhaW5lcjpudGgtY2hpbGQoM24gKyAxKSxcbiAgICAgICAgICAgIC5wb3N0cy0tdGlsZSAucG9zdC1jb250YWluZXI6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9Qcm9maWxlPlxuKTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9zdHM6IHN0YXRlLnBvc3RzLmRhdGEubWFwKChwb3N0KSA9PiAoe1xuICAgICAgICAgICAgcG9zdDoge1xuICAgICAgICAgICAgICAgIC4uLnBvc3QsXG4gICAgICAgICAgICAgICAgcmVwbGllczogcG9zdC5yZXBsaWVzLm1hcChwb3N0ID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnBvc3QsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogZ2V0QXV0aG9yKHN0YXRlLCBwb3N0LmF1dGhvcilcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRob3I6IGdldEF1dGhvcihzdGF0ZSwgcG9zdC5hdXRob3IpLFxuICAgICAgICAgICAgbGlrZWQ6IHBvc3QubGlrZXMuaW5kZXhPZihzdGF0ZS51c2VyLmRhdGEucHJvZmlsZUlkKSA+IC0xXG4gICAgICAgIH0pKSxcbiAgICAgICAgcHJvZmlsZTogZ2V0QXV0aG9yKHN0YXRlLCBzdGF0ZS51c2VyLmRhdGEucHJvZmlsZUlkKSxcbiAgICAgICAgdXNlcklkOiBzdGF0ZS51c2VyLmRhdGEucHJvZmlsZUlkXG4gICAgfVxufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIGxpa2VQb3N0OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucy5saWtlUG9zdCwgZGlzcGF0Y2gpLFxuICAgIHJlcGx5OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucy5yZXBseVRvUG9zdCwgZGlzcGF0Y2gpLFxuICAgIGZvY3VzUG9zdDogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMuZm9jdXNQb3N0LCBkaXNwYXRjaClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChjcmVhdGVTdG9yZSwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEZlZWRWaWV3KTsiXX0= */\n/*@ sourceURL=pages/profile/index.js?entry */'
    }));
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        posts: state.posts.data.map(function (post) {
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
        profile: (0, _profile.getAuthor)(state, state.user.data.profileId),
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

exports.default = (0, _nextReduxWrapper2.default)(_store2.default, mapStateToProps, mapDispatchToProps)(FeedView);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJ3aXRoUmVkdXgiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJIZWFkIiwiY3JlYXRlU3RvcmUiLCJhY3Rpb25zIiwiZ2V0QXV0aG9yIiwiUHJvZmlsZSIsIlBvc3QiLCJGZWVkVmlldyIsInBvc3RzIiwicHJvZmlsZSIsInVzZXJJZCIsImxpa2VQb3N0IiwiZm9jdXNQb3N0IiwicmVwbHkiLCJuYW1lIiwibWFwIiwicCIsInBvc3QiLCJtZXNzYWdlIiwiYXV0aG9yIiwibGlrZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJyZXBsaWVzIiwibGlrZXMiLCJpbmRleE9mIiwidXNlciIsInByb2ZpbGVJZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicmVwbHlUb1Bvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFTLEFBQWU7O0FBQ3hCLEFBQVMsQUFBaUI7O0FBRTFCLEFBQU8sQUFBYTs7OztBQUVwQixBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNLFdBQVcsU0FBWCxBQUFXLGVBQUE7UUFBQSxBQUFHLGFBQUgsQUFBRztRQUFILEFBQVUsZUFBVixBQUFVO1FBQVYsQUFBbUIsY0FBbkIsQUFBbUI7UUFBbkIsQUFBMkIsZ0JBQTNCLEFBQTJCO1FBQTNCLEFBQXFDLGlCQUFyQyxBQUFxQztRQUFyQyxBQUFnRCxhQUFoRCxBQUFnRDsyQkFDN0QsQUFBQyxtQ0FBUSxTQUFULEFBQWtCO3NCQUFsQjt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FBdUIsMkJBQXZCLEFBQStCLE1BRnZDLEFBQ0ksQUFDSSxBQUVKLDhCQUFBLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSztBQURMO0FBQUEsYUFDSyxBQUFNLElBQUksYUFBQTsrQkFDUCxjQUFBO2dEQUFBLEFBQWU7OzBCQUFmOzRCQUFBLEFBQ0k7QUFESjtBQUFBLFNBQUEsa0JBQ0ksQUFBQyxnQ0FBSyxLQUFLLEVBQUEsQUFBRSxLQUFiLEFBQWtCLFNBQVMsTUFBTSxFQUFqQyxBQUFtQyxNQUFNLFFBQVEsRUFBakQsQUFBbUQsUUFBUSxPQUFPLEVBQWxFLEFBQW9FLE9BQU8sTUFBM0UsQUFBaUYsVUFBVSxRQUEzRixBQUFrRyxRQUFPLFFBQXpHLEFBQWlILFFBQVEsV0FBekgsQUFBb0ksV0FBVyxPQUEvSSxBQUFzSjswQkFBdEo7NEJBRkcsQUFDUCxBQUNJO0FBQUE7O0FBUGhCLEFBSUksQUFDSztpQkFMVDthQURhLEFBQ2I7QUFBQTtBQURKOztBQThDQSxJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDL0I7O3FCQUNXLEFBQU0sTUFBTixBQUFZLEtBQVosQUFBaUIsSUFBSSxVQUFBLEFBQUMsTUFBRDs7aURBQ3hCLEFBQ087a0NBQ00sQUFBSyxRQUFMLEFBQWEsSUFBSSxnQkFBQTswREFBQSxBQUNuQjtvQ0FDSyx3QkFBQSxBQUFVLE9BQU8sS0FGSCxBQUVkLEFBQXNCO0FBQTlCO0FBTDJCLEFBQ25DLEFBRWEsQUFLYixxQkFMYTtBQUFUO3dCQUtJLHdCQUFBLEFBQVUsT0FBTyxLQVJVLEFBUTNCLEFBQXNCLEFBQzlCO3VCQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxNQUFBLEFBQU0sS0FBTixBQUFXLEtBQTlCLEFBQW1DLGFBQWEsQ0FUL0IsQUFBVyxBQVNxQjtBQVRyQixBQUNuQztBQUZELEFBQ0ksQUFXUCxTQVhPO2lCQVdFLHdCQUFBLEFBQVUsT0FBTyxNQUFBLEFBQU0sS0FBTixBQUFXLEtBWmxDLEFBWU0sQUFBaUMsQUFDMUM7Z0JBQVEsTUFBQSxBQUFNLEtBQU4sQUFBVyxLQWJ2QixBQUFPLEFBYXFCLEFBRS9CO0FBZlUsQUFDSDtBQUZSOztBQWtCQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQUQ7O2tCQUNiLCtCQUFtQixlQUFuQixBQUEyQixVQURDLEFBQzVCLEFBQXFDLEFBQy9DO2VBQU8sK0JBQW1CLGVBQW5CLEFBQTJCLGFBRkksQUFFL0IsQUFBd0MsQUFDL0M7bUJBQVcsK0JBQW1CLGVBQW5CLEFBQTJCLFdBSGYsQUFBZSxBQUczQixBQUFzQztBQUhYLEFBQ3RDO0FBREosQUFNQTs7a0JBQWUsQUFBVSxpREFBVixBQUF1QixpQkFBdkIsQUFBd0Msb0JBQXZELEFBQWUsQUFBNEQiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==