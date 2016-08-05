import { compose, combineReducers, createStore, applyMiddleware } from 'redux'
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
        promiseMiddleware, routerMiddleware(browserHistory)
    )(createStore)

    return createStoreWithMiddleware(reducer, initialState)
}
