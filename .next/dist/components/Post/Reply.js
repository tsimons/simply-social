'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _linkifyMessage = require('../../helpers/linkifyMessage');

var _linkifyMessage2 = _interopRequireDefault(_linkifyMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/Post/Reply.js';


var Reply = function Reply(_ref) {
    var reply = _ref.reply;
    return _react2.default.createElement('div', {
        className: 'jsx-1554055723' + ' ' + 'reply',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1554055723' + ' ' + 'reply__image-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('img', { src: reply.author.image, alt: 'Photo of ' + reply.author.name, className: 'jsx-1554055723',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1554055723' + ' ' + 'reply__message',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, (0, _linkifyMessage2.default)(reply.message)), _react2.default.createElement(_style2.default, {
        styleId: '1554055723',
        css: '.reply.jsx-1554055723{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;padding:15px 15px 15px 40px;background:#dee1e5;}.reply__image-container.jsx-1554055723{-webkit-flex:0 0 30px;-ms-flex:0 0 30px;flex:0 0 30px;margin:0 18px 0 0;}.reply__message.jsx-1554055723{-webkit-flex:1;-ms-flex:1;flex:1;font-size:14px;color:#70767f;line-height:1.4;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9SZXBseS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZb0IsQUFHOEIsQUFXQyxBQUtQLGlDQUNRLGVBQ0QsTUFOSSxRQU9GLFVBTnBCLEVBWnlCLElBbUJ6Qix1RUFsQnVCLDZGQUNLLHVHQUVJLDRCQUVULG1CQUN2QiIsImZpbGUiOiJjb21wb25lbnRzL1Bvc3QvUmVwbHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGxpbmtpZnlNZXNzYWdlIGZyb20gJy4uLy4uL2hlbHBlcnMvbGlua2lmeU1lc3NhZ2UnO1xuXG5jb25zdCBSZXBseSA9ICh7IHJlcGx5IH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGx5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwbHlfX2ltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9eyByZXBseS5hdXRob3IuaW1hZ2UgfSBhbHQ9e2BQaG90byBvZiAke3JlcGx5LmF1dGhvci5uYW1lfWB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwbHlfX21lc3NhZ2VcIj5cbiAgICAgICAgICAgIHtsaW5raWZ5TWVzc2FnZShyZXBseS5tZXNzYWdlKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnJlcGx5IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcblxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDQwcHg7XG5cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGVlMWU1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVwbHlfX2ltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE4cHggMCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVwbHlfX21lc3NhZ2Uge1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA3NjdmO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGx5OyJdfQ== */\n/*@ sourceURL=components/Post/Reply.js */'
    }));
};

exports.default = Reply;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9SZXBseS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImxpbmtpZnlNZXNzYWdlIiwiUmVwbHkiLCJyZXBseSIsImF1dGhvciIsImltYWdlIiwibmFtZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFvQjs7Ozs7Ozs7O0FBRTNCLElBQU0sUUFBUSxTQUFSLEFBQVEsWUFBQTtRQUFBLEFBQUcsYUFBSCxBQUFHOzJCQUNiLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLDhDQUNTLEtBQU0sTUFBQSxBQUFNLE9BQWpCLEFBQXdCLE9BQVEsbUJBQWlCLE1BQUEsQUFBTSxPQUF2RCxBQUE4RCxpQkFBOUQ7O3NCQUFBO3dCQUZSLEFBQ0ksQUFDSSxBQUVKO0FBRkk7eUJBRUosY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNLO0FBREw7QUFBQSxxQ0FDb0IsTUFMeEIsQUFJSSxBQUNLLEFBQXFCO2lCQUw5QjthQURVLEFBQ1Y7QUFBQTtBQURKLEFBb0NBOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcGx5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=