import React from 'react';
// import { browserHistory } from 'react-router';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { fetchHikes } from './index';

const store = configureMockStore()();

const mockData = {
  hike: [
    {
      id: 1,
      title: 'Maxwell Falls Lower Trail',
      description: 'Start of a well trafficked 4-mile (round-trip) trail to a scenic waterfall, for all hiking levels.',
      address: 'S Brook Forest Rd, Evergreen, CO 80439',
      image: 'http://i.imgur.com/00eQ7tq.jpg',
      distance: '4 miles',
      difficulty: 'moderate',
      dog: 'Yes - On Leash',
      time: 'Best March through October'
    }
  ]
}

describe('actions', () => {
  afterEach(() => {
    store.clearActions();
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('should fetch the hikes from the api', () => {
    let expectedAction = { type: 'RECEIVED_HIKES', hikes: mockData.hike };
    store.dispatch(fetchHikes(mockData));

    let createdActions = store.getActions();

    expect(createdActions[0]).toEqual(expectedAction);
    expect(createdActions.length).toEqual(1);
  });


});
