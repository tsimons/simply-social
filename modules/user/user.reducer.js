import { createActions } from 'redux-actions'

const SET_EMAIL_ON_FAV = 'SET_EMAIL_ON_FAV';
const SET_EMAIL_ON_MENTION = 'SET_EMAIL_ON_MENTION';
const SET_EMAIL_ON_REPLY = 'SET_EMAIL_ON_REPLY';
const SET_EMAIL_ON_FOLLOW = 'SET_EMAIL_ON_FOLLOW';
const SET_FOLLOW_PREFERENCE = 'SET_FOLLOW_PREFERENCE';
const SET_ADD_LOCATION_POST = 'SET_ADD_LOCATION_POST';
const SET_DISCOVERABLE_EMAIL = 'SET_DISCOVERABLE_EMAIL';
const SET_CUSTOM_ADS = 'SET_CUSTOM_ADS';

export const actionConstants = {
    SET_EMAIL_ON_FAV,
    SET_EMAIL_ON_MENTION,
    SET_EMAIL_ON_REPLY,
    SET_EMAIL_ON_FOLLOW,
    SET_FOLLOW_PREFERENCE,
    SET_ADD_LOCATION_POST,
    SET_DISCOVERABLE_EMAIL,
    SET_CUSTOM_ADS
};

export const actions = createActions({
    SET_EMAIL_ON_FAV: undefined,
    SET_EMAIL_ON_MENTION: undefined,
    SET_EMAIL_ON_REPLY: undefined,
    SET_EMAIL_ON_FOLLOW: undefined,
    SET_FOLLOW_PREFERENCE: undefined,
    SET_ADD_LOCATION_POST: undefined,
    SET_DISCOVERABLE_EMAIL: undefined,
    SET_CUSTOM_ADS: undefined
});

const initialState = {
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

const actionHandlers = {
    [SET_EMAIL_ON_FAV]: (state, { payload }) => ({ ui: { ...state.ui }, data: { ...state.data, emailOnFavorite: payload }}),
    [SET_EMAIL_ON_MENTION]: (state, { payload }) => ({ ui: { ...state.ui }, data: { ...state.data, emailOnMention: payload }}),
    [SET_EMAIL_ON_REPLY]: (state, { payload }) => ({ ui: { ...state.ui }, data: { ...state.data, emailOnReply: payload }}),
    [SET_EMAIL_ON_FOLLOW]: (state, { payload }) => ({ ui: { ...state.ui }, data: { ...state.data, emailOnFollow: payload }}),
    [SET_FOLLOW_PREFERENCE]: (state, { payload }) => ({ ui: { ...state.ui }, data: { ...state.data, followPreference: payload }}),
    [SET_ADD_LOCATION_POST]: (state, { payload }) => ({ ui: { ...state.ui }, data: { ...state.data, addLocationToPost: payload }}),
    [SET_DISCOVERABLE_EMAIL]: (state, { payload }) => ({ ui: { ...state.ui }, data: { ...state.data, discoverableByEmail: payload }}),
    [SET_CUSTOM_ADS]: (state, { payload }) => ({ ui: { ...state.ui }, data: { ...state.data, customAds: payload }}),
};

export default function userReducer(state = initialState, action) {
    const handler = actionHandlers[action.type];

    if (handler) {
        return Object.freeze(handler(state, action));
    }

    return state;
}