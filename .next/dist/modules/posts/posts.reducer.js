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
var REPLY_TO_POST = 'LIKE_POST';
var OPEN_POST_MODAL = 'OPEN_POST_MODAL';
var CLOSE_POST_MODAL = 'CLOSE_POST_MODAL';
var SET_POST_LAYOUT = 'SET_POST_LAYOUT';

var id = _mockPosts2.default.length;

var actionConstants = exports.actionConstants = {
    ADD_POST: ADD_POST,
    LIKE_POST: LIKE_POST,
    REPLY_TO_POST: REPLY_TO_POST,
    OPEN_POST_MODAL: OPEN_POST_MODAL,
    CLOSE_POST_MODAL: CLOSE_POST_MODAL,
    SET_POST_LAYOUT: SET_POST_LAYOUT
};

var actions = exports.actions = (0, _reduxActions.createActions)((_createActions = {}, (0, _defineProperty3.default)(_createActions, ADD_POST, function (post) {
    return (0, _extends3.default)({}, post, {
        timestamp: Date.now(),
        likes: [],
        replies: [],
        location: '',
        id: id += 1 // assignment to an existing var will return the value assigned
    });
}), (0, _defineProperty3.default)(_createActions, LIKE_POST, function (postId, authorId) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcG9zdHMvcG9zdHMucmVkdWNlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBY3Rpb25zIiwicG9zdHMiLCJBRERfUE9TVCIsIkxJS0VfUE9TVCIsIlJFUExZX1RPX1BPU1QiLCJPUEVOX1BPU1RfTU9EQUwiLCJDTE9TRV9QT1NUX01PREFMIiwiU0VUX1BPU1RfTEFZT1VUIiwiaWQiLCJsZW5ndGgiLCJhY3Rpb25Db25zdGFudHMiLCJhY3Rpb25zIiwicG9zdCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJsaWtlcyIsInJlcGxpZXMiLCJsb2NhdGlvbiIsInBvc3RJZCIsImF1dGhvcklkIiwibWVzc2FnZSIsImF1dGhvciIsInVuZGVmaW5lZCIsImFjdGlvbkhhbmRsZXJzIiwic3RhdGUiLCJwYXlsb2FkIiwidWkiLCJpc1Bvc3RNb2RhbE9wZW4iLCJkYXRhIiwibWFwIiwicCIsInJlcGx5IiwibGF5b3V0IiwiaW5pdGlhbFN0YXRlIiwicG9zdHNSZWR1Y2VyIiwiYWN0aW9uIiwiaGFuZGxlciIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBTyxBQUFXOzs7Ozs7OztBQUVsQixJQUFNLFdBQU4sQUFBaUI7QUFDakIsSUFBTSxZQUFOLEFBQWtCO0FBQ2xCLElBQU0sZ0JBQU4sQUFBc0I7QUFDdEIsSUFBTSxrQkFBTixBQUF3QjtBQUN4QixJQUFNLG1CQUFOLEFBQXlCO0FBQ3pCLElBQU0sa0JBQU4sQUFBd0I7O0FBRXhCLElBQUksS0FBSyxvQkFBVCxBQUFlLEFBRWY7O0FBQU8sSUFBTTtjQUFrQixBQUUzQjtlQUYyQixBQUczQjttQkFIMkIsQUFJM0I7cUJBSjJCLEFBSzNCO3NCQUwyQixBQU0zQjtxQkFORyxBQUF3QixBQVMvQjtBQVQrQixBQUMzQjs7QUFRRyxJQUFNLDRCQUFVLHFHQUFBLEFBQ2xCLFVBQVcsVUFBQSxBQUFDLE1BQUQ7c0NBQUEsQUFDTDttQkFDUSxLQUZILEFBRUcsQUFBSyxBQUNoQjtlQUhRLEFBR0QsQUFDUDtpQkFKUSxBQUlDLEFBQ1Q7a0JBTFEsQUFLRSxBQUNWO1lBQUksTUFOSSxBQU1FLEVBTkYsQUFNSTtBQUpaO0FBSGUsa0RBQUEsQUFTbEIsV0FBWSxVQUFBLEFBQUMsUUFBRCxBQUFTLFVBQVQ7V0FBdUIsRUFBRSxRQUFGLFFBQVUsVUFBakMsQUFBdUI7QUFUakIsa0RBQUEsQUFVbEIsZUFBZ0IsVUFBQSxBQUFDLFFBQUQsQUFBUyxTQUFULEFBQWtCLFFBQWxCOztnQkFBOEIsQUFFM0M7aUJBRjJDLEFBRzNDO2dCQUgyQyxBQUkzQzttQkFBVyxLQUpFLEFBQThCLEFBSWhDLEFBQUs7QUFKMkIsQUFDM0M7QUFYZSxrREFBQSxBQWdCbEIsaUJBaEJrQixBQWdCQSwwREFoQkEsQUFpQmxCLGtCQWpCa0IsQUFpQkMsMERBakJELEFBa0JsQixpQkFsQmtCLEFBa0JBLFlBbEJoQjs7QUFxQlAsSUFBTSx1RkFBQSxBQUNELFVBQVcsVUFBQSxBQUFDLGFBQUQ7UUFBQSxBQUFVLGVBQVYsQUFBVTs7dUNBRVgsTUFEUCxBQUNhOzZCQUZvQixBQUNqQyxBQUVxQixBQUVyQjtBQUZJO2VBRUosQUFDSSxpREFDRyxNQVBDLEFBQXlCLEFBS2pDLEFBRWE7QUFQb0IsQUFDakM7QUFGRixtREFBQSxBQVlELFdBQVksVUFBQSxBQUFDLGNBQUQ7UUFBQSxBQUFVLGdCQUFWLEFBQVU7O3VDQUNWLE1BRHlCLEFBQ2xDLEFBQWUsQUFDZjtvQkFBTSxBQUFNLEtBQU4sQUFBVyxJQUFJLFVBQUEsQUFBQyxHQUFNLEFBQ3hCO2dCQUFJLEVBQUEsQUFBRSxPQUFPLFFBQWIsQUFBcUIsUUFBUSxBQUN6QjtrREFBQSxBQUNPO3NFQUVJLEVBRFAsQUFDUyxTQUNMLFFBSlIsQUFFSSxBQUVZLEFBR25CO0FBTE87QUFPUjs7OENBQUEsQUFBWSxBQUNmO0FBZFEsQUFBeUIsQUFFNUIsU0FBQTtBQUY0QixBQUNsQztBQWJGLG1EQUFBLEFBNkJELGVBQWdCLFVBQUEsQUFBQyxjQUFEO1FBQUEsQUFBVSxnQkFBVixBQUFVOzt1Q0FDZCxNQUQ2QixBQUN0QyxBQUFlLEFBQ2Y7b0JBQU0sQUFBTSxLQUFOLEFBQVcsSUFBSSxVQUFBLEFBQUMsR0FBTSxBQUN4QjtnQkFBSSxFQUFBLEFBQUUsT0FBTyxRQUFiLEFBQXFCLFFBQVEsQUFDekI7b0JBQU07NkJBQ08sUUFEQyxBQUNPLEFBQ2pCOzRCQUFRLFFBRkUsQUFFTSxBQUNoQjsrQkFBVyxRQUhmLEFBQWMsQUFHUyxBQUd2QjtBQU5jLEFBQ1Y7O2tEQUtKLEFBQ087d0VBRUksRUFEUCxBQUNTLFdBSGIsQUFFSSxBQUVJLEFBR1g7QUFMTztBQU1SOzhDQUFBLEFBQVksQUFDZjtBQW5CWSxBQUF5QixBQUVoQyxTQUFBO0FBRmdDLEFBQ3RDO0FBOUJGLG1EQUFBLEFBbURELGlCQUFrQixVQUFBLEFBQUMsT0FBRDs7dUNBRVIsTUFEUCxBQUNhOzZCQUZjLEFBQzNCLEFBRXFCLEFBRXJCO0FBRkk7eURBRU8sTUFMSSxBQUFZLEFBSzNCLEFBQWlCO0FBTFUsQUFDM0I7QUFwREYsdUVBMkRnQiwwQkFBQSxBQUFDLE9BQUQ7O3VDQUVQLE1BRFAsQUFDYTs2QkFGYSxBQUMxQixBQUVxQixBQUVyQjtBQUZJO3lEQUVNLE1BTEksQUFBWSxBQUsxQixBQUFnQjtBQUxVLEFBQzFCO0FBNURGLG1EQUFBLEFBa0VELGlCQUFrQixVQUFBLEFBQUMsY0FBRDtRQUFBLEFBQVUsZ0JBQVYsQUFBVTs7dUNBRWxCLE1BRFAsQUFDYTtvQkFGMkIsQUFDeEMsQUFFWSxBQUVaO0FBRkk7eURBRU8sTUFMSSxBQUF5QixBQUt4QyxBQUFpQjtBQUx1QixBQUN4QztBQW5FRixJQUFOOztBQTJFQSxJQUFNOztnQkFBZSxBQUNiLEFBQ1EsQUFFWjtBQUhJLEFBQ0E7QUFGUixBQUFxQixBQUlYLEFBR1Y7QUFQcUIsQUFDakI7O0FBTVcsU0FBQSxBQUFTLGVBQTJDO1FBQTlCLEFBQThCLDRFQUF0QixBQUFzQjtRQUFSLEFBQVEsbUJBQy9EOztRQUFNLFVBQVUsZUFBZSxPQUEvQixBQUFnQixBQUFzQixBQUV0Qzs7UUFBQSxBQUFJLFNBQVMsQUFDVDtlQUFPLHNCQUFjLFFBQUEsQUFBUSxPQUE3QixBQUFPLEFBQWMsQUFBZSxBQUN2QztBQUVEOztXQUFBLEFBQU8sQUFDViIsImZpbGUiOiJwb3N0cy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9USi9wcm9qZWN0cy9zaW1wbHktc29jaWFsIn0=