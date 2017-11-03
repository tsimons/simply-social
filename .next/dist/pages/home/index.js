'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Home = require('../../layouts/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Post = require('../../components/Post');

var _Post2 = _interopRequireDefault(_Post);

var _mockPosts = require('../../mockPosts');

var _mockPosts2 = _interopRequireDefault(_mockPosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/pages/home/index.js?entry';

exports.default = function () {
    return _react2.default.createElement(_Home2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2597281251' + ' ' + 'posts posts--tile',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _mockPosts2.default.map(function (p) {
        return _react2.default.createElement('div', {
            className: 'jsx-2597281251' + ' ' + 'post-container',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 10
            }
        }, _react2.default.createElement(_Post2.default, { key: p.post.message, post: p.post, author: p.author, liked: p.liked, layout: 'tile', __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        }));
    })), _react2.default.createElement(_style2.default, {
        styleId: '2597281251',
        css: '.posts.jsx-2597281251{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-2597281251{max-width:1199px;}.posts--tile.jsx-2597281251 .post-container.jsx-2597281251{max-width:375px;margin:0 0 25px 25px;max-height:500px;}.posts--tile.jsx-2597281251 .post-container.jsx-2597281251:nth-child(3n + 1),.posts--tile.jsx-2597281251 .post-container.jsx-2597281251:first-child{margin-left:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hvbWUvaW5kZXguanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZW9CLEFBRzhCLEFBVUksQUFJRCxBQU9GLGNBQ2xCLEVBUHlCLENBSnpCLG9CQUtxQixpQkFDckIsb0JBaEJ1QixxRUFDSSw2R0FDTyxtSEFDZCxnQkFDRixjQUNNLG9CQUN4QiIsImZpbGUiOiJwYWdlcy9ob21lL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhvbWUgZnJvbSAnLi4vLi4vbGF5b3V0cy9Ib21lJztcbmltcG9ydCBQb3N0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdCc7XG5cbmltcG9ydCBwb3N0cyBmcm9tICcuLi8uLi9tb2NrUG9zdHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gICAgPEhvbWU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHMgcG9zdHMtLXRpbGVcIj5cbiAgICAgICAgICAgIHtwb3N0cy5tYXAocCA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8UG9zdCBrZXk9e3AucG9zdC5tZXNzYWdlfSBwb3N0PXtwLnBvc3R9IGF1dGhvcj17cC5hdXRob3J9IGxpa2VkPXtwLmxpa2VkfSBsYXlvdXQ9XCJ0aWxlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucG9zdHMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1OTlweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDEycHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RzLS10aWxlIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExOTlweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RzLS10aWxlIC5wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNzVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAyNXB4IDI1cHg7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0cy0tdGlsZSAucG9zdC1jb250YWluZXI6bnRoLWNoaWxkKDNuICsgMSksXG4gICAgICAgICAgICAucG9zdHMtLXRpbGUgLnBvc3QtY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvSG9tZT5cbik7Il19 */\n/*@ sourceURL=pages/home/index.js?entry */'
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hvbWUvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIlBvc3QiLCJwb3N0cyIsIm1hcCIsInAiLCJwb3N0IiwibWVzc2FnZSIsImF1dGhvciIsImxpa2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFFakIsQUFBTyxBQUFXLEFBRWxCOzs7Ozs7OztrQkFBZSxZQUFBOzJCQUNYLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNLO0FBREw7QUFBQSwyQkFDSyxBQUFNLElBQUksYUFBQTsrQkFDUCxjQUFBO2dEQUFBLEFBQWU7OzBCQUFmOzRCQUFBLEFBQ0k7QUFESjtBQUFBLFNBQUEsa0JBQ0ksQUFBQyxnQ0FBSyxLQUFLLEVBQUEsQUFBRSxLQUFiLEFBQWtCLFNBQVMsTUFBTSxFQUFqQyxBQUFtQyxNQUFNLFFBQVEsRUFBakQsQUFBbUQsUUFBUSxPQUFPLEVBQWxFLEFBQW9FLE9BQU8sUUFBM0UsQUFBa0Y7MEJBQWxGOzRCQUZHLEFBQ1AsQUFDSTtBQUFBOztBQUpoQixBQUNJLEFBQ0s7aUJBRlQ7YUFEVyxBQUNYO0FBQUE7QUFESiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCJ9