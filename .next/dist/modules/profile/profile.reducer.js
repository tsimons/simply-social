'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.actions = exports.actionConstants = undefined;
exports.default = profileReducer;

var _freeze = require('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _reduxActions = require('redux-actions');

var _mockProfiles = require('../../mockProfiles');

var _mockProfiles2 = _interopRequireDefault(_mockProfiles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createActions, _actionHandlers;

var FOLLOW_PROFILE = 'FOLLOW_PROFILE';
var SET_PROFILE_IMG = 'SET_PROFILE_IMG';
var SET_NAME = 'SET_NAME';
var SET_EMAIL = 'SET_EMAIL';

var actionConstants = exports.actionConstants = {
    FOLLOW_PROFILE: FOLLOW_PROFILE,
    SET_PROFILE_IMG: SET_PROFILE_IMG,
    SET_NAME: SET_NAME,
    SET_EMAIL: SET_EMAIL
};

var actions = exports.actions = (0, _reduxActions.createActions)((_createActions = {}, (0, _defineProperty3.default)(_createActions, FOLLOW_PROFILE, function (followerId, foloweeId) {
    return { followerId: followerId, foloweeId: foloweeId };
}), (0, _defineProperty3.default)(_createActions, SET_PROFILE_IMG, undefined), (0, _defineProperty3.default)(_createActions, SET_NAME, undefined), (0, _defineProperty3.default)(_createActions, SET_EMAIL, undefined), _createActions));

var actionHandlers = (_actionHandlers = {}, (0, _defineProperty3.default)(_actionHandlers, SET_PROFILE_IMG, function (state, _ref) {
    var payload = _ref.payload;
    return {
        ui: (0, _extends3.default)({}, state.ui),
        data: state.data.map(function (profile) {
            if (profile.id === payload.profileId) {
                return (0, _extends3.default)({}, profile, {
                    image: payload.image
                });
            }
            return (0, _extends3.default)({}, profile);
        })
    };
}), (0, _defineProperty3.default)(_actionHandlers, SET_NAME, function (state, _ref2) {
    var payload = _ref2.payload;
    return {
        ui: (0, _extends3.default)({}, state.ui),
        data: state.data.map(function (profile) {
            if (profile.id === payload.profileId) {
                return (0, _extends3.default)({}, profile, {
                    name: payload.name
                });
            }
            return (0, _extends3.default)({}, profile);
        })
    };
}), (0, _defineProperty3.default)(_actionHandlers, SET_EMAIL, function (state, _ref3) {
    var payload = _ref3.payload;
    return {
        ui: (0, _extends3.default)({}, state.ui),
        data: state.data.map(function (profile) {
            if (profile.id === payload.profileId) {
                return (0, _extends3.default)({}, profile, {
                    email: payload.email
                });
            }
            return (0, _extends3.default)({}, profile);
        })
    };
}), (0, _defineProperty3.default)(_actionHandlers, FOLLOW_PROFILE, function (state, _ref4) {
    var payload = _ref4.payload;
    return {
        ui: (0, _extends3.default)({}, state.ui),
        data: state.date.map(function (profile) {
            if (profile.id === payload.followeeId) {
                return (0, _extends3.default)({}, profile, {
                    followers: [].concat((0, _toConsumableArray3.default)(profile.followers), [payload.followerId])
                });
            }

            if (profile.id === payload.followerId) {
                return (0, _extends3.default)({}, profile, {
                    following: [].concat((0, _toConsumableArray3.default)(profile.following), [payload.followeeId])
                });
            }

            return (0, _extends3.default)({}, profile);
        })
    };
}), _actionHandlers);

var initialState = {
    ui: {},
    data: _mockProfiles2.default
};
function profileReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var handler = actionHandlers[action.type];

    if (handler) {
        return (0, _freeze2.default)(handler(state, action));
    }

    return state;
}