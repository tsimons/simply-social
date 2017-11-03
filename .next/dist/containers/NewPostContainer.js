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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvTmV3UG9zdENvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJjb25uZWN0IiwiYWN0aW9ucyIsIk5ld1Bvc3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb3BzIiwiYXV0aG9yIiwidXNlciIsImRhdGEiLCJwcm9maWxlSWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJhZGRQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFFVCxBQUFTLEFBQWU7O0FBRXhCLEFBQU8sQUFBYTs7Ozs7O0FBRXBCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBRCxBQUFRLE9BQVI7c0NBQUEsQUFDakI7Z0JBQ0ssTUFBQSxBQUFNLEtBQU4sQUFBVyxLQUZDLEFBRUk7QUFBeEI7QUFGSjs7QUFLQSxJQUFNO2FBQ08sZUFEYixBQUEyQixBQUNOLEFBR3JCO0FBSjJCLEFBQ3ZCOztrQkFHVyx5QkFBQSxBQUFRLGlCQUF2QixBQUFlLEFBQXlCLEFBQW9CIiwiZmlsZSI6Ik5ld1Bvc3RDb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==