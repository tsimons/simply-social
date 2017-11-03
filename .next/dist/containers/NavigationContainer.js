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