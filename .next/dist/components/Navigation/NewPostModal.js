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
        css: '.new-post-modal.jsx-3075234051{width:575px;padding:25px 26px 13px;margin:0 auto;background:#dee1e5;border-radius:3px;}h3.jsx-3075234051{margin:0 0 21px;font-size:16px;font-weight:500;color:#70767f;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi9OZXdQb3N0TW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYW9CLEFBRzZCLEFBV0ksWUFUTyxJQVdSLGVBQ0MsSUFYRixZQVlBLEVBVkssWUFXdkIsT0FUc0Isa0JBQ3RCIiwiZmlsZSI6ImNvbXBvbmVudHMvTmF2aWdhdGlvbi9OZXdQb3N0TW9kYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9kZSwgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnO1xuaW1wb3J0IE5ld1Bvc3QgZnJvbSAnLi4vTmV3UG9zdCc7XG5cbmNvbnN0IE5ld1Bvc3RNb2RhbCA9ICh7IGNoaWxkcmVuLCBvbkNsb3NlIH0pID0+IChcbiAgICA8TW9kYWwgb25DbG9zZT17b25DbG9zZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LXBvc3QtbW9kYWxcIj5cbiAgICAgICAgICAgIDxoMz5DcmVhdGUgbmV3IG1lc3NhZ2U8L2gzPlxuICAgICAgICAgICAgPE5ld1Bvc3QgdGhlbWU9XCJkYXJrXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm5ldy1wb3N0LW1vZGFsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTc1cHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjVweCAyNnB4IDEzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RlZTFlNTtcblxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDIxcHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3MDc2N2Y7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L01vZGFsPlxuKTtcblxuTmV3UG9zdE1vZGFsLmRpc3BsYXlOYW1lID0gJ05ld1Bvc3RNb2RhbCc7XG5OZXdQb3N0TW9kYWwucHJvcFR5cGVzID0ge1xuICAgIG9uQ2xvc2U6IGZ1bmMuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdQb3N0TW9kYWw7Il19 */\n/*@ sourceURL=components/Navigation/NewPostModal.js */'
    }));
};

NewPostModal.displayName = 'NewPostModal';
NewPostModal.propTypes = {
    onClose: _propTypes.func.isRequired
};

exports.default = NewPostModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi9OZXdQb3N0TW9kYWwuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJub2RlIiwiZnVuYyIsIk1vZGFsIiwiTmV3UG9zdCIsIk5ld1Bvc3RNb2RhbCIsImNoaWxkcmVuIiwib25DbG9zZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU07O0FBRWYsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBYTs7Ozs7Ozs7O0FBRXBCLElBQU0sZUFBZSxTQUFmLEFBQWUsbUJBQUE7UUFBQSxBQUFHLGdCQUFILEFBQUc7UUFBSCxBQUFhLGVBQWIsQUFBYTsyQkFDOUIsQUFBQyxpQ0FBTSxTQUFQLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSx1Q0FBQSxBQUFDLG1DQUFRLE9BQVQsQUFBZTtzQkFBZjt3QkFIUixBQUNJLEFBRUk7QUFBQTs7aUJBSFI7YUFEaUIsQUFDakI7QUFBQTtBQURKOztBQThCQSxhQUFBLEFBQWEsY0FBYixBQUEyQjtBQUMzQixhQUFBLEFBQWE7YUFDQSxnQkFEYixBQUF5QixBQUNQLEFBR2xCO0FBSnlCLEFBQ3JCOztrQkFHSixBQUFlIiwiZmlsZSI6Ik5ld1Bvc3RNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCJ9