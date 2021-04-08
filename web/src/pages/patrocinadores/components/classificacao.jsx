import React, {Component} from '../../../../node_modules/react/index'

export default class Classificacao extends Component {
    render() {
        const {nome} = this.props
        return(
            <h1>{nome}</h1>
        )
    }
   
}