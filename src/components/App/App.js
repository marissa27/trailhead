import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// import Hikes from '../../containers/HikeContainer';
import Header from '../Header/Header';
import Card from '../../containers/CardContainer';
import Favorites from '../Favorites/Favorites';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    }
  }

  addFavorite(id) {
    if (!this.state.favorites.includes(id)) {
      this.state.favorites.push(id);
    }

      this.setState({ favorites: this.state.favorites })
      this.props.favoriteHikes(this.state.favorites);
    }

  render() {

    return (
        <div className="App">
          <Header />

          <Route exact path="/"
                 render={({match}) =>
                 <Card handleClick={(id) => this.addFavorite(id)} />
          } />

          <Route
            path="/favorites"
            component={ Favorites }
          />

        </div>
    );
  }
}

export default App;

// <Route path="/hikes" component={ Card }></Route>
//
// <Route path='/hikes/:id' render={ ({ match }) => {
//     const hike = hikes.find(hike => hikes.id === parseInt(match.params.id, 0))
//     return <Hikes hike={hike} history={ history } />
//   }}>
// // </Route>

//
//   addFav( e, id ) {
//
//     !this.state.favorites.includes(id) ? this.state.favorites.push(id) :   this.state.favorites.splice(this.state.favorites.indexOf(id), 1 );
//
//     if (this.state.favorites.includes(id)) {
//       change icon image
// e. target.closest('.card').style
//     } else if (!this.state.favorites.includes(id)) {
//       e.target.innerText = "Favorite"
//       e.target.style.backgroundColor = "inherit"
//     }
//
//     this.setState({ favorites: this.state.favorites })
//     this.props.saveFav(this.state.favorites);
//   }
