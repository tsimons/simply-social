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
    closePostModal: _posts.actions.closePostModal,
    addPost: _posts.actions.addPost
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Navigation2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvTmF2aWdhdGlvbkNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJjb25uZWN0IiwiTmF2aWdhdGlvbiIsImFjdGlvbnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImlzUG9zdE1vZGFsT3BlbiIsInBvc3RzIiwidWkiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJvcGVuUG9zdE1vZGFsIiwiY2xvc2VQb3N0TW9kYWwiLCJhZGRQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTOztBQUVULEFBQU8sQUFBZ0I7Ozs7QUFFdkIsQUFBUyxBQUFlOzs7O0FBRXhCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBRDs7eUJBQ0gsTUFBQSxBQUFNLE1BQU4sQUFBWSxHQURULEFBQVksQUFDQTtBQURBLEFBQ2hDO0FBREo7O0FBSUEsSUFBTTttQkFDYSxlQURRLEFBQ0EsQUFDdkI7b0JBQWdCLGVBRk8sQUFFQyxBQUN4QjthQUFTLGVBSGIsQUFBMkIsQUFHTixBQUdyQjtBQU4yQixBQUN2Qjs7a0JBS1cseUJBQUEsQUFBUSxpQkFBdkIsQUFBZSxBQUF5QixBQUFvQiIsImZpbGUiOiJOYXZpZ2F0aW9uQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=