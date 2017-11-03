'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Base = require('../Base');

var _Base2 = _interopRequireDefault(_Base);

var _NewPost = require('../../components/NewPost');

var _NewPost2 = _interopRequireDefault(_NewPost);

var _SubNavigation = require('../../components/SubNavigation');

var _SubNavigation2 = _interopRequireDefault(_SubNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/layouts/Home/Home.layout.js';


var links = [{
    href: '/home',
    name: 'All Posts'
}, {
    href: '/home/photos',
    name: 'Photos'
}, {
    href: '/home/videos',
    name: 'Videos'
}];

var HomeLayout = function HomeLayout(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(_Base2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2638758683' + ' ' + 'home-layout__header',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2638758683' + ' ' + 'home-layout__new-post',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement(_NewPost2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-2638758683' + ' ' + 'home-layout__sub-nav-container',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2638758683' + ' ' + 'home-layout__sub-navigation',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement(_SubNavigation2.default, { links: links, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    })), _react2.default.createElement('ul', {
        className: 'jsx-2638758683' + ' ' + 'home-layout__layout-btns',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, _react2.default.createElement('li', {
        className: 'jsx-2638758683',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement('a', { href: 'javascript:void(0)', className: 'jsx-2638758683' + ' ' + 'home-layout__layout-btn',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement('img', { src: '/static/list-icon.png', alt: 'list layout', className: 'jsx-2638758683',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }))), _react2.default.createElement('li', {
        className: 'jsx-2638758683',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement('a', { href: 'javascript:void(0)', className: 'jsx-2638758683' + ' ' + 'home-layout__layout-btn',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement('img', { src: '/static/tile-icon.png', alt: 'tile layout', className: 'jsx-2638758683',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    })))))), _react2.default.createElement('div', {
        className: 'jsx-2638758683' + ' ' + 'home-layout__content',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, children), _react2.default.createElement(_style2.default, {
        styleId: '2638758683',
        css: '.home-layout__header.jsx-2638758683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:427px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:123px 12px 0;background:url(/static/hero-background.jpg) center center no-repeat;background-size:cover;}.home-layout__new-post.jsx-2638758683{max-width:575px;background:rgba(0,178,134,.7);border-radius:3px;width:100%;max-width:575px;padding:49px 33px 29px;}.home-layout__layout-btns.jsx-2638758683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.home-layout__layout-btns.jsx-2638758683 li.jsx-2638758683{margin:0 0 0 16px;}.home-layout__sub-nav-container.jsx-2638758683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:100%;max-width:575px;}'
    }));
};

HomeLayout.displayName = 'HomeLayout';
HomeLayout.propTypes = {
    children: _propTypes.node
};

exports.default = HomeLayout;