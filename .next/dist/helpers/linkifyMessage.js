'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = linkifyMessage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/helpers/linkifyMessage.js';
function linkifyMessage() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    return message.split(/\s/).map(function (str, i, arr) {
        var hasSpace = i !== arr.length - 1;
        var maybeSpace = hasSpace ? ' ' : '';

        if (str && str.match(/^https?\:\/\//)) {
            return _react2.default.createElement('a', { key: str, href: str, target: '_blank', className: 'post__message-link post__message-link--url', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, str, maybeSpace);
        }

        if (str && str.match(/^@/)) {
            return _react2.default.createElement('a', { key: str, href: '', target: '_blank', className: 'post__message-link post__message-link--at', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, str, maybeSpace);
        }

        if (str && str.match(/^#/)) {
            return _react2.default.createElement('a', { key: str, href: '', target: '_blank', className: 'post__message-link post__message-link--hashtag', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, str, maybeSpace);
        }

        return _react2.default.createElement('span', { key: str, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
            }
        }, str + maybeSpace);
    });
}