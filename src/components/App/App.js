import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import './App.css';
// import Hikes from '../../containers/HikeContainer';
import Header from '../Header/Header';
import Card from '../../containers/CardContainer';



class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Card />
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
// </Route>
