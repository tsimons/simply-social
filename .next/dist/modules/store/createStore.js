'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxDevtoolsExtension = require('redux-devtools-extension');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStore = function createStore() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var enhancers = [];
    var middleware = [];
    var composeEnhancers = _redux.compose;

    if (process.env.NODE_ENV !== 'production') {
        composeEnhancers = _reduxDevtoolsExtension.composeWithDevTools;
    }

    var store = (0, _redux.createStore)((0, _reducers2.default)(), initialState, composeEnhancers.apply(undefined, [_redux.applyMiddleware.apply(undefined, middleware)].concat(enhancers)));

    return store;
};

exports.default = createStore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvc3RvcmUvY3JlYXRlU3RvcmUuanMiXSwibmFtZXMiOlsiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNyZWF0ZVN0b3JlIiwiY3JlYXRlUmVkdXhTdG9yZSIsIm1ha2VSb290UmVkdWNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJpbml0aWFsU3RhdGUiLCJlbmhhbmNlcnMiLCJtaWRkbGV3YXJlIiwiY29tcG9zZUVuaGFuY2VycyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTLEFBQVQsQUFBMEIsQUFBMUIsQUFBbUMsQUFBZSxBQUFsRDs7QUFDQSxBQUFPLEFBQVAsQUFBNEIsQUFBNUI7Ozs7QUFDQSxBQUFTLEFBQVQ7Ozs7QUFHQSxJQUFNLGNBQWMsU0FBZCxBQUFjLGNBQXVCO1FBQXRCLEFBQXNCLG1GQUFQLEFBQU8sQUFDdkM7O1FBQU0sWUFBWSxBQUFsQixBQUNBO1FBQU0sYUFBYSxBQUFuQixBQUNBO1FBQUksQUFBbUIsQUFBdkIsQUFFQTs7UUFBSSxRQUFRLEFBQVIsSUFBWSxBQUFaLGFBQXlCLEFBQTdCLGNBQTJDLEFBQ3ZDO0FBQW1CLEFBQW5CLEFBQ0g7QUFFRDs7UUFBTSxRQUFRLHdCQUNWLEFBRFUsMkJBRVYsQUFGVSxjQUdWLG1DQUNJLHdDQUFtQixBQUFuQixBQURKLG9CQUVPLEFBRlAsQUFIVSxBQUFkLEFBU0E7O1dBQU8sQUFBUCxBQUNIO0FBbkJELEFBcUJBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImNyZWF0ZVN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=