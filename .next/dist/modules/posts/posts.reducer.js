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

var _mockPosts = require('../../mockPosts');

var _mockPosts2 = _interopRequireDefault(_mockPosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createActions, _actionHandlers;

var ADD_POST = 'ADD_POST';
var LIKE_POST = 'LIKE_POST';
var REPLY_TO_POST = 'LIKE_POST';
var OPEN_POST_MODAL = 'OPEN_POST_MODAL';
var CLOSE_POST_MODAL = 'CLOSE_POST_MODAL';
var SET_POST_LAYOUT = 'SET_POST_LAYOUT';

var actionConstants = exports.actionConstants = {
    ADD_POST: ADD_POST,
    LIKE_POST: LIKE_POST,
    REPLY_TO_POST: REPLY_TO_POST,
    OPEN_POST_MODAL: OPEN_POST_MODAL,
    CLOSE_POST_MODAL: CLOSE_POST_MODAL,
    SET_POST_LAYOUT: SET_POST_LAYOUT
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
}), (0, _defineProperty3.default)(_createActions, OPEN_POST_MODAL, undefined), (0, _defineProperty3.default)(_createActions, CLOSE_POST_MODAL, undefined), (0, _defineProperty3.default)(_createActions, SET_POST_LAYOUT, undefined), _createActions));

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
}), (0, _defineProperty3.default)(_actionHandlers, SET_POST_LAYOUT, function (state, _ref4) {
    var payload = _ref4.payload;
    return {
        ui: (0, _extends3.default)({}, state.ui, {
            layout: payload
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcG9zdHMvcG9zdHMucmVkdWNlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBY3Rpb25zIiwicG9zdHMiLCJBRERfUE9TVCIsIkxJS0VfUE9TVCIsIlJFUExZX1RPX1BPU1QiLCJPUEVOX1BPU1RfTU9EQUwiLCJDTE9TRV9QT1NUX01PREFMIiwiU0VUX1BPU1RfTEFZT1VUIiwiYWN0aW9uQ29uc3RhbnRzIiwiYWN0aW9ucyIsInVuZGVmaW5lZCIsInBvc3RJZCIsImF1dGhvcklkIiwibWVzc2FnZSIsImF1dGhvciIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJhY3Rpb25IYW5kbGVycyIsInN0YXRlIiwicGF5bG9hZCIsInVpIiwiZGF0YSIsIm1hcCIsInAiLCJpZCIsImxpa2VzIiwicmVwbHkiLCJyZXBsaWVzIiwiaXNQb3N0TW9kYWxPcGVuIiwibGF5b3V0IiwiaW5pdGlhbFN0YXRlIiwicG9zdHNSZWR1Y2VyIiwiYWN0aW9uIiwiaGFuZGxlciIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBTyxBQUFXOzs7Ozs7OztBQUVsQixJQUFNLFdBQU4sQUFBaUI7QUFDakIsSUFBTSxZQUFOLEFBQWtCO0FBQ2xCLElBQU0sZ0JBQU4sQUFBc0I7QUFDdEIsSUFBTSxrQkFBTixBQUF3QjtBQUN4QixJQUFNLG1CQUFOLEFBQXlCO0FBQ3pCLElBQU0sa0JBQU4sQUFBd0IsQUFFeEI7O0FBQU8sSUFBTTtjQUFrQixBQUUzQjtlQUYyQixBQUczQjttQkFIMkIsQUFJM0I7cUJBSjJCLEFBSzNCO3NCQUwyQixBQU0zQjtxQkFORyxBQUF3QixBQVMvQjtBQVQrQixBQUMzQjs7QUFRRyxJQUFNLDRCQUFVLHFHQUFBLEFBQ2xCLFVBRGtCLEFBQ1AsMERBRE8sQUFFbEIsV0FBWSxVQUFBLEFBQUMsUUFBRCxBQUFTLFVBQVQ7V0FBdUIsRUFBRSxRQUFGLFFBQVUsVUFBakMsQUFBdUI7QUFGakIsa0RBQUEsQUFHbEIsZUFBZ0IsVUFBQSxBQUFDLFFBQUQsQUFBUyxTQUFULEFBQWtCLFFBQWxCOztnQkFBOEIsQUFFM0M7aUJBRjJDLEFBRzNDO2dCQUgyQyxBQUkzQzttQkFBVyxLQUpFLEFBQThCLEFBSWhDLEFBQUs7QUFKMkIsQUFDM0M7QUFKZSxrREFBQSxBQVNsQixpQkFUa0IsQUFTQSwwREFUQSxBQVVsQixrQkFWa0IsQUFVQywwREFWRCxBQVdsQixpQkFYa0IsQUFXQSxZQVhoQjs7QUFjUCxJQUFNLHVGQUFBLEFBQ0QsVUFBVyxVQUFBLEFBQUMsYUFBRDtRQUFBLEFBQVUsZUFBVixBQUFVOzt1Q0FDVCxNQUR3QixBQUNqQyxBQUFlLEFBQ2Y7ZUFBQSxBQUNJLGlEQUNHLE1BSkMsQUFBeUIsQUFFakMsQUFFYTtBQUpvQixBQUNqQztBQUZGLG1EQUFBLEFBU0QsV0FBWSxVQUFBLEFBQUMsY0FBRDtRQUFBLEFBQVUsZ0JBQVYsQUFBVTs7dUNBQ1YsTUFEeUIsQUFDbEMsQUFBZSxBQUNmO29CQUFNLEFBQU0sS0FBTixBQUFXLElBQUksVUFBQSxBQUFDLEdBQU0sQUFDeEI7Z0JBQUksRUFBQSxBQUFFLE9BQU8sUUFBYixBQUFxQixRQUFRLEFBQ3pCO2tEQUFBLEFBQ087c0VBRUksRUFEUCxBQUNTLFNBQ0wsUUFKUixBQUVJLEFBRVksQUFHbkI7QUFMTztBQU9SOzs4Q0FBQSxBQUFZLEFBQ2Y7QUFkUSxBQUF5QixBQUU1QixTQUFBO0FBRjRCLEFBQ2xDO0FBVkYsbURBQUEsQUEwQkQsZUFBZ0IsVUFBQSxBQUFDLGNBQUQ7UUFBQSxBQUFVLGdCQUFWLEFBQVU7O3VDQUNkLE1BRDZCLEFBQ3RDLEFBQWUsQUFDZjtvQkFBTSxBQUFNLEtBQU4sQUFBVyxJQUFJLFVBQUEsQUFBQyxHQUFNLEFBQ3hCO2dCQUFJLEVBQUEsQUFBRSxPQUFPLFFBQWIsQUFBcUIsUUFBUSxBQUN6QjtvQkFBTTs2QkFDTyxRQURDLEFBQ08sQUFDakI7NEJBQVEsUUFGRSxBQUVNLEFBQ2hCOytCQUFXLFFBSGYsQUFBYyxBQUdTLEFBR3ZCO0FBTmMsQUFDVjs7a0RBS0osQUFDTzt3RUFFSSxFQURQLEFBQ1MsV0FIYixBQUVJLEFBRUksQUFHWDtBQUxPO0FBTVI7OENBQUEsQUFBWSxBQUNmO0FBbkJZLEFBQXlCLEFBRWhDLFNBQUE7QUFGZ0MsQUFDdEM7QUEzQkYsbURBQUEsQUFnREQsaUJBQWtCLFVBQUEsQUFBQyxPQUFEOzt1Q0FFUixNQURQLEFBQ2E7NkJBRmMsQUFDM0IsQUFFcUIsQUFFckI7QUFGSTt5REFFTyxNQUxJLEFBQVksQUFLM0IsQUFBaUI7QUFMVSxBQUMzQjtBQWpERix1RUF3RGdCLDBCQUFBLEFBQUMsT0FBRDs7dUNBRVAsTUFEUCxBQUNhOzZCQUZhLEFBQzFCLEFBRXFCLEFBRXJCO0FBRkk7eURBRU0sTUFMSSxBQUFZLEFBSzFCLEFBQWdCO0FBTFUsQUFDMUI7QUF6REYsbURBQUEsQUErREQsaUJBQWtCLFVBQUEsQUFBQyxjQUFEO1FBQUEsQUFBVSxnQkFBVixBQUFVOzt1Q0FFbEIsTUFEUCxBQUNhO29CQUYyQixBQUN4QyxBQUVZLEFBRVo7QUFGSTt5REFFTyxNQUxJLEFBQXlCLEFBS3hDLEFBQWlCO0FBTHVCLEFBQ3hDO0FBaEVGLElBQU47O0FBd0VBLElBQU07O2dCQUFlLEFBQ2IsQUFDUSxBQUVaO0FBSEksQUFDQTtBQUZSLEFBQXFCLEFBSVgsQUFHVjtBQVBxQixBQUNqQjs7QUFNVyxTQUFBLEFBQVMsZUFBMkM7UUFBOUIsQUFBOEIsNEVBQXRCLEFBQXNCO1FBQVIsQUFBUSxtQkFDL0Q7O1FBQU0sVUFBVSxlQUFlLE9BQS9CLEFBQWdCLEFBQXNCLEFBRXRDOztRQUFBLEFBQUksU0FBUyxBQUNUO2VBQU8sc0JBQWMsUUFBQSxBQUFRLE9BQTdCLEFBQU8sQUFBYyxBQUFlLEFBQ3ZDO0FBRUQ7O1dBQUEsQUFBTyxBQUNWIiwiZmlsZSI6InBvc3RzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1RKL3Byb2plY3RzL3NpbXBseS1zb2NpYWwifQ==