import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import './Card.css';

class Card extends Component {
  constructor () {
    super();
    this.cards = Array.from(document.querySelectorAll('.card'));

    this.onStart = this.onStart.bind(this); // bind to actual instance
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.update = this.update.bind(this);
    // size of element and position
    this.targetBCR = null;
    this.target = null;
    this.startX = 0;
    this.currentX = 0; // what we keep up to date
    this.screenX = 0;
    this.targetX = 0;
    this.draggingCard = false;

    this.addEventListeners();

    // always with frames, won't miss repositioning
    requestAnimationFrame(this.update);
  }

  // function to contain all binding actions
  addEventListeners () {
    document.addEventListener('touchstart', this.onStart);
    document.addEventListener('touchmove', this.onMove);
    document.addEventListener('touchend', this.onEnd);

    document.addEventListener('onClick', this.onStart);
    document.addEventListener('onClick', this.onEnd);

    document.addEventListener('mousedown', this.onStart);
    document.addEventListener('mousemove', this.onMove);
    document.addEventListener('mouseup', this.onEnd);

    document.addEventListener('click', this.onClick)
  }

  // reused for touch and mouse for start, move, end
  onStart (evt) {
    if (this.target)
      return;
      // takes care of letting animations finish

    if (!evt.target.classList.contains('card'))
      return;

    // if clicked on a .card then:
    this.target = evt.target;

    // good to do once, uses layout info browser has
    this.targetBCR = this.target.getBoundingClientRect();

    // current x begins at startX
    this.startX = evt.pageX || evt.touches[0].pageX;
    this.currentX = this.startX;

    this.draggingCard = true;

    this.target.style.willChange = 'transform';

    evt.preventDefault();
  }

  onMove (evt) {
    if (!this.target)
      return;

    // now currentX is this:
    this.currentX = evt.pageX || evt.touches[0].pageX;
    this.target.setAttribute('class', 'card active');
  }

  onEnd (evt) {
    if (!this.target)
      return;

    this.targetX = 0;
    this.target.setAttribute('class', 'card')
    let screenX = this.currentX - this.startX;
    const threshold = this.targetBCR.width * 0.45;

    if (Math.abs(screenX) > threshold) {
      this.targetX = (screenX > 0) ?

      // // opens popup window - in react where to place link based off id of hike
      // window.open(
      //   "hike.html",
      //   "DescriptiveWindowName",
      //   "resizable,scrollbars,status"
      // )

      this.targetBCR.width
      :
      -this.targetBCR.width;
    }

    this.draggingCard = false;
  }

  update () {

    requestAnimationFrame(this.update);

    if (!this.target)
      return;

    if (this.draggingCard) {
      this.screenX = this.currentX - this.startX;
    } else {
      this.screenX += (this.targetX - this.screenX) / 5;
    }

    if (this.target.classList.contains('yes'))
      console.log('suh');

    const drag =
      (Math.abs(this.screenX) / this.targetBCR.width);
    const opacity = 1 - Math.pow(drag, 3);

    // const yes = document.getElementById('yes');
    //
    // const no = document.getElementById('no');

    if (this.screenX > 1) {

      this.target.style.transform = `translateX(${this.screenX}px) rotate(10deg)`;
      this.target.style.opacity = opacity;

    } else if (this.screenX === 0) {

      this.target.style.transform = `translateX(${this.screenX}px)`;
      this.target.style.opacity = opacity;

    } else if (this.screenX < -1) {

      this.target.style.transform = `translateX(${this.screenX}px) rotate(-10deg)`;
      this.target.style.opacity = opacity;
    }

    // User has finished dragging.
    if (this.draggingCard)
      return;

    const isNearlyAtStart = (Math.abs(this.screenX) < 0.1);
    const isNearlyInvisible = (opacity < 0.01);

    // If the card is nearly gone.
    if (isNearlyInvisible) {

      // Bail if there's no target or it's not attached to a parent anymore.
      if (!this.target || !this.target.parentNode)
        return;

      this.target.parentNode.removeChild(this.target);

      const targetIndex = this.cards.indexOf(this.target);
      this.cards.splice(targetIndex, 1);

      // Slide all the other cards.
      this.animateOtherCardsIntoPosition(targetIndex);

    } else if (isNearlyAtStart) {
      this.resetTarget();
    }
  }

  animateOtherCardsIntoPosition (startIndex) {
    // If removed card was the last one, there is nothing to animate.
    // Remove the target.
    if (startIndex === this.cards.length) {
      this.resetTarget();
      return;
    }

    const onAnimationComplete = evt => {
      const card = evt.target;
      card.removeEventListener('transitionend', onAnimationComplete);
      card.style.transition = '';
      card.style.transform = '';

      this.resetTarget();
    };

    // Set up all the card animations.
    for (let i = startIndex; i < this.cards.length; i++) {
      const card = this.cards[i];

      // Move the card down then slide it up.
      card.style.transform = `translateY(${this.targetBCR.height + 20}px)`;
      card.addEventListener('transitionend', onAnimationComplete);
    }

    // Now init them.
    requestAnimationFrame(_ => {
      for (let i = startIndex; i < this.cards.length; i++) {
        const card = this.cards[i];

        // Move the card down then slide it up, with delay according to "distance"
        card.style.transition = `transform .3s cubic-bezier(0,0,0.31,1) ${i*50}ms`;
        card.style.transform = '';
      }
    });
  }

  resetTarget () {
    if (!this.target)
      return;

    this.target.style.willChange = 'initial';
    this.target.style.transform = 'none';
    this.target = null;
  }

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

                  <button className="btn red rounded"></button>

                  <button className="btn green rounded"
                          onClick={(id) => this.props.handleClick(hike.id)}
                          ></button>

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
window.addEventListener('load', () => new Card());
