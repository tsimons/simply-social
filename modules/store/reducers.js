import { combineReducers } from 'redux'

import postReducer from '../posts';
import profileReducer from '../profile';

const makeRootReducer = () => {
    return combineReducers({
        posts: postReducer,
        profiles: profileReducer
    });
}

export default makeRootReducer;
