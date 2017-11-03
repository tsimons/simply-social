import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import makeRootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';


const createStore = (initialState = {}) => {
    const enhancers = []
    const middleware = []
    let composeEnhancers = compose;

    if (process.env.NODE_ENV !== 'production') {
        composeEnhancers = composeWithDevTools;
    }

    const store = createReduxStore(
        makeRootReducer(),
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware),
            ...enhancers
        )
    )

    return store;
}

export default createStore;
