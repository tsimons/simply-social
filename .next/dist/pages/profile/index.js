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

var _Profile = require('../../layouts/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _Post = require('../../components/Post');

var _Post2 = _interopRequireDefault(_Post);

var _mockPosts = require('../../mockPosts');

var _mockPosts2 = _interopRequireDefault(_mockPosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/pages/profile/index.js?entry';


var FeedView = function FeedView() {
    return _react2.default.createElement(_Profile2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1796691531' + ' ' + 'posts',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _mockPosts2.default.map(function (p) {
        return _react2.default.createElement('div', {
            className: 'jsx-1796691531' + ' ' + 'post-container',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 14
            }
        }, _react2.default.createElement(_Post2.default, { key: p.post.message, post: p.post, author: p.author, liked: p.liked, layout: 'list', __source: {
                fileName: _jsxFileName,
                lineNumber: 15
            }
        }));
    })), _react2.default.createElement(_style2.default, {
        styleId: '1796691531',
        css: '.posts.jsx-1796691531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-1796691531{max-width:1199px;}.post-container.jsx-1796691531{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}.posts--tile.jsx-1796691531 .post-container.jsx-1796691531{max-width:375px;margin:0 0 25px 25px;max-height:500px;}.posts--tile.jsx-1796691531 .post-container.jsx-1796691531:nth-child(3n + 1),.posts--tile.jsx-1796691531 .post-container.jsx-1796691531:first-child{margin-left:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvaW5kZXguanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJvQixBQUc4QixBQVVJLEFBSUgsQUFJRSxBQU9GLGNBQ2xCLEVBUHlCLENBUnpCLG9CQVNxQixpQkFMckIsQUFNQSxvQkFwQnVCLHFFQUNJLDZHQUNPLG1IQUNkLGdCQUNGLGNBQ00sb0JBQ3hCIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vLi4vbGF5b3V0cy9Qcm9maWxlJztcblxuaW1wb3J0IFBvc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0JztcblxuaW1wb3J0IHBvc3RzIGZyb20gJy4uLy4uL21vY2tQb3N0cyc7XG5cbmNvbnN0IEZlZWRWaWV3ID0gKCkgPT4gKFxuICAgIDxQcm9maWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzXCI+XG4gICAgICAgICAgICB7cG9zdHMubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBvc3Qga2V5PXtwLnBvc3QubWVzc2FnZX0gcG9zdD17cC5wb3N0fSBhdXRob3I9e3AuYXV0aG9yfSBsaWtlZD17cC5saWtlZH0gbGF5b3V0PVwibGlzdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnBvc3RzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTk5cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNTBweCAxMnB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0cy0tdGlsZSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTk5cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZmxleDogMSAxIDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0cy0tdGlsZSAucG9zdC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjVweCAyNXB4O1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUgLnBvc3QtY29udGFpbmVyOm50aC1jaGlsZCgzbiArIDEpLFxuICAgICAgICAgICAgLnBvc3RzLS10aWxlIC5wb3N0LWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1Byb2ZpbGU+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGZWVkVmlldzsiXX0= */\n/*@ sourceURL=pages/profile/index.js?entry */'
    }));
};

exports.default = FeedView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJQcm9maWxlIiwiUG9zdCIsInBvc3RzIiwiRmVlZFZpZXciLCJtYXAiLCJwIiwicG9zdCIsIm1lc3NhZ2UiLCJhdXRob3IiLCJsaWtlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFhOzs7O0FBRXBCLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQVc7Ozs7Ozs7OztBQUVsQixJQUFNLFdBQVcsU0FBWCxBQUFXLFdBQUE7MkJBQ2IsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0s7QUFETDtBQUFBLDJCQUNLLEFBQU0sSUFBSSxhQUFBOytCQUNQLGNBQUE7Z0RBQUEsQUFBZTs7MEJBQWY7NEJBQUEsQUFDSTtBQURKO0FBQUEsU0FBQSxrQkFDSSxBQUFDLGdDQUFLLEtBQUssRUFBQSxBQUFFLEtBQWIsQUFBa0IsU0FBUyxNQUFNLEVBQWpDLEFBQW1DLE1BQU0sUUFBUSxFQUFqRCxBQUFtRCxRQUFRLE9BQU8sRUFBbEUsQUFBb0UsT0FBTyxRQUEzRSxBQUFrRjswQkFBbEY7NEJBRkcsQUFDUCxBQUNJO0FBQUE7O0FBSmhCLEFBQ0ksQUFDSztpQkFGVDthQURhLEFBQ2I7QUFBQTtBQURKLEFBMkNBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=