'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _NavigationContainer = require('../../containers/NavigationContainer');

var _NavigationContainer2 = _interopRequireDefault(_NavigationContainer);

var _Footer = require('../../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/layouts/Base/Base.layout.js';


var BaseLayout = function BaseLayout(_ref) {
    var children = _ref.children;
    return _react2.default.createElement('div', {
        className: 'jsx-1443766461' + ' ' + 'base-layout',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css', className: 'jsx-1443766461',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1443766461' + ' ' + 'base-layout__navigation',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_NavigationContainer2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1443766461' + ' ' + 'base-layout__content',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, children), _react2.default.createElement('div', {
        className: 'jsx-1443766461' + ' ' + 'base-layout__footer',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement(_Footer2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '1096902356',
        css: 'body,html,body>*,body>*>*,body>*>*>*{height:100%;}body{font-family:"Open Sans";}*{box-sizing:border-box;}img,video{vertical-align:middle;max-width:100%;}'
    }), _react2.default.createElement(_style2.default, {
        styleId: '1937562464',
        css: '.base-layout.jsx-1443766461{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;}.base-layout__navigation.jsx-1443766461{-webkit-flex:0 0 60px;-ms-flex:0 0 60px;flex:0 0 60px;}.base-layout__content.jsx-1443766461{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}.base-layout__footer.jsx-1443766461{-webkit-flex:0 0 70px;-ms-flex:0 0 70px;flex:0 0 70px;}'
    }));
};

BaseLayout.displayName = 'BaseLayout';
BaseLayout.propTypes = {
    children: _propTypes.node
};

exports.default = BaseLayout;