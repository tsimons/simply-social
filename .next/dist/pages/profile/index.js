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
        profile = _ref.profile;
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
        }, _react2.default.createElement(_Post2.default, { key: p.post.message, post: p.post, author: p.author, liked: p.liked, layout: 'list', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
            }
        }));
    })), _react2.default.createElement(_style2.default, {
        styleId: '1796691531',
        css: '.posts.jsx-1796691531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-1796691531{max-width:1199px;}.post-container.jsx-1796691531{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}.posts--tile.jsx-1796691531 .post-container.jsx-1796691531{max-width:375px;margin:0 0 25px 25px;max-height:500px;}.posts--tile.jsx-1796691531 .post-container.jsx-1796691531:nth-child(3n + 1),.posts--tile.jsx-1796691531 .post-container.jsx-1796691531:first-child{margin-left:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvaW5kZXguanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJvQixBQUc4QixBQVVJLEFBSUgsQUFJRSxBQU9GLGNBQ2xCLEVBUHlCLENBUnpCLG9CQVNxQixpQkFMckIsQUFNQSxvQkFwQnVCLHFFQUNJLDZHQUNPLG1IQUNkLGdCQUNGLGNBQ00sb0JBQ3hCIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4uLy4uL21vZHVsZXMvc3RvcmUnO1xuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uLy4uL21vZHVsZXMvcG9zdHMnO1xuaW1wb3J0IHsgZ2V0QXV0aG9yIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUuc2VsZWN0b3JzJztcblxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vLi4vbGF5b3V0cy9Qcm9maWxlJztcblxuaW1wb3J0IFBvc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0JztcblxuY29uc3QgRmVlZFZpZXcgPSAoeyBwb3N0cywgcHJvZmlsZSB9KSA9PiAoXG4gICAgPFByb2ZpbGUgcHJvZmlsZT17cHJvZmlsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHNcIj5cbiAgICAgICAgICAgIHtwb3N0cy5tYXAocCA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8UG9zdCBrZXk9e3AucG9zdC5tZXNzYWdlfSBwb3N0PXtwLnBvc3R9IGF1dGhvcj17cC5hdXRob3J9IGxpa2VkPXtwLmxpa2VkfSBsYXlvdXQ9XCJsaXN0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucG9zdHMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1OTlweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDEycHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RzLS10aWxlIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExOTlweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RzLS10aWxlIC5wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNzVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAyNXB4IDI1cHg7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0cy0tdGlsZSAucG9zdC1jb250YWluZXI6bnRoLWNoaWxkKDNuICsgMSksXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUgLnBvc3QtY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvUHJvZmlsZT5cbik7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwb3N0czogc3RhdGUucG9zdHMuZGF0YS5tYXAoKHBvc3QpID0+ICh7XG4gICAgICAgICAgICBwb3N0LFxuICAgICAgICAgICAgYXV0aG9yOiBnZXRBdXRob3Ioc3RhdGUsIHBvc3QuYXV0aG9yKSxcbiAgICAgICAgICAgIGxpa2VkOiBwb3N0Lmxpa2VzLmluZGV4T2Yoc3RhdGUudXNlci5wcm9maWxlSWQgPiAtMSlcbiAgICAgICAgfSkpLFxuICAgICAgICBsYXlvdXQ6IHN0YXRlLnBvc3RzLnVpLmxheW91dCxcbiAgICAgICAgcHJvZmlsZTogZ2V0QXV0aG9yKHN0YXRlLCBzdGF0ZS51c2VyLmRhdGEucHJvZmlsZUlkKVxuICAgIH1cbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBjaGFuZ2VMYXlvdXQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLnNldFBvc3RMYXlvdXQsIGRpc3BhdGNoKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGNyZWF0ZVN0b3JlLCBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRmVlZFZpZXcpOyJdfQ== */\n/*@ sourceURL=pages/profile/index.js?entry */'
    }));
};

