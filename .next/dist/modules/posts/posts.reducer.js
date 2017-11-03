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
                    author: payload.author,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcG9zdHMvcG9zdHMucmVkdWNlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBY3Rpb25zIiwicG9zdHMiLCJBRERfUE9TVCIsIkxJS0VfUE9TVCIsIlJFUExZX1RPX1BPU1QiLCJPUEVOX1BPU1RfTU9EQUwiLCJDTE9TRV9QT1NUX01PREFMIiwiU0VUX1BPU1RfTEFZT1VUIiwiRk9DVVNfUE9TVCIsIkJMVVJfUE9TVCIsImlkIiwibGVuZ3RoIiwiYWN0aW9uQ29uc3RhbnRzIiwiYWN0aW9ucyIsInBvc3QiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwibGlrZXMiLCJyZXBsaWVzIiwibG9jYXRpb24iLCJwb3N0SWQiLCJ1c2VySWQiLCJtZXNzYWdlIiwiYXV0aG9yIiwidW5kZWZpbmVkIiwiYWN0aW9uSGFuZGxlcnMiLCJzdGF0ZSIsInBheWxvYWQiLCJ1aSIsImlzUG9zdE1vZGFsT3BlbiIsImRhdGEiLCJtYXAiLCJwIiwiaW5kZXgiLCJpbmRleE9mIiwic2xpY2UiLCJyZXBseSIsImxheW91dCIsImZvY3VzZWRQb3N0IiwiaW5pdGlhbFN0YXRlIiwicG9zdHNSZWR1Y2VyIiwiYWN0aW9uIiwiaGFuZGxlciIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBTyxBQUFXOzs7Ozs7OztBQUVsQixJQUFNLFdBQU4sQUFBaUI7QUFDakIsSUFBTSxZQUFOLEFBQWtCO0FBQ2xCLElBQU0sZ0JBQU4sQUFBc0I7QUFDdEIsSUFBTSxrQkFBTixBQUF3QjtBQUN4QixJQUFNLG1CQUFOLEFBQXlCO0FBQ3pCLElBQU0sa0JBQU4sQUFBd0I7QUFDeEIsSUFBTSxhQUFOLEFBQW1CO0FBQ25CLElBQU0sWUFBTixBQUFrQjs7QUFFbEIsSUFBSSxLQUFLLG9CQUFULEFBQWUsQUFFZjs7QUFBTyxJQUFNO2NBQWtCLEFBRTNCO2VBRjJCLEFBRzNCO21CQUgyQixBQUkzQjtxQkFKMkIsQUFLM0I7c0JBTDJC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dUNBRVAsTUFEUCxBQUNhOzZCQUZhLEFBQzFCLEFBRXFCLEFBRXJCO0FBRkk7eURBRU0sTUFMSSxBQUFZLEFBSzFCLEFBQWdCO0FBTFUsQUFDMUI7QUF2RUYsbURBQUEsQUE2RUQsaUJBQWtCLFVBQUEsQUFBQyxjQUFEO1FBQUEsQUFBVSxnQkFBVixBQUFVOzt1Q0FFbEIsTUFEUCxBQUNhO29CQUYyQixBQUN4QyxBQUVZLEFBRVo7QUFGSTt5REFFTyxNQUxJLEFBQXlCLEFBS3hDLEFBQWlCO0FBTHVCLEFBQ3hDO0FBOUVGLG1EQUFBLEFBb0ZELFlBQWEsVUFBQSxBQUFDLGNBQUQ7UUFBQSxBQUFVLGdCQUFWLEFBQVU7O3VDQUViLE1BRFAsQUFDYTt5QkFGc0IsQUFDbkMsQUFFaUIsQUFFakI7QUFGSTt5REFFTyxNQUxELEFBQXlCLEFBS25DLEFBQWlCO0FBTGtCLEFBQ25DO0FBckZGLG1EQUFBLEFBMkZELFdBQVksVUFBQSxBQUFDLE9BQUQ7O3VDQUVGLE1BRFAsQUFDYTt5QkFGUSxBQUNyQixBQUVpQixBQUVqQjtBQUZJO3lEQUVPLE1BTEYsQUFBWSxBQUtyQixBQUFpQjtBQUxJLEFBQ3JCO0FBNUZGLElBQU47O0FBb0dBLElBQU07O2dCQUFlLEFBQ2IsQUFDUSxBQUVaO0FBSEksQUFDQTtBQUZSLEFBQXFCLEFBSVgsQUFHVjtBQVBxQixBQUNqQjs7QUFNVyxTQUFBLEFBQVMsZUFBMkM7UUFBOUIsQUFBOEIsNEVBQXRCLEFBQXNCO1FBQVIsQUFBUSxtQkFDL0Q7O1FBQU0sVUFBVSxlQUFlLE9BQS9CLEFBQWdCLEFBQXNCLEFBRXRDOztRQUFBLEFBQUksU0FBUyxBQUNUO2VBQU8sc0JBQWMsUUFBQSxBQUFRLE9BQTdCLEFBQU8sQUFBYyxBQUFlLEFBQ3ZDO0FBRUQ7O1dBQUEsQUFBTyxBQUNWIiwiZmlsZSI6InBvc3RzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==