import React from 'react';
import { Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

  return (
    <header>

      <button className="settings-icon header-icon"></button>
      <Link to={'/'}>
        <h1>TrailHead</h1>
      </Link>

      <NavLink to="/favorites">
        <button className="favorite-icon header-icon"></button>
      </NavLink>
    </header>
  )
}

export default Header;
