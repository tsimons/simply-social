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
        css: '.header.jsx-2365497228{text-align:center;}.header__img-container.jsx-2365497228{margin:0 0 25px 0;}.header__img.jsx-2365497228{display:inline-block;width:85px;height:85px;border-radius:3px;}.header__name.jsx-2365497228{margin :0 0 15px 0;font-size:30px;color:white;}.header__bio.jsx-2365497228{margin :0 0 10px 0;font-size:15px;color:white;opacity:.7;}.header__site-link.jsx-2365497228:link{font-size:15px;color:#262728;text-decoration:none;opacity:.7;}'
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