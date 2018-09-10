import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Dimmer, Loader } from 'semantic-ui-react'
import Store from '../services/store'
import constants from '../constants'

export default class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: true
        }
    }

    async componentDidMount() {
        const localData = Store.get(constants.questions_key)

        if (!localData) {
            const response = await axios.get('/data.json')
            const { data } = response
            Store.set(constants.questions_key, data)
        }

        this.setState({
            loaded: false
        })
    }

    render() {
        return (
            <div style={{ height: '100%' }}>
                { this.state.loaded
                    ? <Dimmer active>
                        <Loader>Loading</Loader>
                    </Dimmer>
                    : <Redirect to='/item/0' />
                }
            </div>
        )
    }
}