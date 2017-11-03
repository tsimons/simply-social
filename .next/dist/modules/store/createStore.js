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