import React from 'react';
import Articles from './components/Articles';
import './App.css'
import Panier from './components/Panier';

class App extends React.Component {
  state = {
    argent: 20,
    panier: [],
    articles: [
      { produit: "Coca Cola", prix: 1, stock: 5, image: '../../img/coca.jpg'},
      { produit: "Fanta", prix: 1.50, stock: 5, image: '../../img/fanta.jpg'},
      { produit: "Ice tea", prix: 2, stock: 5, image: '../../img/icetea.jpg'},
    ]
  };

  ajouteArticle = (i) => {
    let {argent, panier, articles} = this.state;
    if (argent < articles[i].prix || articles[i].stock === 0) {
      return null;
    }
    argent -= articles[i].prix;
    panier.push(articles[i]);
    articles[i].stock--;

    this.setState({
      argent, panier, articles
    });
  }

  rendreArticle = (i) => {
    let {argent, panier, articles} = this.state;

    argent += panier[i].prix;
    articles[articles.indexOf(panier[i])].stock++;
    panier.splice(i, 1);

    this.setState({
      argent, panier, articles
    });
  }

  render(){
    return(
      <div className="e-shop">
        <h1 className='titre'>E-SHOP</h1>
        <h2 className='titre2'>Argent: {this.state.argent}€</h2>
        <div className="articles">
            {this.state.articles.map((el, i) => {
              return(
                <Articles key={i} article={el} acheter={() => this.ajouteArticle(i)} />
              )
            })}
        </div>
        <h2 className='titre2'>Mon panier: </h2>
        <div>
            {this.state.panier.map((el, i) => {
              return(
                <Panier key={i} article={el} remettre={() => this.rendreArticle(i)}/>
              )
            })}
        </div>
      </div>
    )
  }
};

export default App;
