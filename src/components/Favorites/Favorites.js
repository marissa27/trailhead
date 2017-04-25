import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Favorites.css';

class Favorites extends Component {

  removeHike(fav) {
    const index = this.props.favorites.indexOf(fav);
    if (index > -1) {
      this.props.favorites.splice(index, 1);
    }
  }

  makeFav(favorites) {

    const link = "http://maps.google.com/?q="

    if(favorites.length) {
      return favorites.map(fav => {
        let id = fav.id
        return (
          <div key={fav.id} className="fav-card">
            <div className="left">
              <img className="favorite-img" src={fav.image} alt={fav.title}/>
            </div>
            <div className="right">
              <p className="p-favorite"><span className="p-info">{fav.title}</span></p>

              <p className="p-favorite">
                <a href={link + fav.address}>
                  {fav.address}
                </a>
              </p>
              <p className="p-favorite">Difficulty Level: <span className="p-info">{fav.difficulty}</span></p>

              <p className="p-favorite"><span className="p-info">{fav.time}</span></p>

            </div>

            <div className="fav-buttons">
              <Link to={`/hike/${fav.id}`}>
                <button className="more">more info</button>
              </Link>

              <button className="remove"
                onClick={ () => this.props.removeHike(fav.id) }>
                remove hike
              </button>

            </div>
          </div>
        )
      })
    } else {
      return (
        <div>
          <h2>Your backpack looks sad!</h2>
          <div className="backpack"></div>
          <NavLink to="/">
            <h2>Let's go find it somewhere to hike.</h2>
          </NavLink>
        </div>
      )
    }
  }

  render() {
    return (
      <section className="favorite-container">
        <h1>Favorites</h1>
        {this.makeFav(this.props.favorites)}
      </section>
    );
  }
}

export default Favorites;
