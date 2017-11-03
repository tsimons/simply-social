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
        css: '.posts.jsx-1796691531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-1796691531{max-width:1199px;}.post-container.jsx-1796691531{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}.posts--tile.jsx-1796691531 .post-container.jsx-1796691531{max-width:375px;margin:0 0 25px 25px;max-height:500px;}.posts--tile.jsx-1796691531 .post-container.jsx-1796691531:nth-child(3n + 1),.posts--tile.jsx-1796691531 .post-container.jsx-1796691531:first-child{margin-left:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvaW5kZXguanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJvQixBQUc4QixBQVVJLEFBSUgsQUFJRSxBQU9GLGNBQ2xCLEVBUHlCLENBUnpCLG9CQVNxQixpQkFMckIsQUFNQSxvQkFwQnVCLHFFQUNJLDZHQUNPLG1IQUNkLGdCQUNGLGNBQ00sb0JBQ3hCIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4uLy4uL21vZHVsZXMvc3RvcmUnO1xuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uLy4uL21vZHVsZXMvcG9zdHMnO1xuaW1wb3J0IHsgZ2V0QXV0aG9yIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUuc2VsZWN0b3JzJztcblxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vLi4vbGF5b3V0cy9Qcm9maWxlJztcblxuaW1wb3J0IFBvc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0JztcblxuY29uc3QgRmVlZFZpZXcgPSAoeyBwb3N0cywgcHJvZmlsZSwgdXNlcklkLCBsaWtlUG9zdCwgZm9jdXNQb3N0IH0pID0+IChcbiAgICA8UHJvZmlsZSBwcm9maWxlPXtwcm9maWxlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0c1wiPlxuICAgICAgICAgICAge3Bvc3RzLm1hcChwID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQb3N0IGtleT17cC5wb3N0Lm1lc3NhZ2V9IHBvc3Q9e3AucG9zdH0gYXV0aG9yPXtwLmF1dGhvcn0gbGlrZWQ9e3AubGlrZWR9IGxpa2U9e2xpa2VQb3N0fSBsYXlvdXQ9XCJsaXN0XCIgdXNlcklkPXt1c2VySWR9IGZvY3VzUG9zdD17Zm9jdXNQb3N0fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5wb3N0cyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU5OXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMTJweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTE5OXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUgLnBvc3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM3NXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHggMjVweDtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RzLS10aWxlIC5wb3N0LWNvbnRhaW5lcjpudGgtY2hpbGQoM24gKyAxKSxcbiAgICAgICAgICAgIC5wb3N0cy0tdGlsZSAucG9zdC1jb250YWluZXI6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9Qcm9maWxlPlxuKTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9zdHM6IHN0YXRlLnBvc3RzLmRhdGEubWFwKChwb3N0KSA9PiAoe1xuICAgICAgICAgICAgcG9zdCxcbiAgICAgICAgICAgIGF1dGhvcjogZ2V0QXV0aG9yKHN0YXRlLCBwb3N0LmF1dGhvciksXG4gICAgICAgICAgICBsaWtlZDogcG9zdC5saWtlcy5pbmRleE9mKHN0YXRlLnVzZXIuZGF0YS5wcm9maWxlSWQpID4gLTFcbiAgICAgICAgfSkpLFxuICAgICAgICBwcm9maWxlOiBnZXRBdXRob3Ioc3RhdGUsIHN0YXRlLnVzZXIuZGF0YS5wcm9maWxlSWQpLFxuICAgICAgICB1c2VySWQ6IHN0YXRlLnVzZXIuZGF0YS5wcm9maWxlSWRcbiAgICB9XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgbGlrZVBvc3Q6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLmxpa2VQb3N0LCBkaXNwYXRjaCksXG4gICAgZm9jdXNQb3N0OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucy5mb2N1c1Bvc3QsIGRpc3BhdGNoKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGNyZWF0ZVN0b3JlLCBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRmVlZFZpZXcpOyJdfQ== */\n/*@ sourceURL=pages/profile/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJ3aXRoUmVkdXgiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjcmVhdGVTdG9yZSIsImFjdGlvbnMiLCJnZXRBdXRob3IiLCJQcm9maWxlIiwiUG9zdCIsIkZlZWRWaWV3IiwicG9zdHMiLCJwcm9maWxlIiwidXNlcklkIiwibGlrZVBvc3QiLCJmb2N1c1Bvc3QiLCJtYXAiLCJwIiwicG9zdCIsIm1lc3NhZ2UiLCJhdXRob3IiLCJsaWtlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGF0YSIsImxpa2VzIiwiaW5kZXhPZiIsInVzZXIiLCJwcm9maWxlSWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBRVQsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFTLEFBQWU7O0FBQ3hCLEFBQVMsQUFBaUI7O0FBRTFCLEFBQU8sQUFBYTs7OztBQUVwQixBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNLFdBQVcsU0FBWCxBQUFXLGVBQUE7UUFBQSxBQUFHLGFBQUgsQUFBRztRQUFILEFBQVUsZUFBVixBQUFVO1FBQVYsQUFBbUIsY0FBbkIsQUFBbUI7UUFBbkIsQUFBMkIsZ0JBQTNCLEFBQTJCO1FBQTNCLEFBQXFDLGlCQUFyQyxBQUFxQzsyQkFDbEQsQUFBQyxtQ0FBUSxTQUFULEFBQWtCO3NCQUFsQjt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0s7QUFETDtBQUFBLGFBQ0ssQUFBTSxJQUFJLGFBQUE7K0JBQ1AsY0FBQTtnREFBQSxBQUFlOzswQkFBZjs0QkFBQSxBQUNJO0FBREo7QUFBQSxTQUFBLGtCQUNJLEFBQUMsZ0NBQUssS0FBSyxFQUFBLEFBQUUsS0FBYixBQUFrQixTQUFTLE1BQU0sRUFBakMsQUFBbUMsTUFBTSxRQUFRLEVBQWpELEFBQW1ELFFBQVEsT0FBTyxFQUFsRSxBQUFvRSxPQUFPLE1BQTNFLEFBQWlGLFVBQVUsUUFBM0YsQUFBa0csUUFBTyxRQUF6RyxBQUFpSCxRQUFRLFdBQXpILEFBQW9JOzBCQUFwSTs0QkFGRyxBQUNQLEFBQ0k7QUFBQTs7QUFKaEIsQUFDSSxBQUNLO2lCQUZUO2FBRGEsQUFDYjtBQUFBO0FBREo7O0FBMkNBLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBVSxBQUMvQjs7cUJBQ1csQUFBTSxNQUFOLEFBQVksS0FBWixBQUFpQixJQUFJLFVBQUEsQUFBQyxNQUFEOztzQkFBVyxBQUVuQzt3QkFBUSx3QkFBQSxBQUFVLE9BQU8sS0FGVSxBQUUzQixBQUFzQixBQUM5Qjt1QkFBTyxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsTUFBQSxBQUFNLEtBQU4sQUFBVyxLQUE5QixBQUFtQyxhQUFhLENBSC9CLEFBQVcsQUFHcUI7QUFIckIsQUFDbkM7QUFGRCxBQUNJLEFBS1AsU0FMTztpQkFLRSx3QkFBQSxBQUFVLE9BQU8sTUFBQSxBQUFNLEtBQU4sQUFBVyxLQU5sQyxBQU1NLEFBQWlDLEFBQzFDO2dCQUFRLE1BQUEsQUFBTSxLQUFOLEFBQVcsS0FQdkIsQUFBTyxBQU9xQixBQUUvQjtBQVRVLEFBQ0g7QUFGUjs7QUFZQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQUQ7O2tCQUNiLCtCQUFtQixlQUFuQixBQUEyQixVQURDLEFBQzVCLEFBQXFDLEFBQy9DO21CQUFXLCtCQUFtQixlQUFuQixBQUEyQixXQUZmLEFBQWUsQUFFM0IsQUFBc0M7QUFGWCxBQUN0QztBQURKLEFBS0E7O2tCQUFlLEFBQVUsaURBQVYsQUFBdUIsaUJBQXZCLEFBQXdDLG9CQUF2RCxBQUFlLEFBQTREIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=