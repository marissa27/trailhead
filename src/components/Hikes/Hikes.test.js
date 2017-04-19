import React from 'react';
import { shallow, mount } from 'enzyme';
import { browserHistory } from 'react-router';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';
import Hikes from './Hikes';

describe('testing Hikes', () => {
  const mockHike = [
    {title: 'place',
    difficulty: 'easy',
    id: 123,}
  ]

  it.skip('should contain html elements', () => {
    const wrapper = shallow( <Hikes /> )

    expect(wrapper.find('section')).toHaveLength(1)
  });

  it.skip('should have getHike and getDetails', () => {
    const wrapper = shallow(<Hikes />); wrapper.instance().getHike(mockHike)
    wrapper.instance().getDetails(mockHike)
  });
});
