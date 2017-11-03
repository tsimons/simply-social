'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reactRedux = require('react-redux');

var _posts = require('../modules/posts');

var _NewPost = require('../components/NewPost');

var _NewPost2 = _interopRequireDefault(_NewPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, props) {
    return (0, _extends3.default)({}, props, {
        author: state.user.data.profileId
    });
};

var mapDispatchToProps = {
    addPost: _posts.actions.addPost
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_NewPost2.default);