import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class HomeComponent extends Component {
    render() {
        return (
            <Redirect to='/item/0' />
        )
    }
}