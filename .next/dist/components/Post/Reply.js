'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _linkifyMessage = require('../../helpers/linkifyMessage');

var _linkifyMessage2 = _interopRequireDefault(_linkifyMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/Post/Reply.js';


var Reply = function Reply(reply) {
    return _react2.default.createElement('div', { className: 'reply', __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('div', { className: 'reply-image-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('img', { src: reply.author.image, alt: 'Photo of ' + reply.author.name, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    })), _react2.default.createElement('div', { className: 'reply__message', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, (0, _linkifyMessage2.default)(reply.message)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9SZXBseS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImxpbmtpZnlNZXNzYWdlIiwiUmVwbHkiLCJyZXBseSIsImF1dGhvciIsImltYWdlIiwibmFtZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBb0I7Ozs7Ozs7OztBQUUzQixJQUFNLFFBQVEsU0FBUixBQUFRLE1BQUEsQUFBQyxPQUFEOzJCQUNWLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNJO0FBREo7OENBQ1MsS0FBTSxNQUFBLEFBQU0sT0FBakIsQUFBd0IsT0FBUSxtQkFBaUIsTUFBQSxBQUFNLE9BQXZELEFBQThEO3NCQUE5RDt3QkFGUixBQUNJLEFBQ0ksQUFFSjtBQUZJO3lCQUVKLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSztBQURMO3FDQUNvQixNQU5kLEFBQ1YsQUFJSSxBQUNLLEFBQXFCO0FBTmxDIiwiZmlsZSI6IlJlcGx5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=