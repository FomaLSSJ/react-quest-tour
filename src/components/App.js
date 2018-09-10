import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'
import constants from '../constants'
import Home from './Home'
import Item from './Item'
import 'semantic-ui-css/semantic.min.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: constants.items
    }
  }

  render() {
    return (
      <Router>
        <Segment basic style={{ height: '100%' }}>
          <Route exact
            path='/'
            render={ (props) => <Home {...props} items={ this.state.items } /> } />
          <Route
            path='/item/:id'
            render={ (props) => <Item {...props} items={ this.state.items } /> } />
        </Segment>
      </Router>
    )
  }
}