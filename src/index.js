import React, {Component} from 'react'


export default class Multiply extends Component {
constructor(props){
    super(props)
    this.state = {
        c: ''
    }
}

componentDidMount(){
    let {a, b} = this.props
    this.setState({
        c: a * b
    })
}

render() {
    return(
        <div><h1>{this.state.c}</h1></div>
    )
}

}