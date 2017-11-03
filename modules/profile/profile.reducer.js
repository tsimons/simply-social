import { createActions } from 'redux-actions'

export const FOLLOW_PROFILE = 'FOLLOW_PROFILE';

export const actionConstants = {
    FOLLOW_PROFILE
};

export const actions = createActions({
    [FOLLOW_PROFILE]: (followerId, foloweeId) => ({ followerId, foloweeId })
});


const actionHandlers = {
    [FOLLOW_PROFILE] : (state, { payload }) => ({
        ui: { ...state.ui },
        data: state.date.map((profile) => {
            if (profile.id === payload.followeeId) {
                return {
                    ...profile,
                    followerCount: followerCount + 1,
                    followers: [
                        ...profile.followers,
                        payload.followerId
                    ]
                };
            }

            if (profile.id === payload.followerId) {
                return {
                    ...profile,
                    followingCount: followingCount + 1,
                    following: [
                        ...profile.following,
                        payload.followeeId
                    ]
                }
            }

            return { ...profile };
        })
    }
});

const initialState = {
    ui: {},
    data: []
};
export default function profileReducer(state = initialState, action) {
    const handler = actionsHandlers[action.type];

    if (handler) {
        return Object.freeze(handler(state, action));
    }

    return state;
}