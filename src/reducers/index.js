import { combineReducers } from 'redux';
import {  routerReducer } from 'react-router-redux';
import hikes from './hikes'
import favorites from './favorites'

const appReducer = combineReducers({
  hikes,
  favorites,
  router: routerReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
