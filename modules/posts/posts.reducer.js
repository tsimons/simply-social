import { createActions } from 'redux-actions'
import posts from '../../mockPosts';

const ADD_POST = 'ADD_POST';
const LIKE_POST = 'LIKE_POST';
const REPLY_TO_POST = 'REPLY_TO_POST';
const OPEN_POST_MODAL = 'OPEN_POST_MODAL';
const CLOSE_POST_MODAL = 'CLOSE_POST_MODAL';
const SET_POST_LAYOUT = 'SET_POST_LAYOUT';
const FOCUS_POST = 'FOCUS_POST';
const BLUR_POST = 'BLUR_POST';

let id = posts.length;

export const actionConstants = {
    ADD_POST,
    LIKE_POST,
    REPLY_TO_POST,
    OPEN_POST_MODAL,
    CLOSE_POST_MODAL,
    SET_POST_LAYOUT,
    FOCUS_POST,
    BLUR_POST
};

export const actions = createActions({
    [ADD_POST]: (post) => ({
        ...post,
        timestamp: Date.now(),
        likes: [],
        replies: [],
        location: '',
        id: id += 1 // assignment to an existing var will return the value assigned
    }),
    
    [LIKE_POST]: (postId, userId) => ({ postId, userId }),

    [REPLY_TO_POST]: (postId, message, author) => ({
        postId,
        message,
        author,
        timestamp: Date.now()
    }),
    [OPEN_POST_MODAL]: undefined,
    [CLOSE_POST_MODAL]: undefined,
    [SET_POST_LAYOUT]: undefined,
    [FOCUS_POST]: undefined,
    [BLUR_POST]: undefined
});

const actionHandlers = {
    [ADD_POST]: (state, { payload }) => ({
        ui: {
            ...state.ui,
            isPostModalOpen: false
        },
        data: [
            payload,
            ...state.data
        ]
    }),

    [LIKE_POST]: (state, { payload }) => ({
        ui: { ...state.ui },
        data: state.data.map((p) => {
            if (p.id === payload.postId) {
                const index = p.likes.indexOf(payload.userId);
                if (index > -1) {
                    return {
                        ...p,
                        likes: [
                            ...p.likes.slice(0, index),
                            ...p.likes.slice(index + 1)
                        ]
                    };
                }
                
                return {
                    ...p,
                    likes: [
                        ...p.likes,
                        payload.userId
                    ]
                };
            }

            return { ...p };
        })
    }),

    [REPLY_TO_POST]: (state, { payload }) => ({
        ui: { ...state.ui },
        data: state.data.map((p) => {
            if (p.id === payload.postId) {
                const reply = {
                    message: payload.message,
                    author: payload.author,
                    timestamp: payload.timestamp
                };

                return {
                    ...p,
                    replies: [
                        ...p.replies,
                        reply
                    ]
                };
            }
            return { ...p };
        })
    }),

    [OPEN_POST_MODAL]: (state) => ({
        ui: {
            ...state.ui,
            isPostModalOpen: true
        },
        data: [ ...state.data ]
    }),

    CLOSE_POST_MODAL: (state) => ({
        ui: {
            ...state.ui,
            isPostModalOpen: false
        },
        data: [...state.data]
    }),
    [SET_POST_LAYOUT]: (state, { payload }) => ({
        ui: {
            ...state.ui,
            layout: payload
        },
        data: [ ...state.data ]
    }),
    [FOCUS_POST]: (state, { payload }) => ({
        ui: {
            ...state.ui,
            focusedPost: payload
        },
        data: [ ...state.data ]
    }),
    [BLUR_POST]: (state) => ({
        ui: {
            ...state.ui,
            focusedPost: null
        },
        data: [ ...state.data ]
    })
};

const initialState = {
    ui: {
        layout: 'list'
    },
    data: posts
};

export default function postsReducer(state = initialState, action) {
    const handler = actionHandlers[action.type];

    if (handler) {
        return Object.freeze(handler(state, action));
    }

    return state;
}