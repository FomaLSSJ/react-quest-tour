import { find } from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, List, Segment } from 'semantic-ui-react'
import Title from './Title'

export default class ItemComponent extends Component {
  render() {
    const id = this.props.match.params.id
    const item = find(this.props.items, x => Number(id) === Number(x.id))

    return (
      <Container>
        <Title title={ `Item #${ id }` } />
          { item
            ? <Segment>
                <h2>{ item.text }</h2>
                { item.answers
                  ? <List ordered>
                      { item.answers.map(x => <Link to={ `/item/${ x.next }` }>
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