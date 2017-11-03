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
            return _react2.default.createElement('a', { href: str, target: '_blank', className: 'post__message-link post__message-link--url', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, str, maybeSpace);
        }

        if (str && str.match(/^@/)) {
            return _react2.default.createElement('a', { href: '', target: '_blank', className: 'post__message-link post__message-link--at', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, str, maybeSpace);
        }

        if (str && str.match(/^#/)) {
            return _react2.default.createElement('a', { href: '', target: '_blank', className: 'post__message-link post__message-link--hashtag', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, str, maybeSpace);
        }

        return str + maybeSpace;
    });
}