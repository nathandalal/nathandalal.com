import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import HomeView from './containers/home-view'
import AboutView from './containers/about-view'

require('es6-promise').polyfill()

const store = configureStore({})
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRoute component={HomeView} />
        <Route path="about" component={AboutView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)


