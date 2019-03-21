import React, {Component} from 'react'


export default class Multiply extends Component {
constructor(props){
    state = {
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
        <div>{this.state.c}</div>
    )
}

}