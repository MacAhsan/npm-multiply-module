import React, {Component} from 'react'


export default class Multiply extends Component {
constructor(props){
    this.state = {
        c: ''
    }
}

componentDidMount(props){
    this.setState({
        c: props.a * props.b
    })
}

render() {
    return(
        <div><h1>{this.state.c}</h1></div>
    )
}

}