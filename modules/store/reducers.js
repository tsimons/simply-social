import { combineReducers } from 'redux'

import postReducer from '../posts';
import profileReducer from '../profile';
import userReducer from '../user';

const makeRootReducer = () => {
    return combineReducers({
        posts: postReducer,
        profiles: profileReducer,
        user: userReducer
    });
}

export default makeRootReducer;
