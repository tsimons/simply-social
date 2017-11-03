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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdXNlci91c2VyLnJlZHVjZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlQWN0aW9ucyIsIlNFVF9FTUFJTF9PTl9GQVYiLCJTRVRfRU1BSUxfT05fTUVOVElPTiIsIlNFVF9FTUFJTF9PTl9SRVBMWSIsIlNFVF9FTUFJTF9PTl9GT0xMT1ciLCJTRVRfRk9MTE9XX1BSRUZFUkVOQ0UiLCJTRVRfQUREX0xPQ0FUSU9OX1BPU1QiLCJTRVRfRElTQ09WRVJBQkxFX0VNQUlMIiwiU0VUX0NVU1RPTV9BRFMiLCJhY3Rpb25Db25zdGFudHMiLCJhY3Rpb25zIiwidW5kZWZpbmVkIiwiaW5pdGlhbFN0YXRlIiwidWkiLCJkYXRhIiwicHJvZmlsZUlkIiwiZW1haWxPbkZhdm9yaXRlIiwiZW1haWxPbk1lbnRpb24iLCJlbWFpbE9uUmVwbHkiLCJlbWFpbE9uRm9sbG93IiwiZm9sbG93UHJlZmVyZW5jZSIsImFkZExvY2F0aW9uVG9Qb3N0IiwiZGlzY292ZXJhYmxlQnlFbWFpbCIsImN1c3RvbUFkcyIsImFjdGlvbkhhbmRsZXJzIiwic3RhdGUiLCJwYXlsb2FkIiwidXNlclJlZHVjZXIiLCJhY3Rpb24iLCJoYW5kbGVyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7Ozs7QUFFVCxJQUFNLG1CQUFOLEFBQXlCO0FBQ3pCLElBQU0sdUJBQU4sQUFBNkI7QUFDN0IsSUFBTSxxQkFBTixBQUEyQjtBQUMzQixJQUFNLHNCQUFOLEFBQTRCO0FBQzVCLElBQU0sd0JBQU4sQUFBOEI7QUFDOUIsSUFBTSx3QkFBTixBQUE4QjtBQUM5QixJQUFNLHlCQUFOLEFBQStCO0FBQy9CLElBQU0saUJBQU4sQUFBdUIsQUFFdkI7O0FBQU8sSUFBTTtzQkFBa0IsQUFFM0I7MEJBRjJCLEFBRzNCO3dCQUgyQixBQUkzQjt5QkFKMkIsQUFLM0I7MkJBTDJCLEFBTTNCOzJCQU4yQixBQU8zQjs0QkFQMkIsQUFRM0I7b0JBUkcsQUFBd0Is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