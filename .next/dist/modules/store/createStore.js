'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStore = function createStore() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var enhancers = [];
    var middleware = [];
    var composeEnhancers = _redux.compose;

    var store = (0, _redux.createStore)((0, _reducers2.default)(), initialState, composeEnhancers.apply(undefined, [_redux.applyMiddleware.apply(undefined, middleware)].concat(enhancers)));

    return store;
};

exports.default = createStore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvc3RvcmUvY3JlYXRlU3RvcmUuanMiXSwibmFtZXMiOlsiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNyZWF0ZVN0b3JlIiwiY3JlYXRlUmVkdXhTdG9yZSIsIm1ha2VSb290UmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImVuaGFuY2VycyIsIm1pZGRsZXdhcmUiLCJjb21wb3NlRW5oYW5jZXJzIiwic3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVMsQUFBVCxBQUEwQixBQUExQixBQUFtQyxBQUFlLEFBQWxEOztBQUNBLEFBQU8sQUFBUCxBQUE0QixBQUE1Qjs7Ozs7O0FBRUEsSUFBTSxjQUFjLFNBQWQsQUFBYyxjQUF1QjtRQUF0QixBQUFzQixtRkFBUCxBQUFPLEFBQ3ZDOztRQUFNLFlBQVksQUFBbEIsQUFDQTtRQUFNLGFBQWEsQUFBbkIsQUFDQTtRQUFJLEFBQW1CLEFBQXZCLEFBRUE7O1FBQU0sUUFBUSx3QkFDVixBQURVLDJCQUVWLEFBRlUsY0FHVixtQ0FDSSx3Q0FBbUIsQUFBbkIsQUFESixvQkFFTyxBQUZQLEFBSFUsQUFBZCxBQVNBOztXQUFPLEFBQVAsQUFDSDtBQWZELEFBaUJBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImNyZWF0ZVN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=