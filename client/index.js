import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

require('./styles/app.scss')

import HomeView from './components/home-view'
import BlogView from './containers/blog-view'

require('es6-promise').polyfill()

const store = configureStore({})
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/">
                <IndexRoute component={HomeView} />
                <Route path="blog">
                    <IndexRoute component={BlogView} />
                </Route>
            </Route>
        </Router>
    </Provider>,
  document.getElementById('app')
)


