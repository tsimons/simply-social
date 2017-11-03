'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.actions = exports.actionConstants = undefined;
exports.default = postsReducer;

var _freeze = require('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reduxActions = require('redux-actions');

var _mockPosts = require('../../mockPosts');

var _mockPosts2 = _interopRequireDefault(_mockPosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createActions, _actionHandlers;

var ADD_POST = 'ADD_POST';
var LIKE_POST = 'LIKE_POST';
var REPLY_TO_POST = 'REPLY_TO_POST';
var OPEN_POST_MODAL = 'OPEN_POST_MODAL';
var CLOSE_POST_MODAL = 'CLOSE_POST_MODAL';
var SET_POST_LAYOUT = 'SET_POST_LAYOUT';
var FOCUS_POST = 'FOCUS_POST';
var BLUR_POST = 'BLUR_POST';

var id = _mockPosts2.default.length;

var actionConstants = exports.actionConstants = {
    ADD_POST: ADD_POST,
    LIKE_POST: LIKE_POST,
    REPLY_TO_POST: REPLY_TO_POST,
    OPEN_POST_MODAL: OPEN_POST_MODAL,
    CLOSE_POST_MODAL: CLOSE_POST_MODAL,
    SET_POST_LAYOUT: SET_POST_LAYOUT,
    FOCUS_POST: FOCUS_POST,
    BLUR_POST: BLUR_POST
};

var actions = exports.actions = (0, _reduxActions.createActions)((_createActions = {}, (0, _defineProperty3.default)(_createActions, ADD_POST, function (post) {
    return (0, _extends3.default)({}, post, {
        timestamp: Date.now(),
        likes: [],
        replies: [],
        location: '',
        id: id += 1 // assignment to an existing var will return the value assigned
    });
}), (0, _defineProperty3.default)(_createActions, LIKE_POST, function (postId, userId) {
    return { postId: postId, userId: userId };
}), (0, _defineProperty3.default)(_createActions, REPLY_TO_POST, function (postId, message, author) {
    return {
        postId: postId,
        message: message,
        author: author,
        timestamp: Date.now()
    };
}), (0, _defineProperty3.default)(_createActions, OPEN_POST_MODAL, undefined), (0, _defineProperty3.default)(_createActions, CLOSE_POST_MODAL, undefined), (0, _defineProperty3.default)(_createActions, SET_POST_LAYOUT, undefined), (0, _defineProperty3.default)(_createActions, FOCUS_POST, undefined), (0, _defineProperty3.default)(_createActions, BLUR_POST, undefined), _createActions));

var actionHandlers = (_actionHandlers = {}, (0, _defineProperty3.default)(_actionHandlers, ADD_POST, function (state, _ref) {
    var payload = _ref.payload;
    return {
        ui: (0, _extends3.default)({}, state.ui, {
            isPostModalOpen: false
        }),
        data: [payload].concat((0, _toConsumableArray3.default)(state.data))
    };
}), (0, _defineProperty3.default)(_actionHandlers, LIKE_POST, function (state, _ref2) {
    var payload = _ref2.payload;
    return {
        ui: (0, _extends3.default)({}, state.ui),
        data: state.data.map(function (p) {
            if (p.id === payload.postId) {
                var index = p.likes.indexOf(payload.userId);
                if (index > -1) {
                    return (0, _extends3.default)({}, p, {
                        likes: [].concat((0, _toConsumableArray3.default)(p.likes.slice(0, index)), (0, _toConsumableArray3.default)(p.likes.slice(index + 1)))
                    });
                }

                return (0, _extends3.default)({}, p, {
                    likes: [].concat((0, _toConsumableArray3.default)(p.likes), [payload.userId])
                });
            }

            return (0, _extends3.default)({}, p);
        })
    };
}), (0, _defineProperty3.default)(_actionHandlers, REPLY_TO_POST, function (state, _ref3) {
    var payload = _ref3.payload;
    return {
        ui: (0, _extends3.default)({}, state.ui),
        data: state.data.map(function (p) {
            if (p.id === payload.postId) {
                var reply = {
                    message: payload.message,
                    author: payload.authorId,
                    timestamp: payload.timestamp
                };

                return (0, _extends3.default)({}, p, {
                    replies: [].concat((0, _toConsumableArray3.default)(p.replies), [reply])
                });
            }
            return (0, _extends3.default)({}, p);
        })
    };
}), (0, _defineProperty3.default)(_actionHandlers, OPEN_POST_MODAL, function (state) {
    return {
        ui: (0, _extends3.default)({}, state.ui, {
            isPostModalOpen: true
        }),
        data: [].concat((0, _toConsumableArray3.default)(state.data))
    };
}), (0, _defineProperty3.default)(_actionHandlers, 'CLOSE_POST_MODAL', function CLOSE_POST_MODAL(state) {
    return {
        ui: (0, _extends3.default)({}, state.ui, {
            isPostModalOpen: false
        }),
        data: [].concat((0, _toConsumableArray3.default)(state.data))
    };
}), (0, _defineProperty3.default)(_actionHandlers, SET_POST_LAYOUT, function (state, _ref4) {
    var payload = _ref4.payload;
    return {
        ui: (0, _extends3.default)({}, state.ui, {
            layout: payload
        }),
        data: [].concat((0, _toConsumableArray3.default)(state.data))
    };
}), (0, _defineProperty3.default)(_actionHandlers, FOCUS_POST, function (state, _ref5) {
    var payload = _ref5.payload;
    return {
        ui: (0, _extends3.default)({}, state.ui, {
            focusedPost: payload
        }),
        data: [].concat((0, _toConsumableArray3.default)(state.data))
    };
}), (0, _defineProperty3.default)(_actionHandlers, BLUR_POST, function (state) {
    return {
        ui: (0, _extends3.default)({}, state.ui, {
            focusedPost: null
        }),
        data: [].concat((0, _toConsumableArray3.default)(state.data))
    };
}), _actionHandlers);

var initialState = {
    ui: {
        layout: 'list'
    },
    data: _mockPosts2.default
};

function postsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var handler = actionHandlers[action.type];

    if (handler) {
        return (0, _freeze2.default)(handler(state, action));
    }

    return state;
}