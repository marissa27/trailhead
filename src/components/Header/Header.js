import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

makeCounter(favorites) {
  if(favorites.length) {
    return (
      <NavLink to="/favorites">
        <button className="favorite-icon-count header-icon"></button>
      </NavLink>
    )
  } else {
    return (
      <NavLink to="/favorites">
        <button className="favorite-icon header-icon"></button>
      </NavLink>
    )
  }
}

  render() {
    return (
      <header>

        <Link to={'/'} className='title'>
          <h1 className="title">TrailHead</h1>
        </Link>
        <div>
          {this.makeCounter(this.props.favorites.length)}
        </div>
      </header>
    )
  }
}

export default Header;

// <p className="counter">{this.props.favorites.length}</p>
