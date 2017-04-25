import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import './Card.css';

class Card extends Component {

  componentWillMount() {
    this.props.fetchHikes();
  }

  makeCard(hikes) {
    if(hikes.length) {
      return hikes.map(hike => {
        return (
          <div key={hike.id} className="card">

                <img className="card-img" src={hike.image} alt={hike.title}/>

                  <p className="p-card">Length: <span className="p-info">{hike.distance}</span></p>

                  <p className="p-card">Difficulty Level: <span className="p-info">{hike.difficulty}</span></p>

                  <p className="p-card">Dogs: <span className="p-info">{hike.dogs}</span></p>

                <div className="buttons">

                  <button className="btn red rounded"
                          onClick={ () => this.props.removeHike(hike.id) }>
                  </button>

                  <button className="btn green rounded"
                          onClick={(id) => this.props.handleClick(hike)}>
                  </button>

                </div>

            </div>
        )
      })
    }
  }

  render() {
    return (
      <section className="card-container">
        {this.makeCard(this.props.hikes)}
      </section>

    )
  }
}

export default Card;