var mapStateToProps = function mapStateToProps(state) {
    console.log(state);
    return {
        posts: state.posts.data.map(function (post) {
            return {
                post: post,
                author: (0, _profile.getAuthor)(state, post.author),
                liked: post.likes.indexOf(state.user.profileId > -1)
            };
        }),
        layout: state.posts.ui.layout,
        profile: (0, _profile.getAuthor)(state, state.user.data.profileId)
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        changeLayout: (0, _redux.bindActionCreators)(_posts.actions.setPostLayout, dispatch)
    };
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default, mapStateToProps, mapDispatchToProps)(FeedView);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJ3aXRoUmVkdXgiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjcmVhdGVTdG9yZSIsImFjdGlvbnMiLCJnZXRBdXRob3IiLCJQcm9maWxlIiwiUG9zdCIsIkZlZWRWaWV3IiwicG9zdHMiLCJwcm9maWxlIiwibWFwIiwicCIsInBvc3QiLCJtZXNzYWdlIiwiYXV0aG9yIiwibGlrZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibGlrZXMiLCJpbmRleE9mIiwidXNlciIsInByb2ZpbGVJZCIsImxheW91dCIsInVpIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjaGFuZ2VMYXlvdXQiLCJzZXRQb3N0TGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFFVCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQVMsQUFBZTs7QUFDeEIsQUFBUyxBQUFpQjs7QUFFMUIsQUFBTyxBQUFhOzs7O0FBRXBCLEFBQU8sQUFBVTs7Ozs7Ozs7O0FBRWpCLElBQU0sV0FBVyxTQUFYLEFBQVcsZUFBQTtRQUFBLEFBQUcsYUFBSCxBQUFHO1FBQUgsQUFBVSxlQUFWLEFBQVU7MkJBQ3ZCLEFBQUMsbUNBQVEsU0FBVCxBQUFrQjtzQkFBbEI7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNLO0FBREw7QUFBQSxhQUNLLEFBQU0sSUFBSSxhQUFBOytCQUNQLGNBQUE7Z0RBQUEsQUFBZTs7MEJBQWY7NEJBQUEsQUFDSTtBQURKO0FBQUEsU0FBQSxrQkFDSSxBQUFDLGdDQUFLLEtBQUssRUFBQSxBQUFFLEtBQWIsQUFBa0IsU0FBUyxNQUFNLEVBQWpDLEFBQW1DLE1BQU0sUUFBUSxFQUFqRCxBQUFtRCxRQUFRLE9BQU8sRUFBbEUsQUFBb0UsT0FBTyxRQUEzRSxBQUFrRjswQkFBbEY7NEJBRkcsQUFDUCxBQUNJO0FBQUE7O0FBSmhCLEFBQ0ksQUFDSztpQkFGVDthQURhLEFBQ2I7QUFBQTtBQURKOztBQTJDQSxJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDL0I7WUFBQSxBQUFRLElBQVIsQUFBWSxBQUNaOztxQkFDVyxBQUFNLE1BQU4sQUFBWSxLQUFaLEFBQWlCLElBQUksVUFBQSxBQUFDLE1BQUQ7O3NCQUFXLEFBRW5DO3dCQUFRLHdCQUFBLEFBQVUsT0FBTyxLQUZVLEFBRTNCLEFBQXNCLEFBQzlCO3VCQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxNQUFBLEFBQU0sS0FBTixBQUFXLFlBQVksQ0FIekIsQUFBVyxBQUc1QixBQUEyQztBQUhmLEFBQ25DO0FBRkQsQUFDSSxBQUtQLFNBTE87Z0JBS0MsTUFBQSxBQUFNLE1BQU4sQUFBWSxHQU5qQixBQU1vQixBQUN2QjtpQkFBUyx3QkFBQSxBQUFVLE9BQU8sTUFBQSxBQUFNLEtBQU4sQUFBVyxLQVB6QyxBQUFPLEFBT00sQUFBaUMsQUFFakQ7QUFUVSxBQUNIO0FBSFI7O0FBYUEsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFEOztzQkFDVCwrQkFBbUIsZUFBbkIsQUFBMkIsZUFEbEIsQUFBZSxBQUN4QixBQUEwQztBQURsQixBQUN0QztBQURKLEFBSUE7O2tCQUFlLEFBQVUsaURBQVYsQUFBdUIsaUJBQXZCLEFBQXdDLG9CQUF2RCxBQUFlLEFBQTREIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=