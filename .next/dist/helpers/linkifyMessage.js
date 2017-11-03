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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvbGlua2lmeU1lc3NhZ2UuanMiXSwibmFtZXMiOlsibGlua2lmeU1lc3NhZ2UiLCJtZXNzYWdlIiwic3BsaXQiLCJtYXAiLCJzdHIiLCJpIiwiYXJyIiwiaGFzU3BhY2UiLCJsZW5ndGgiLCJtYXliZVNwYWNlIiwibWF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7OztBQUFlLFNBQUEsQUFBUyxpQkFBOEI7UUFBZCxBQUFjLDhFQUFKLEFBQUksQUFDbEQ7O21CQUFPLEFBQVEsTUFBUixBQUFjLE1BQWQsQUFBb0IsSUFBSSxVQUFBLEFBQUMsS0FBRCxBQUFNLEdBQU4sQUFBUyxLQUFRLEFBQzVDO1lBQUksV0FBVyxNQUFPLElBQUEsQUFBSSxTQUExQixBQUFtQyxBQUNuQztZQUFJLGFBQWEsV0FBQSxBQUFXLE1BQTVCLEFBQWtDLEFBRWxDOztZQUFJLE9BQU8sSUFBQSxBQUFJLE1BQWYsQUFBVyxBQUFVLGtCQUFrQixBQUNuQzttQ0FDSSxjQUFBLE9BQUcsTUFBSCxBQUFTLEtBQUssUUFBZCxBQUFxQixVQUFTLFdBQTlCLEFBQXdDOzhCQUF4QztnQ0FBQSxBQUFzRjtBQUF0RjthQUFBLEVBQUEsQUFBMkYsS0FEL0YsQUFDSSxBQUVQO0FBRUQ7O1lBQUksT0FBTyxJQUFBLEFBQUksTUFBZixBQUFXLEFBQVUsT0FBTyxBQUN4QjttQ0FDSSxjQUFBLE9BQUcsTUFBSCxBQUFRLElBQUcsUUFBWCxBQUFrQixVQUFTLFdBQTNCLEFBQXFDOzhCQUFyQztnQ0FBQSxBQUFrRjtBQUFsRjthQUFBLEVBQUEsQUFBdUYsS0FEM0YsQUFDSSxBQUVQO0FBRUQ7O1lBQUksT0FBTyxJQUFBLEFBQUksTUFBZixBQUFXLEFBQVUsT0FBTyxBQUN4QjttQ0FDSSxjQUFBLE9BQUcsTUFBSCxBQUFRLElBQUcsUUFBWCxBQUFrQixVQUFTLFdBQTNCLEFBQXFDOzhCQUFyQztnQ0FBQSxBQUF1RjtBQUF2RjthQUFBLEVBQUEsQUFBNEYsS0FEaEcsQUFDSSxBQUVQO0FBRUQ7O2VBQU8sTUFBUCxBQUFhLEFBQ2hCO0FBdkJELEFBQU8sQUF3QlYsS0F4QlUiLCJmaWxlIjoibGlua2lmeU1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==