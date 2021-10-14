import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from '@source/pages/home'
import Introduction from '@source/pages/introduction'
import '@source/styling/styles.scss'

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/introduction" exact component={Introduction} />
    </Router>
  )
}

export default App
