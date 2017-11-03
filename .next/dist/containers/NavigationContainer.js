'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _Navigation = require('../components/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _posts = require('../modules/posts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        isPostModalOpen: state.posts.ui.isPostModalOpen
    };
};

var mapDispatchToProps = {
    openPostModal: _posts.actions.openPostModal,
    closePostModal: _posts.actions.closePostModal
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Navigation2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvTmF2aWdhdGlvbkNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJjb25uZWN0IiwiTmF2aWdhdGlvbiIsImFjdGlvbnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImlzUG9zdE1vZGFsT3BlbiIsInBvc3RzIiwidWkiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJvcGVuUG9zdE1vZGFsIiwiY2xvc2VQb3N0TW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVM7O0FBRVQsQUFBTyxBQUFnQjs7OztBQUV2QixBQUFTLEFBQWU7Ozs7QUFFeEIsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsZ0JBQUEsQUFBQyxPQUFEOzt5QkFDSCxNQUFBLEFBQU0sTUFBTixBQUFZLEdBRFQsQUFBWSxBQUNBO0FBREEsQUFDaEM7QUFESjs7QUFJQSxJQUFNO21CQUNhLGVBRFEsQUFDQSxBQUN2QjtvQkFBZ0IsZUFGcEIsQUFBMkIsQUFFQyxBQUc1QjtBQUwyQixBQUN2Qjs7a0JBSVcseUJBQUEsQUFBUSxpQkFBdkIsQUFBZSxBQUF5QixBQUFvQiIsImZpbGUiOiJOYXZpZ2F0aW9uQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=