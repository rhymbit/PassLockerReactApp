import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/components/App/App'

import { Provider } from 'react-redux'
import store from '../src/redux/store'

import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.render(
  <HelmetProvider>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </HelmetProvider>,
  document.getElementById('root')
  )
  