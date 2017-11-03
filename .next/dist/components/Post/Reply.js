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