import { Component } from 'react'
import Celular from './components/Celular'

class App extends Component {
    state = {
        celulares: [
            {nombre: 'Samsung Galaxy S10', precio: '2000000 de pesos', img: '/img/galaxyS10'},
            {nombre: 'Samsung Galaxy S20', precio: '4500000 de pesos', img: '/img/galaxyS10'},
            {nombre: 'Samsung Galaxy S30', precio: '6000000 de pesos', img: '/img/galaxyS10'},
            {nombre: 'iPhone 13', precio: '6000000 de pesos', img: '/img/galaxyS10'},
            {nombre: 'iPhone 12', precio: '4000000 de pesos', img: '/img/galaxyS10'},
            {nombre: 'iPhone 11', precio: '3000000 de pesos', img: '/img/galaxyS10'},
        ]
    }
    render() {
        return(
            <div>
                
            </div>
        )
    }
}

export default App;