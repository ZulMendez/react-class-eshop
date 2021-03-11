import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../css/panier.css';


class Panier extends Component {
    render(){
        return(
            <div className="panier">
                <div className='panierBody' style={{ width: '20rem' }}>
                    <h5>Produit: {this.props.article.produit}</h5>
                    <h5>Unités: 1</h5>
                    <Button className="bouton" onClick={() => this.props.remettre()} variant="outline-danger">Rendre</Button>{' '}
                </div>
            </div>
        )
    }
};


export default Panier;