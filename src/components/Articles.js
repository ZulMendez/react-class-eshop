import React, { Component} from 'react';
import '../css/articles.css';
import Button from 'react-bootstrap/Button';
import { Fragment } from 'react';
import { Card } from 'react-bootstrap';


class Articles extends Component {
    render(){
        return (
            <Fragment>
                <Card className='carte' style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={this.props.article.image} />
                    <Card.Body className={`carteBody ${this.props.article.stock === 1 ? "bg-warning" : this.props.article.stock === 0 ? "bg-danger" : ""}`}>
                        <Card.Title><h3>{this.props.article.produit}</h3></Card.Title>
                        <Card.Text>
                            <h5>Prix: {this.props.article.prix}€</h5> 
                            <h5>Stock: {this.props.article.stock ===0 ? "Rupture de stock" : `Stock: ${this.props.article.stock} unités`}</h5>
                        </Card.Text>
                        <Button onClick={() => this.props.acheter()} variant="outline-success">Acheter</Button>{' '}
                    </Card.Body>
                </Card>
            </Fragment>
        )
    }
};

export default Articles;