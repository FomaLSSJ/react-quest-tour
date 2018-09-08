import React, { Component } from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

export default class TitleComponent extends Component {
  static get defaultProps() {
    return {
      title: 'Title'
    }
  }

  render() {
    return (
      <Container textAlign='center'>
        <Segment basic padded='very'>
          <Header as='h2'>{ this.props.title }</Header>
        </Segment>
      </Container>
    )
  }
}