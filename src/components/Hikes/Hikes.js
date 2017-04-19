import React, { Component } from 'react';
import './Hike.css';

class Hikes extends Component {
  constructor() {
    super();
    this.state = {
      favorites: {}
    }
  }

  getHike(hike) {
    if(hike.length) {
      return hike.map((hike, i) => {
        console.log(hike.hike)
        return (
          <div key={i} className="hike">
            <h2 key={hike.id}>{hike.title}</h2>


          </div>
        )
      })
    }
  }

  getDetails(hike) {
    let info = hike
    return info.map((info, i) => {
      console.log(info)
      return (
        <div className="card" key={i}>
          <li key={info.id}>{info.title}</li>
        </div>
      )
    })
  }

  render() {
    return (
      <section className="main">
        {this.getHike(this.props.hikes)}
      </section>
    )
  }
}

export default Hikes;
