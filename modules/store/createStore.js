import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import makeRootReducer from './reducers'

const createStore = (initialState = {}) => {
    const enhancers = []
    const middleware = []
    let composeEnhancers = compose

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
