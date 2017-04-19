import hikes from './hikes';
import { combineReducers } from 'redux';

describe('hikes reducer', () => {

  it('should return initial state by default', () => {
    expect(hikes(undefined, {})).toEqual([])
  });

  it('should return an array of favorite movie objects when action is RECEIVED_HIKES', () => {
    const hikes = [{title: 'Ironman', id: 2014}, {title: 'Abel Tasman', id: 2010}];

    expect(hikes(undefined, {
      type: 'RECEIVED_HIKES',
      hikes
    })).toEqual(hikes);
  });

});
