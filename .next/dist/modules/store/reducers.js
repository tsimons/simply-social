'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _posts = require('../posts');

var _posts2 = _interopRequireDefault(_posts);

var _profile = require('../profile');

var _profile2 = _interopRequireDefault(_profile);

var _user = require('../user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeRootReducer = function makeRootReducer() {
    return (0, _redux.combineReducers)({
        posts: _posts2.default,
        profiles: _profile2.default,
        user: _user2.default
    });
};

exports.default = makeRootReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvc3RvcmUvcmVkdWNlcnMuanMiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwicG9zdFJlZHVjZXIiLCJwcm9maWxlUmVkdWNlciIsInVzZXJSZWR1Y2VyIiwibWFrZVJvb3RSZWR1Y2VyIiwicG9zdHMiLCJwcm9maWxlcyIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVM7O0FBRVQsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBaUI7Ozs7OztBQUV4QixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixrQkFBTSxBQUMxQjs7QUFBdUIsQUFDWixBQUNQO0FBRm1CLEFBRVQsQUFDVjtBQUhKLEFBQU8sQUFBZ0IsQUFHYixBQUViO0FBTDBCLEFBQ25CLEtBREc7QUFEWCxBQVFBOztrQkFBQSxBQUFlIiwiZmlsZSI6InJlZHVjZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=