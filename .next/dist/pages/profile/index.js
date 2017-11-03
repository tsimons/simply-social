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

var _store = require('../../modules/store');

var _store2 = _interopRequireDefault(_store);

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
            lineNumber: 14
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1796691531' + ' ' + 'posts',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _mockPosts2.default.map(function (p) {
        return _react2.default.createElement('div', {
            className: 'jsx-1796691531' + ' ' + 'post-container',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 17
            }
        }, _react2.default.createElement(_Post2.default, { key: p.post.message, post: p.post, author: p.author, liked: p.liked, layout: 'list', __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            }
        }));
    })), _react2.default.createElement(_style2.default, {
        styleId: '1796691531',
        css: '.posts.jsx-1796691531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-1796691531{max-width:1199px;}.post-container.jsx-1796691531{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}.posts--tile.jsx-1796691531 .post-container.jsx-1796691531{max-width:375px;margin:0 0 25px 25px;max-height:500px;}.posts--tile.jsx-1796691531 .post-container.jsx-1796691531:nth-child(3n + 1),.posts--tile.jsx-1796691531 .post-container.jsx-1796691531:first-child{margin-left:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvaW5kZXguanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUc4QixBQVVJLEFBSUgsQUFJRSxBQU9GLGNBQ2xCLEVBUHlCLENBUnpCLG9CQVNxQixpQkFMckIsQUFNQSxvQkFwQnVCLHFFQUNJLDZHQUNPLG1IQUNkLGdCQUNGLGNBQ00sb0JBQ3hCIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcblxuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4uLy4uL21vZHVsZXMvc3RvcmUnO1xuXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi8uLi9sYXlvdXRzL1Byb2ZpbGUnO1xuXG5pbXBvcnQgUG9zdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3QnO1xuXG5pbXBvcnQgcG9zdHMgZnJvbSAnLi4vLi4vbW9ja1Bvc3RzJztcblxuY29uc3QgRmVlZFZpZXcgPSAoKSA9PiAoXG4gICAgPFByb2ZpbGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHNcIj5cbiAgICAgICAgICAgIHtwb3N0cy5tYXAocCA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8UG9zdCBrZXk9e3AucG9zdC5tZXNzYWdlfSBwb3N0PXtwLnBvc3R9IGF1dGhvcj17cC5hdXRob3J9IGxpa2VkPXtwLmxpa2VkfSBsYXlvdXQ9XCJsaXN0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucG9zdHMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1OTlweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDEycHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RzLS10aWxlIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExOTlweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RzLS10aWxlIC5wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNzVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAyNXB4IDI1cHg7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0cy0tdGlsZSAucG9zdC1jb250YWluZXI6bnRoLWNoaWxkKDNuICsgMSksXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUgLnBvc3QtY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvUHJvZmlsZT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChjcmVhdGVTdG9yZSkoRmVlZFZpZXcpOyJdfQ== */\n/*@ sourceURL=pages/profile/index.js?entry */'
    }));
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default)(FeedView);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJ3aXRoUmVkdXgiLCJjcmVhdGVTdG9yZSIsIlByb2ZpbGUiLCJQb3N0IiwicG9zdHMiLCJGZWVkVmlldyIsIm1hcCIsInAiLCJwb3N0IiwibWVzc2FnZSIsImF1dGhvciIsImxpa2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFpQjs7OztBQUV4QixBQUFPLEFBQWE7Ozs7QUFFcEIsQUFBTyxBQUFVOzs7O0FBRWpCLEFBQU8sQUFBVzs7Ozs7Ozs7O0FBRWxCLElBQU0sV0FBVyxTQUFYLEFBQVcsV0FBQTsyQkFDYixBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSztBQURMO0FBQUEsMkJBQ0ssQUFBTSxJQUFJLGFBQUE7K0JBQ1AsY0FBQTtnREFBQSxBQUFlOzswQkFBZjs0QkFBQSxBQUNJO0FBREo7QUFBQSxTQUFBLGtCQUNJLEFBQUMsZ0NBQUssS0FBSyxFQUFBLEFBQUUsS0FBYixBQUFrQixTQUFTLE1BQU0sRUFBakMsQUFBbUMsTUFBTSxRQUFRLEVBQWpELEFBQW1ELFFBQVEsT0FBTyxFQUFsRSxBQUFvRSxPQUFPLFFBQTNFLEFBQWtGOzBCQUFsRjs0QkFGRyxBQUNQLEFBQ0k7QUFBQTs7QUFKaEIsQUFDSSxBQUNLO2lCQUZUO2FBRGEsQUFDYjtBQUFBO0FBREosQUEyQ0E7O2tCQUFlLEFBQVUsaURBQXpCLEFBQWUsQUFBdUIiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==