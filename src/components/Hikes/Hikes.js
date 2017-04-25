import React from 'react';
import './Hike.css';

const Hikes = ({ favorites, title, description, address, image, distance, difficulty, dog, time, history }) => {
  // const { favorites } = this.props
  const link = "http://maps.google.com/?q="
  console.log(title, description)
  return (
    <article className="hike">
      <h2>{ title }</h2>
      <img className="hike-img" src={ image } alt={ title }/>
      <div className="hike-info">

        <h3>Description</h3>
        <p>{ description }</p>

        <h3>Address</h3>
        <a href={link + address}>
          <p>{ address }</p>
        </a>

        <h3>Length</h3>
        <p>{ distance }</p>

        <h3>Difficulty</h3>
        <p>{ difficulty }</p>

        <h3>Can I Bring my Dog?</h3>
        <p>{ dog }</p>

        <h3>Time of Year</h3>
        <p>{ time }</p>

      </div>
    </article>
  )
}

export default Hikes;
