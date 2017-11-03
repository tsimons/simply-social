'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/layouts/Profile/Header.js';


var Header = function Header(_ref) {
    var profile = _ref.profile;
    return _react2.default.createElement('div', {
        className: 'jsx-2365497228' + ' ' + 'header',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2365497228' + ' ' + 'header__img-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('img', { src: profile.image, alt: '', className: 'jsx-2365497228' + ' ' + 'header__img',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    })), _react2.default.createElement('h1', {
        className: 'jsx-2365497228' + ' ' + 'header__name',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, profile.name), _react2.default.createElement('p', {
        className: 'jsx-2365497228' + ' ' + 'header__bio',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, profile.bio), _react2.default.createElement('p', {
        className: 'jsx-2365497228' + ' ' + 'header__site',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('a', { href: profile.site, className: 'jsx-2365497228' + ' ' + 'header__site-link',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, profile.site)), _react2.default.createElement(_style2.default, {
        styleId: '2365497228',
        css: '.header.jsx-2365497228{text-align:center;}.header__img-container.jsx-2365497228{margin:0 0 25px 0;}.header__img.jsx-2365497228{display:inline-block;width:85px;height:85px;border-radius:3px;}.header__name.jsx-2365497228{margin :0 0 15px 0;font-size:30px;color:white;}.header__bio.jsx-2365497228{margin :0 0 10px 0;font-size:15px;color:white;opacity:.7;}.header__site-link.jsx-2365497228:link{font-size:15px;color:#262728;text-decoration:none;opacity:.7;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvUHJvZmlsZS9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYW9CLEFBR21DLEFBR0EsQUFHRyxBQU9GLEFBT0EsQUFRSixlQUNELEdBNUJsQixBQUdBLENBV21CLEFBT0EsRUFmSixRQXVCVSxHQXRCVCxFQVFBLEFBT0EsVUFkTSxFQVF0QixBQU9lLElBT0EsT0FOZixJQU9BLENBdEJBIiwiZmlsZSI6ImxheW91dHMvUHJvZmlsZS9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2hhcGUsIHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBwcm9maWxlIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2ZpbGUuaW1hZ2V9IGNsYXNzTmFtZT1cImhlYWRlcl9faW1nXCIgYWx0PVwiXCIvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyX19uYW1lXCI+e3Byb2ZpbGUubmFtZX08L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXJfX2Jpb1wiPntwcm9maWxlLmJpb308L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZVwiPjxhIGhyZWY9e3Byb2ZpbGUuc2l0ZX0gY2xhc3NOYW1lPVwiaGVhZGVyX19zaXRlLWxpbmtcIj57cHJvZmlsZS5zaXRlfTwvYT48L3A+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRlcl9faW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjVweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRlcl9faW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4NXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlcl9fbmFtZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luIDogMCAwIDE1cHggMDtcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkZXJfX2JpbyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luIDogMCAwIDEwcHggMDtcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkZXJfX3NpdGUtbGluazpsaW5rIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyNjI3Mjg7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5IZWFkZXIuZGlzcGxheU5hbWUgPSAnSG9tZUxheW91dEhlYWRlcic7XG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICAgIHByb2ZpbGU6IHNoYXBlKHtcbiAgICAgICAgaW1nOiBzdHJpbmcsXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgYmlvOiBzdHJpbmcsXG4gICAgICAgIHNpdGU6IHN0cmluZ1xuICAgIH0pXG59XG5IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHByb2ZpbGU6IHtcbiAgICAgICAgaW1nOiAnJyxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGJpbzogJycsXG4gICAgICAgIHNpdGU6ICcnXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=layouts/Profile/Header.js */'
    }));
};

Header.displayName = 'HomeLayoutHeader';
Header.propTypes = {
    profile: (0, _propTypes.shape)({
        img: _propTypes.string,
        name: _propTypes.string,
        bio: _propTypes.string,
        site: _propTypes.string
    })
};
Header.defaultProps = {
    profile: {
        img: '',
        name: '',
        bio: '',
        site: ''
    }
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvUHJvZmlsZS9IZWFkZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzaGFwZSIsInN0cmluZyIsIkhlYWRlciIsInByb2ZpbGUiLCJpbWFnZSIsIm5hbWUiLCJiaW8iLCJzaXRlIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJpbWciLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFPOzs7Ozs7O0FBRWhCLElBQU0sU0FBUyxTQUFULEFBQVMsYUFBQTtRQUFBLEFBQUcsZUFBSCxBQUFHOzJCQUNkLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLDhDQUNTLEtBQUssUUFBVixBQUFrQixPQUErQixLQUFqRCxBQUFxRCx3Q0FBckQsQUFBbUM7O3NCQUFuQzt3QkFGUixBQUNJLEFBQ0ksQUFHSjtBQUhJO3lCQUdKLGNBQUE7NENBQUEsQUFBYzs7c0JBQWQ7d0JBQUEsQUFBOEI7QUFBOUI7QUFBQSxlQUxKLEFBS0ksQUFBc0MsQUFDdEMsdUJBQUEsY0FBQTs0Q0FBQSxBQUFhOztzQkFBYjt3QkFBQSxBQUE0QjtBQUE1QjtBQUFBLGVBTkosQUFNSSxBQUFvQyxBQUNwQyxzQkFBQSxjQUFBOzRDQUFBLEFBQWE7O3NCQUFiO3dCQUFBLEFBQTRCO0FBQTVCO0FBQUEsdUJBQTRCLGNBQUEsT0FBRyxNQUFNLFFBQVQsQUFBaUIsMENBQWpCLEFBQWlDOztzQkFBakM7d0JBQUEsQUFBc0Q7QUFBdEQ7ZUFQaEMsQUFPSSxBQUE0QixBQUE4RDtpQkFQOUY7YUFEVyxBQUNYO0FBQUE7QUFESjs7QUFpREEsT0FBQSxBQUFPLGNBQVAsQUFBcUI7QUFDckIsT0FBQSxBQUFPOztBQUNZLEFBQ04sQUFDTDtBQUZXLEFBRUwsQUFDTjtBQUhXLEFBR04sQUFDTDtBQUxSLEFBQW1CLEFBQ04sQUFBTSxBQUlMO0FBSkssQUFDWCxLQURLO0FBRE0sQUFDZjtBQU9KLE9BQUEsQUFBTzs7YUFDTSxBQUNBLEFBQ0w7Y0FGSyxBQUVDLEFBQ047YUFISyxBQUdBLEFBQ0w7Y0FMUixBQUFzQixBQUNULEFBSUMsQUFJZDtBQVJhLEFBQ0w7QUFGYyxBQUNsQjs7a0JBUUosQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==