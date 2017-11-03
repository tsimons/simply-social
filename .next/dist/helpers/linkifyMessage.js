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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvbGlua2lmeU1lc3NhZ2UuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJsaW5raWZ5TWVzc2FnZSIsIm1lc3NhZ2UiLCJzcGxpdCIsIm1hcCIsInN0ciIsImkiLCJhcnIiLCJoYXNTcGFjZSIsImxlbmd0aCIsIm1heWJlU3BhY2UiLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU8sQUFFUDs7Ozs7OztBQUFlLFNBQUEsQUFBUyxpQkFBOEI7UUFBZCxBQUFjLDhFQUFKLEFBQUksQUFDbEQ7O21CQUFPLEFBQVEsTUFBUixBQUFjLE1BQWQsQUFBb0IsSUFBSSxVQUFBLEFBQUMsS0FBRCxBQUFNLEdBQU4sQUFBUyxLQUFRLEFBQzVDO1lBQUksV0FBVyxNQUFPLElBQUEsQUFBSSxTQUExQixBQUFtQyxBQUNuQztZQUFJLGFBQWEsV0FBQSxBQUFXLE1BQTVCLEFBQWtDLEFBRWxDOztZQUFJLE9BQU8sSUFBQSxBQUFJLE1BQWYsQUFBVyxBQUFVLGtCQUFrQixBQUNuQzttQ0FDSSxjQUFBLE9BQUcsS0FBSCxBQUFRLEtBQUssTUFBYixBQUFtQixLQUFLLFFBQXhCLEFBQStCLFVBQVMsV0FBeEMsQUFBa0Q7OEJBQWxEO2dDQUFBLEFBQWdHO0FBQWhHO2FBQUEsRUFBQSxBQUFxRyxLQUR6RyxBQUNJLEFBRVA7QUFFRDs7WUFBSSxPQUFPLElBQUEsQUFBSSxNQUFmLEFBQVcsQUFBVSxPQUFPLEFBQ3hCO21DQUNJLGNBQUEsT0FBRyxLQUFILEFBQVEsS0FBSyxNQUFiLEFBQWtCLElBQUcsUUFBckIsQUFBNEIsVUFBUyxXQUFyQyxBQUErQzs4QkFBL0M7Z0NBQUEsQUFBNEY7QUFBNUY7YUFBQSxFQUFBLEFBQWlHLEtBRHJHLEFBQ0ksQUFFUDtBQUVEOztZQUFJLE9BQU8sSUFBQSxBQUFJLE1BQWYsQUFBVyxBQUFVLE9BQU8sQUFDeEI7bUNBQ0ksY0FBQSxPQUFHLEtBQUgsQUFBUSxLQUFLLE1BQWIsQUFBa0IsSUFBRyxRQUFyQixBQUE0QixVQUFTLFdBQXJDLEFBQStDOzhCQUEvQztnQ0FBQSxBQUFpRztBQUFqRzthQUFBLEVBQUEsQUFBc0csS0FEMUcsQUFDSSxBQUVQO0FBRUQ7OytCQUFPLGNBQUEsVUFBTSxLQUFOLEFBQVc7MEJBQVg7NEJBQUEsQUFBaUI7QUFBakI7U0FBQSxRQUFQLEFBQU8sQUFBdUIsQUFDakM7QUF2QkQsQUFBTyxBQXdCVixLQXhCVSIsImZpbGUiOiJsaW5raWZ5TWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCJ9