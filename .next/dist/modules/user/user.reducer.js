'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.actions = exports.actionConstants = undefined;
exports.default = userReducer;

var _freeze = require('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reduxActions = require('redux-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _actionHandlers;

var SET_EMAIL_ON_FAV = 'SET_EMAIL_ON_FAV';
var SET_EMAIL_ON_MENTION = 'SET_EMAIL_ON_MENTION';
var SET_EMAIL_ON_REPLY = 'SET_EMAIL_ON_REPLY';
var SET_EMAIL_ON_FOLLOW = 'SET_EMAIL_ON_FOLLOW';
var SET_FOLLOW_PREFERENCE = 'SET_FOLLOW_PREFERENCE';
var SET_ADD_LOCATION_POST = 'SET_ADD_LOCATION_POST';
var SET_DISCOVERABLE_EMAIL = 'SET_DISCOVERABLE_EMAIL';
var SET_CUSTOM_ADS = 'SET_CUSTOM_ADS';

var actionConstants = exports.actionConstants = {
    SET_EMAIL_ON_FAV: SET_EMAIL_ON_FAV,
    SET_EMAIL_ON_MENTION: SET_EMAIL_ON_MENTION,
    SET_EMAIL_ON_REPLY: SET_EMAIL_ON_REPLY,
    SET_EMAIL_ON_FOLLOW: SET_EMAIL_ON_FOLLOW,
    SET_FOLLOW_PREFERENCE: SET_FOLLOW_PREFERENCE,
    SET_ADD_LOCATION_POST: SET_ADD_LOCATION_POST,
    SET_DISCOVERABLE_EMAIL: SET_DISCOVERABLE_EMAIL,
    SET_CUSTOM_ADS: SET_CUSTOM_ADS
};

var actions = exports.actions = (0, _reduxActions.createActions)({
    SET_EMAIL_ON_FAV: undefined,
    SET_EMAIL_ON_MENTION: undefined,
    SET_EMAIL_ON_REPLY: undefined,
    SET_EMAIL_ON_FOLLOW: undefined,
    SET_FOLLOW_PREFERENCE: undefined,
    SET_ADD_LOCATION_POST: undefined,
    SET_DISCOVERABLE_EMAIL: undefined,
    SET_CUSTOM_ADS: undefined
});

var initialState = {
    ui: {},
    data: {
        profileId: 123,
        emailOnFavorite: true,
        emailOnMention: true,
        emailOnReply: true,
        emailOnFollow: false,
        followPreference: 'anyone',
        addLocationToPost: true,
        discoverableByEmail: true,
        customAds: true
    }
};

var actionHandlers = (_actionHandlers = {}, (0, _defineProperty3.default)(_actionHandlers, SET_EMAIL_ON_FAV, function (state, _ref) {
    var payload = _ref.payload;
    return { ui: (0, _extends3.default)({}, state.ui), data: (0, _extends3.default)({}, state.data, { emailOnFavorite: payload }) };
}), (0, _defineProperty3.default)(_actionHandlers, SET_EMAIL_ON_MENTION, function (state, _ref2) {
    var payload = _ref2.payload;
    return { ui: (0, _extends3.default)({}, state.ui), data: (0, _extends3.default)({}, state.data, { emailOnMention: payload }) };
}), (0, _defineProperty3.default)(_actionHandlers, SET_EMAIL_ON_REPLY, function (state, _ref3) {
    var payload = _ref3.payload;
    return { ui: (0, _extends3.default)({}, state.ui), data: (0, _extends3.default)({}, state.data, { emailOnReply: payload }) };
}), (0, _defineProperty3.default)(_actionHandlers, SET_EMAIL_ON_FOLLOW, function (state, _ref4) {
    var payload = _ref4.payload;
    return { ui: (0, _extends3.default)({}, state.ui), data: (0, _extends3.default)({}, state.data, { emailOnFollow: payload }) };
}), (0, _defineProperty3.default)(_actionHandlers, SET_FOLLOW_PREFERENCE, function (state, _ref5) {
    var payload = _ref5.payload;
    return { ui: (0, _extends3.default)({}, state.ui), data: (0, _extends3.default)({}, state.data, { followPreference: payload }) };
}), (0, _defineProperty3.default)(_actionHandlers, SET_ADD_LOCATION_POST, function (state, _ref6) {
    var payload = _ref6.payload;
    return { ui: (0, _extends3.default)({}, state.ui), data: (0, _extends3.default)({}, state.data, { addLocationToPost: payload }) };
}), (0, _defineProperty3.default)(_actionHandlers, SET_DISCOVERABLE_EMAIL, function (state, _ref7) {
    var payload = _ref7.payload;
    return { ui: (0, _extends3.default)({}, state.ui), data: (0, _extends3.default)({}, state.data, { discoverableByEmail: payload }) };
}), (0, _defineProperty3.default)(_actionHandlers, SET_CUSTOM_ADS, function (state, _ref8) {
    var payload = _ref8.payload;
    return { ui: (0, _extends3.default)({}, state.ui), data: (0, _extends3.default)({}, state.data, { customAds: payload }) };
}), _actionHandlers);

function userReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var handler = actionHandlers[action.type];

    if (handler) {
        return (0, _freeze2.default)(handler(state, action));
    }

    return state;
}