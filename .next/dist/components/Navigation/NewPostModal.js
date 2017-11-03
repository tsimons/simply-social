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

var _NewPostContainer = require('../../containers/NewPostContainer');

var _NewPostContainer2 = _interopRequireDefault(_NewPostContainer);

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
    }, 'Create new message'), _react2.default.createElement(_NewPostContainer2.default, { theme: 'dark', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '3075234051',
        css: '.new-post-modal.jsx-3075234051{width:575px;padding:25px 26px 13px;margin:0 auto;background:#dee1e5;border-radius:3px;}h3.jsx-3075234051{margin:0 0 21px;font-size:16px;font-weight:500;color:#70767f;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi9OZXdQb3N0TW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYW9CLEFBRzZCLEFBV0ksWUFUTyxJQVdSLGVBQ0MsSUFYRixZQVlBLEVBVkssWUFXdkIsT0FUc0Isa0JBQ3RCIiwiZmlsZSI6ImNvbXBvbmVudHMvTmF2aWdhdGlvbi9OZXdQb3N0TW9kYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9kZSwgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnO1xuaW1wb3J0IE5ld1Bvc3QgZnJvbSAnLi4vLi4vY29udGFpbmVycy9OZXdQb3N0Q29udGFpbmVyJztcblxuY29uc3QgTmV3UG9zdE1vZGFsID0gKHsgY2hpbGRyZW4sIG9uQ2xvc2UgfSkgPT4gKFxuICAgIDxNb2RhbCBvbkNsb3NlPXtvbkNsb3NlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctcG9zdC1tb2RhbFwiPlxuICAgICAgICAgICAgPGgzPkNyZWF0ZSBuZXcgbWVzc2FnZTwvaDM+XG4gICAgICAgICAgICA8TmV3UG9zdCB0aGVtZT1cImRhcmtcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubmV3LXBvc3QtbW9kYWwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1NzVweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDI2cHggMTNweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGVlMWU1O1xuXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjFweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzY3ZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvTW9kYWw+XG4pO1xuXG5OZXdQb3N0TW9kYWwuZGlzcGxheU5hbWUgPSAnTmV3UG9zdE1vZGFsJztcbk5ld1Bvc3RNb2RhbC5wcm9wVHlwZXMgPSB7XG4gICAgb25DbG9zZTogZnVuYy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1Bvc3RNb2RhbDsiXX0= */\n/*@ sourceURL=components/Navigation/NewPostModal.js */'
    }));
};

NewPostModal.displayName = 'NewPostModal';
NewPostModal.propTypes = {
    onClose: _propTypes.func.isRequired
};

exports.default = NewPostModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi9OZXdQb3N0TW9kYWwuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJub2RlIiwiZnVuYyIsIk1vZGFsIiwiTmV3UG9zdCIsIk5ld1Bvc3RNb2RhbCIsImNoaWxkcmVuIiwib25DbG9zZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU07O0FBRWYsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBYTs7Ozs7Ozs7O0FBRXBCLElBQU0sZUFBZSxTQUFmLEFBQWUsbUJBQUE7UUFBQSxBQUFHLGdCQUFILEFBQUc7UUFBSCxBQUFhLGVBQWIsQUFBYTsyQkFDOUIsQUFBQyxpQ0FBTSxTQUFQLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSx1Q0FBQSxBQUFDLDRDQUFRLE9BQVQsQUFBZTtzQkFBZjt3QkFIUixBQUNJLEFBRUk7QUFBQTs7aUJBSFI7YUFEaUIsQUFDakI7QUFBQTtBQURKOztBQThCQSxhQUFBLEFBQWEsY0FBYixBQUEyQjtBQUMzQixhQUFBLEFBQWE7YUFDQSxnQkFEYixBQUF5QixBQUNQLEFBR2xCO0FBSnlCLEFBQ3JCOztrQkFHSixBQUFlIiwiZmlsZSI6Ik5ld1Bvc3RNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCJ9