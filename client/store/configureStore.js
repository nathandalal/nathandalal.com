import { compose, combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as reducers from '../reducers'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import promiseMiddleware from 'redux-promise'
import { browserHistory } from 'react-router'

export default function configureStore(initialState, features) {
    const reducer = combineReducers(
        Object.assign(
            {},
            reducers,
            { routing: routerReducer }
        )
    )

    const createStoreWithMiddleware = applyMiddleware(
        promiseMiddleware, thunkMiddleware, routerMiddleware(browserHistory)
    )(createStore)

    return createStoreWithMiddleware(reducer, initialState)
}
