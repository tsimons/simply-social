'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _NewPost = require('../NewPost');

var _NewPost2 = _interopRequireDefault(_NewPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/TJ/projects/simply-social/components/Navigation/NewPostModal.js';


var NewPostModal = function NewPostModal(_ref) {
    var children = _ref.children,
        onClose = _ref.onClose;
    return _react2.default.createElement(_Modal2.default, { onClose: onClose, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-3075234051' + ' ' + 'new-post-modal',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('h3', {
        className: 'jsx-3075234051',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, 'Create new message'), _react2.default.createElement(_NewPost2.default, { theme: 'dark', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '3075234051',
        css: '.new-post-modal.jsx-3075234051{width:575px;padding:25px 26px 13px;margin:0 auto;background:#dee1e5;border-radius:3px;}h3.jsx-3075234051{margin:0 0 21px;font-size:16px;font-weight:500;color:#70767f;}'
    }));
};

NewPostModal.displayName = 'NewPostModal';
NewPostModal.propTypes = {
    onClose: _propTypes.func.isRequired
};

exports.default = NewPostModal;