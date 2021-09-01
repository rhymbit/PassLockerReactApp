import React from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../src/components/App/App'
import store from '../src/redux/store'



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
  