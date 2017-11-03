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
        className: 'jsx-3304665741' + ' ' + 'header',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-3304665741' + ' ' + 'header__img-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('img', { src: profile.image, alt: '', className: 'jsx-3304665741' + ' ' + 'header__img',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    })), _react2.default.createElement('h1', {
        className: 'jsx-3304665741' + ' ' + 'header__name',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, profile.name), _react2.default.createElement('p', {
        className: 'jsx-3304665741' + ' ' + 'header__bio',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, profile.bio), _react2.default.createElement('p', {
        className: 'jsx-3304665741' + ' ' + 'header__site',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('a', { href: profile.site, className: 'jsx-3304665741' + ' ' + 'header__site-link',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, profile.site)), _react2.default.createElement(_style2.default, {
        styleId: '3304665741',
        css: '.header.jsx-3304665741{text-align:center;}.header__img-container.jsx-3304665741{margin:0 0 25px 0;}.header__img.jsx-3304665741{display:inline-block;width:85px;height:85px;border-radius:3px;}.header__name.jsx-3304665741{margin :0 0 15px 0;font-size:30px;color:white;}.header__bio.jsx-3304665741{margin :0 0 10px 0;font-size:15px;color:white;opacity:.7;}.header__site-link.jsx-3304665741:link{font-size:15px;text-decoration:none;opacity:.7;}.header__site-link.jsx-3304665741:link,.header__site-link.jsx-3304665741:visited{color:#262728;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvUHJvZmlsZS9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYW9CLEFBR21DLEFBR0EsQUFHRyxBQU9GLEFBT0EsQUFRSixBQU9ELGNBQ2xCLENBUHlCLEdBNUJ6QixBQUdBLENBV21CLEFBT0EsRUFmSixXQUNDLEVBUUEsQUFPQSxFQU9ELFFBckJPLEVBUXRCLEFBT2UsQ0FPZixVQU5BLEtBZkEiLCJmaWxlIjoibGF5b3V0cy9Qcm9maWxlL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzaGFwZSwgc3RyaW5nIH0gZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEhlYWRlciA9ICh7IHByb2ZpbGUgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvZmlsZS5pbWFnZX0gY2xhc3NOYW1lPVwiaGVhZGVyX19pbWdcIiBhbHQ9XCJcIi8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJfX25hbWVcIj57cHJvZmlsZS5uYW1lfTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRlcl9fYmlvXCI+e3Byb2ZpbGUuYmlvfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGVyX19zaXRlXCI+PGEgaHJlZj17cHJvZmlsZS5zaXRlfSBjbGFzc05hbWU9XCJoZWFkZXJfX3NpdGUtbGlua1wiPntwcm9maWxlLnNpdGV9PC9hPjwvcD5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVyX19pbWctY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAyNXB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVyX19pbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogODVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDg1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGVyX19uYW1lIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4gOiAwIDAgMTVweCAwO1xuXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlcl9fYmlvIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4gOiAwIDAgMTBweCAwO1xuXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlcl9fc2l0ZS1saW5rOmxpbmsge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5oZWFkZXJfX3NpdGUtbGluazpsaW5rLFxuICAgICAgICAgICAgLmhlYWRlcl9fc2l0ZS1saW5rOnZpc2l0ZWQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjYyNzI4O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5IZWFkZXIuZGlzcGxheU5hbWUgPSAnSG9tZUxheW91dEhlYWRlcic7XG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICAgIHByb2ZpbGU6IHNoYXBlKHtcbiAgICAgICAgaW1nOiBzdHJpbmcsXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgYmlvOiBzdHJpbmcsXG4gICAgICAgIHNpdGU6IHN0cmluZ1xuICAgIH0pXG59XG5IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHByb2ZpbGU6IHtcbiAgICAgICAgaW1nOiAnJyxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGJpbzogJycsXG4gICAgICAgIHNpdGU6ICcnXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=layouts/Profile/Header.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvUHJvZmlsZS9IZWFkZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzaGFwZSIsInN0cmluZyIsIkhlYWRlciIsInByb2ZpbGUiLCJpbWFnZSIsIm5hbWUiLCJiaW8iLCJzaXRlIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJpbWciLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFPOzs7Ozs7O0FBRWhCLElBQU0sU0FBUyxTQUFULEFBQVMsYUFBQTtRQUFBLEFBQUcsZUFBSCxBQUFHOzJCQUNkLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLDhDQUNTLEtBQUssUUFBVixBQUFrQixPQUErQixLQUFqRCxBQUFxRCx3Q0FBckQsQUFBbUM7O3NCQUFuQzt3QkFGUixBQUNJLEFBQ0ksQUFHSjtBQUhJO3lCQUdKLGNBQUE7NENBQUEsQUFBYzs7c0JBQWQ7d0JBQUEsQUFBOEI7QUFBOUI7QUFBQSxlQUxKLEFBS0ksQUFBc0MsQUFDdEMsdUJBQUEsY0FBQTs0Q0FBQSxBQUFhOztzQkFBYjt3QkFBQSxBQUE0QjtBQUE1QjtBQUFBLGVBTkosQUFNSSxBQUFvQyxBQUNwQyxzQkFBQSxjQUFBOzRDQUFBLEFBQWE7O3NCQUFiO3dCQUFBLEFBQTRCO0FBQTVCO0FBQUEsdUJBQTRCLGNBQUEsT0FBRyxNQUFNLFFBQVQsQUFBaUIsMENBQWpCLEFBQWlDOztzQkFBakM7d0JBQUEsQUFBc0Q7QUFBdEQ7ZUFQaEMsQUFPSSxBQUE0QixBQUE4RDtpQkFQOUY7YUFEVyxBQUNYO0FBQUE7QUFESjs7QUFxREEsT0FBQSxBQUFPLGNBQVAsQUFBcUI7QUFDckIsT0FBQSxBQUFPOztBQUNZLEFBQ04sQUFDTDtBQUZXLEFBRUwsQUFDTjtBQUhXLEFBR04sQUFDTDtBQUxSLEFBQW1CLEFBQ04sQUFBTSxBQUlMO0FBSkssQUFDWCxLQURLO0FBRE0sQUFDZjtBQU9KLE9BQUEsQUFBTzs7YUFDTSxBQUNBLEFBQ0w7Y0FGSyxBQUVDLEFBQ047YUFISyxBQUdBLEFBQ0w7Y0FMUixBQUFzQixBQUNULEFBSUMsQUFJZDtBQVJhLEFBQ0w7QUFGYyxBQUNsQjs7a0JBUUosQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==