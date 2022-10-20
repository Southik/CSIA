import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import Product from './Product'


const Algo = () => {
    console.log("hello")
}

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = { count: 0 }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <button onClick={this.handleClick}>Likes: {this.state.count}</button>
            
        )

    }

}

export default Counter

