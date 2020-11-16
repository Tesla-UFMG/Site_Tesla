import React ,{Component} from '../../../../node_modules/react/index'

import LogoPatrocinador from './logoPatrocinador'

export default class Patrocinador extends Component {
    render() {
        const {descricao,logo} = this.props
        return(
            <div>
                <LogoPatrocinador img= {logo}></LogoPatrocinador>
                <div>{descricao}</div>   
            </div>
        )
    }
}