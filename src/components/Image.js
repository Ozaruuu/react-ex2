import { Component } from 'react';
import imagem from '../images/imagem.jpg'

export default class HelloPersonal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showImage: false
        }
    }

    toogleImage() {
        this.setState({
            showImage: !this.state.showImage
        });
    }

    image() {
        return (this.state.showImage && <abbr className='centro' title="alimentos ricos em vitmina D"><img alt='alimentos ricos em vitmina D' src={ imagem }/></abbr>);
    }
    
    render() {
        return (
            <div className='centro'>
                <button className='botao' onClick={() => this.toogleImage()}>
                    Clique para {this.state.showImage ? "esconder" : "mostrar"} alimentos fontes de vitamina D3
                </button>
                {this.image()}
            </div>
        );
    }
}