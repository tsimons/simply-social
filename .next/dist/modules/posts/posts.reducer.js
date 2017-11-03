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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _reduxActions = require('redux-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createActions, _actionHandlers;

var ADD_POST = 'ADD_POST';
var LIKE_POST = 'LIKE_POST';
var REPLY_TO_POST = 'LIKE_POST';
var OPEN_POST_MODAL = 'OPEN_POST_MODAL';
var CLOSE_POST_MODAL = 'CLOSE_POST_MODAL';

var actionConstants = exports.actionConstants = {
    ADD_POST: ADD_POST,
    LIKE_POST: LIKE_POST,
    REPLY_TO_POST: REPLY_TO_POST,
    OPEN_POST_MODAL: OPEN_POST_MODAL,
    CLOSE_POST_MODAL: CLOSE_POST_MODAL
};

var actions = exports.actions = (0, _reduxActions.createActions)((_createActions = {}, (0, _defineProperty3.default)(_createActions, ADD_POST, undefined), (0, _defineProperty3.default)(_createActions, LIKE_POST, function (postId, authorId) {
    return { postId: postId, authorId: authorId };
}), (0, _defineProperty3.default)(_createActions, REPLY_TO_POST, function (postId, message, author) {
    return {
        postId: postId,
        message: message,
        author: author,
        timestamp: Date.now()
    };
}), (0, _defineProperty3.default)(_createActions, OPEN_POST_MODAL, undefined), (0, _defineProperty3.default)(_createActions, CLOSE_POST_MODAL, undefined), _createActions));

var initialState = {
    ui: {},
    data: []
};

var actionHandlers = (_actionHandlers = {}, (0, _defineProperty3.default)(_actionHandlers, ADD_POST, function (state, _ref) {
    var payload = _ref.payload;
    return {
        ui: (0, _extends3.default)({}, state.ui),
        data: [payload].concat((0, _toConsumableArray3.default)(state.data))
    };
}), (0, _defineProperty3.default)(_actionHandlers, LIKE_POST, function (state, _ref2) {
    var payload = _ref2.payload;
    return {
        ui: (0, _extends3.default)({}, state.ui),
        data: state.data.map(function (p) {
            if (p.id === payload.postId) {
                return (0, _extends3.default)({}, p, {
                    likes: [].concat((0, _toConsumableArray3.default)(p.likes), [payload.authorId])
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
}), _actionHandlers);

function postsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var handler = actionHandlers[action.type];

    if (handler) {
        return (0, _freeze2.default)(handler(state, action));
    }

    return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcG9zdHMvcG9zdHMucmVkdWNlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBY3Rpb25zIiwiQUREX1BPU1QiLCJMSUtFX1BPU1QiLCJSRVBMWV9UT19QT1NUIiwiT1BFTl9QT1NUX01PREFMIiwiQ0xPU0VfUE9TVF9NT0RBTCIsImFjdGlvbkNvbnN0YW50cyIsImFjdGlvbnMiLCJ1bmRlZmluZWQiLCJwb3N0SWQiLCJhdXRob3JJZCIsIm1lc3NhZ2UiLCJhdXRob3IiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiaW5pdGlhbFN0YXRlIiwidWkiLCJkYXRhIiwiYWN0aW9uSGFuZGxlcnMiLCJzdGF0ZSIsInBheWxvYWQiLCJtYXAiLCJwIiwiaWQiLCJsaWtlcyIsInJlcGx5IiwicmVwbGllcyIsImlzUG9zdE1vZGFsT3BlbiIsInBvc3RzUmVkdWNlciIsImFjdGlvbiIsImhhbmRsZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7Ozs7QUFFVCxJQUFNLFdBQU4sQUFBaUI7QUFDakIsSUFBTSxZQUFOLEFBQWtCO0FBQ2xCLElBQU0sZ0JBQU4sQUFBc0I7QUFDdEIsSUFBTSxrQkFBTixBQUF3QjtBQUN4QixJQUFNLG1CQUFOLEFBQXlCLEFBRXpCOztBQUFPLElBQU07Y0FBa0IsQUFFM0I7ZUFGMkIsQUFHM0I7bUJBSDJCLEFBSTNCO3FCQUoyQixBQUszQjtzQkFMRyxBQUF3QixBQVEvQjtBQVIrQixBQUMzQjs7QUFPRyxJQUFNLDRCQUFVLHFHQUFBLEFBQ2xCLFVBRGtCLEFBQ1AsMERBRE8sQUFFbEIsV0FBWSxVQUFBLEFBQUMsUUFBRCxBQUFTLFVBQVQ7V0FBdUIsRUFBRSxRQUFGLFFBQVUsVUFBakMsQUFBdUI7QUFGakIsa0RBQUEsQUFHbEIsZUFBZ0IsVUFBQSxBQUFDLFFBQUQsQUFBUyxTQUFULEFBQWtCLFFBQWxCOztnQkFBOEIsQUFFM0M7aUJBRjJDLEFBRzNDO2dCQUgyQyxBQUkzQzttQkFBVyxLQUpFLEFBQThCLEFBSWhDLEFBQUs7QUFKMkIsQUFDM0M7QUFKZSxrREFBQSxBQVNsQixpQkFUa0IsQUFTQSwwREFUQSxBQVVsQixrQkFWa0IsQUFVQyxZQVZqQjs7QUFhUCxJQUFNO1FBQWUsQUFDYixBQUNKO1VBRkosQUFBcUIsQUFFWDtBQUZXLEFBQ2pCOztBQUlKLElBQU0sdUZBQUEsQUFDRCxVQUFXLFVBQUEsQUFBQyxhQUFEO1FBQUEsQUFBVSxlQUFWLEFBQVU7O3VDQUNULE1BRHdCLEFBQ2pDLEFBQWUsQUFDZjtlQUFBLEFBQ0ksaURBQ0csTUFKQyxBQUF5QixBQUVqQyxBQUVhO0FBSm9CLEFBQ2pDO0FBRkYsbURBQUEsQUFTRCxXQUFZLFVBQUEsQUFBQyxjQUFEO1FBQUEsQUFBVSxnQkFBVixBQUFVOzt1Q0FDVixNQUR5QixBQUNsQyxBQUFlLEFBQ2Y7b0JBQU0sQUFBTSxLQUFOLEFBQVcsSUFBSSxVQUFBLEFBQUMsR0FBTSxBQUN4QjtnQkFBSSxFQUFBLEFBQUUsT0FBTyxRQUFiLEFBQXFCLFFBQVEsQUFDekI7a0RBQUEsQUFDTztzRUFFSSxFQURQLEFBQ1MsU0FDTCxRQUpSLEFBRUksQUFFWSxBQUduQjtBQUxPO0FBT1I7OzhDQUFBLEFBQVksQUFDZjtBQWRRLEFBQXlCLEFBRTVCLFNBQUE7QUFGNEIsQUFDbEM7QUFWRixtREFBQSxBQTBCRCxlQUFnQixVQUFBLEFBQUMsY0FBRDtRQUFBLEFBQVUsZ0JBQVYsQUFBVTs7dUNBQ2QsTUFENkIsQUFDdEMsQUFBZSxBQUNmO29CQUFNLEFBQU0sS0FBTixBQUFXLElBQUksVUFBQSxBQUFDLEdBQU0sQUFDeEI7Z0JBQUksRUFBQSxBQUFFLE9BQU8sUUFBYixBQUFxQixRQUFRLEFBQ3pCO29CQUFNOzZCQUNPLFFBREMsQUFDTyxBQUNqQjs0QkFBUSxRQUZFLEFBRU0sQUFDaEI7K0JBQVcsUUFIZixBQUFjLEFBR1MsQUFHdkI7QUFOYyxBQUNWOztrREFLSixBQUNPO3dFQUVJLEVBRFAsQUFDUyxXQUhiLEFBRUksQUFFSSxBQUdYO0FBTE87QUFNUjs4Q0FBQSxBQUFZLEFBQ2Y7QUFuQlksQUFBeUIsQUFFaEMsU0FBQTtBQUZnQyxBQUN0QztBQTNCRixtREFBQSxBQWdERCxpQkFBa0IsVUFBQSxBQUFDLE9BQUQ7O3VDQUVSLE1BRFAsQUFDYTs2QkFGYyxBQUMzQixBQUVxQixBQUVyQjtBQUZJO3lEQUVPLE1BTEksQUFBWSxBQUszQixBQUFpQjtBQUxVLEFBQzNCO0FBakRGLHVFQXdEZ0IsMEJBQUEsQUFBQyxPQUFEOzt1Q0FFUCxNQURQLEFBQ2E7NkJBRmEsQUFDMUIsQUFFcUIsQUFFckI7QUFGSTt5REFFTSxNQUxJLEFBQVksQUFLMUIsQUFBZ0I7QUFMVSxBQUMxQjtBQXpERixJQUFOLEFBaUVBOztBQUFlLFNBQUEsQUFBUyxlQUEyQztRQUE5QixBQUE4Qiw0RUFBdEIsQUFBc0I7UUFBUixBQUFRLG1CQUMvRDs7UUFBTSxVQUFVLGVBQWUsT0FBL0IsQUFBZ0IsQUFBc0IsQUFFdEM7O1FBQUEsQUFBSSxTQUFTLEFBQ1Q7ZUFBTyxzQkFBYyxRQUFBLEFBQVEsT0FBN0IsQUFBTyxBQUFjLEFBQWUsQUFDdkM7QUFFRDs7V0FBQSxBQUFPLEFBQ1YiLCJmaWxlIjoicG9zdHMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVEovcHJvamVjdHMvc2ltcGx5LXNvY2lhbCJ9