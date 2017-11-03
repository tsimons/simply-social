"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/TJ/projects/simply-social/components/Logo/Logo.js";


var Logo = function Logo() {
    return _react2.default.createElement("div", {
        className: "jsx-4274308335" + " " + "logo",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement("img", { src: "/static/logo-symbol.png", alt: "", className: "jsx-4274308335",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }), _react2.default.createElement("span", {
        className: "jsx-4274308335" + " " + "logo__simply",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, "simply"), _react2.default.createElement("span", {
        className: "jsx-4274308335" + " " + "logo__social",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, "social"), _react2.default.createElement(_style2.default, {
        styleId: "4274308335",
        css: "img.jsx-4274308335{margin:0 14px 0 0;}span.jsx-4274308335{font-family:'Proxima Nova';font-size:19px;}.logo__simply.jsx-4274308335{color:#70767f;}.logo__social.jsx-4274308335{color:#bec3cc;}"
    }));
};

Logo.displayName = 'Logo';

exports.default = Logo;