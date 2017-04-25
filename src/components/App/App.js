import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// import Hikes from '../../containers/HikeContainer';
import Hikes from '../Hikes/Hikes';
import Header from '../../containers/HeaderContainer';
import Card from '../../containers/CardContainer';
import Favorites from '../../containers/FavoritesContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    }
  }

  addFavorite(hike) {
    if (!this.state.favorites.includes(hike)) {
      this.state.favorites.push(hike);
    }
      this.setState({ favorites: this.state.favorites })
      this.props.favoriteHikes(this.state.favorites);
      this.removeHike(hike)
    }

    removeHike(hike) {
      const index = this.props.hikes.indexOf(hike);

      if (index > -1) {
          this.props.hikes.splice(index, 1);
      }
    }

  render() {
    const { favorites } = this.props

    return (
        <div className="App">
          <Header />

          <Route exact path="/"
                 render={({match}) =>
                 <Card handleClick={(hike) => this.addFavorite(hike)}
                       handleRemove={(hike) => this.removeHike(hike)} />
          } />

          <Route
            path="/favorites"
            component={ Favorites }
          />

        <Route exact path='/hike/:id' render={({match}) => {
              const hike = favorites.find(hike => hike.id === parseInt(match.params.id, 10))
              return <Hikes { ...hike } history={ history } />
            }
          } />

        </div>
    );
  }
}

export default App;
