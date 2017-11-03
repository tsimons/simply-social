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
    }, _react2.default.createElement('img', { src: profile.img, alt: '', className: 'jsx-2365497228' + ' ' + 'header__img',
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
        css: '.header.jsx-2365497228{text-align:center;}.header__img-container.jsx-2365497228{margin:0 0 25px 0;}.header__img.jsx-2365497228{display:inline-block;width:85px;height:85px;border-radius:3px;}.header__name.jsx-2365497228{margin :0 0 15px 0;font-size:30px;color:white;}.header__bio.jsx-2365497228{margin :0 0 10px 0;font-size:15px;color:white;opacity:.7;}.header__site-link.jsx-2365497228:link{font-size:15px;color:#262728;text-decoration:none;opacity:.7;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvUHJvZmlsZS9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYW9CLEFBR21DLEFBR0EsQUFHRyxBQU9GLEFBT0EsQUFRSixlQUNELEdBNUJsQixBQUdBLENBV21CLEFBT0EsRUFmSixRQXVCVSxHQXRCVCxFQVFBLEFBT0EsVUFkTSxFQVF0QixBQU9lLElBT0EsT0FOZixJQU9BLENBdEJBIiwiZmlsZSI6ImxheW91dHMvUHJvZmlsZS9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2hhcGUsIHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBwcm9maWxlIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2ZpbGUuaW1nfSBjbGFzc05hbWU9XCJoZWFkZXJfX2ltZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlcl9fbmFtZVwiPntwcm9maWxlLm5hbWV9PC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGVyX19iaW9cIj57cHJvZmlsZS5iaW99PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXJfX3NpdGVcIj48YSBocmVmPXtwcm9maWxlLnNpdGV9IGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZS1saW5rXCI+e3Byb2ZpbGUuc2l0ZX08L2E+PC9wPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXJfX2ltZy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXJfX2ltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4NXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogODVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkZXJfX25hbWUge1xuICAgICAgICAgICAgICAgIG1hcmdpbiA6IDAgMCAxNXB4IDA7XG5cbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGVyX19iaW8ge1xuICAgICAgICAgICAgICAgIG1hcmdpbiA6IDAgMCAxMHB4IDA7XG5cbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGVyX19zaXRlLWxpbms6bGluayB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjYyNzI4O1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuSGVhZGVyLmRpc3BsYXlOYW1lID0gJ0hvbWVMYXlvdXRIZWFkZXInO1xuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgICBwcm9maWxlOiBzaGFwZSh7XG4gICAgICAgIGltZzogc3RyaW5nLFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGJpbzogc3RyaW5nLFxuICAgICAgICBzaXRlOiBzdHJpbmdcbiAgICB9KVxufVxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcm9maWxlOiB7XG4gICAgICAgIGltZzogJycsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBiaW86ICcnLFxuICAgICAgICBzaXRlOiAnJ1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=layouts/Profile/Header.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvUHJvZmlsZS9IZWFkZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzaGFwZSIsInN0cmluZyIsIkhlYWRlciIsInByb2ZpbGUiLCJpbWciLCJuYW1lIiwiYmlvIiwic2l0ZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTzs7Ozs7OztBQUVoQixJQUFNLFNBQVMsU0FBVCxBQUFTLGFBQUE7UUFBQSxBQUFHLGVBQUgsQUFBRzsyQkFDZCxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSw4Q0FDUyxLQUFLLFFBQVYsQUFBa0IsS0FBNkIsS0FBL0MsQUFBbUQsd0NBQW5ELEFBQWlDOztzQkFBakM7d0JBRlIsQUFDSSxBQUNJLEFBR0o7QUFISTt5QkFHSixjQUFBOzRDQUFBLEFBQWM7O3NCQUFkO3dCQUFBLEFBQThCO0FBQTlCO0FBQUEsZUFMSixBQUtJLEFBQXNDLEFBQ3RDLHVCQUFBLGNBQUE7NENBQUEsQUFBYTs7c0JBQWI7d0JBQUEsQUFBNEI7QUFBNUI7QUFBQSxlQU5KLEFBTUksQUFBb0MsQUFDcEMsc0JBQUEsY0FBQTs0Q0FBQSxBQUFhOztzQkFBYjt3QkFBQSxBQUE0QjtBQUE1QjtBQUFBLHVCQUE0QixjQUFBLE9BQUcsTUFBTSxRQUFULEFBQWlCLDBDQUFqQixBQUFpQzs7c0JBQWpDO3dCQUFBLEFBQXNEO0FBQXREO2VBUGhDLEFBT0ksQUFBNEIsQUFBOEQ7aUJBUDlGO2FBRFcsQUFDWDtBQUFBO0FBREo7O0FBaURBLE9BQUEsQUFBTyxjQUFQLEFBQXFCO0FBQ3JCLE9BQUEsQUFBTzs7QUFDWSxBQUNOLEFBQ0w7QUFGVyxBQUVMLEFBQ047QUFIVyxBQUdOLEFBQ0w7QUFMUixBQUFtQixBQUNOLEFBQU0sQUFJTDtBQUpLLEFBQ1gsS0FESztBQURNLEFBQ2Y7QUFPSixPQUFBLEFBQU87O2FBQ00sQUFDQSxBQUNMO2NBRkssQUFFQyxBQUNOO2FBSEssQUFHQSxBQUNMO2NBTFIsQUFBc0IsQUFDVCxBQUlDLEFBSWQ7QUFSYSxBQUNMO0FBRmMsQUFDbEI7O2tCQVFKLEFBQWUiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=