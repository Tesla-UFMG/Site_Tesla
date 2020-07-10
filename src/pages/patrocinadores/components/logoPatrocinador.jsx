import React, {Component} from 'react'

export default class LogoPatrocinador extends Component {
    render() {
        const {img} = this.props
        return(
        <img src={img}></img>
        )
    }
   
}