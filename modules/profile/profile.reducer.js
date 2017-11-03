import { createActions } from 'redux-actions'
import mockProfiles from '../../mockProfiles';

const FOLLOW_PROFILE = 'FOLLOW_PROFILE';
const SET_PROFILE_IMG = 'SET_PROFILE_IMG';
const SET_NAME = 'SET_NAME';
const SET_EMAIL = 'SET_EMAIL';

export const actionConstants = {
    FOLLOW_PROFILE,
    SET_PROFILE_IMG,
    SET_NAME,
    SET_EMAIL
};

export const actions = createActions({
    [FOLLOW_PROFILE]: (followerId, foloweeId) => ({ followerId, foloweeId }),
    [SET_PROFILE_IMG]: undefined,
    [SET_NAME]: undefined,
    [SET_EMAIL]: undefined
});


const actionHandlers = {
    [SET_PROFILE_IMG]: (state, { payload }) => ({
        ui: { ...state.ui },
        data: state.data.map((profile) => {
            if (profile.id === payload.profileId) {
                return {
                    ...profile,
                    image: payload.image
                }
            }
            return { ...profile };
        })
    }),
    [SET_NAME]: (state, { payload }) => ({
        ui: { ...state.ui },
        data: state.data.map((profile) => {
            if (profile.id === payload.profileId) {
                return {
                    ...profile,
                    name: payload.name
                }
            }
            return { ...profile };
        })
    }),
    [SET_EMAIL]: (state, { payload }) => ({
        ui: { ...state.ui },
        data: state.data.map((profile) => {
            if (profile.id === payload.profileId) {
                return {
                    ...profile,
                    email: payload.email
                }
            }
            return { ...profile };
        })
    }),
    [FOLLOW_PROFILE] : (state, { payload }) => ({
        ui: { ...state.ui },
        data: state.date.map((profile) => {
            if (profile.id === payload.followeeId) {
                return {
                    ...profile,
                    followers: [
                        ...profile.followers,
                        payload.followerId
                    ]
                };
            }

            if (profile.id === payload.followerId) {
                return {
                    ...profile,
                    following: [
                        ...profile.following,
                        payload.followeeId
                    ]
                }
            }

            return { ...profile };
        })
    })
};

const initialState = {
    ui: {},
    data: mockProfiles
};
export default function profileReducer(state = initialState, action) {
    const handler = actionHandlers[action.type];

    if (handler) {
        return Object.freeze(handler(state, action));
    }

    return state;
}