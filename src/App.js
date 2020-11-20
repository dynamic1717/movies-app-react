import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Favorites from './pages/Favorites'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import SingleMovie from './components/SingleMovie'

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/favorites'>
          <Favorites />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/movie/:id'>
          <SingleMovie />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
