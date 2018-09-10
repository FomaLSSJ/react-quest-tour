import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, List, Segment } from 'semantic-ui-react'
import Title from './Title'
import Store from '../services/store'
import constants from '../constants'

export default class ItemComponent extends Component {
  render() {
    const id = this.props.match.params.id
    const item = Store.getValueById(constants.questions_key, id)
    console.log(item)

    return (
      <Container>
        <Title title={ `Item #${ id }` } />
          { item
            ? <Segment>
                <h2>{ item.text }</h2>
                { item.answers
                  ? <List ordered>
                      { item.answers.map((x, i) => <Link key={ i } to={ `/item/${ x.next }` }>
                          <List.Item>{ x.text }</List.Item>
                        </Link>)
                      }
                    </List>
                  : null
                }
              </Segment>
            : <Segment>
                <h2>Item not found</h2>
              </Segment>
          }
          <div>
            <Link to='/item/0'>В начало</Link>
          </div>
      </Container>
    )
  }
}