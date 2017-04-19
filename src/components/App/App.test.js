import ReactDOM from 'react-dom';
import App from './App';

import React, { Component } from 'react';
import { browserHistory, MemoryRouter, StaticRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import fetchMock from 'fetch-mock';

import Card from '../../containers/CardContainer';
import Header from '../../components/Header/Header';
import Hikes from '../../containers/HikeContainer';

describe('App', () => {


  it('should find all of its components to render', () => {
    const wrapper = shallow(
      <App />
    );

    const wrap = wrapper.find('.App')

    expect(wrapper.find(Header).length).toEqual(1);
    expect(wrapper.find(Card).length).toEqual(1);
    // expect(wrapper.find(Hikes).length).toEqual(1);
  });

  it('should contain a div', () => {
    const wrapper = shallow( <App /> )

    expect(wrapper.find('div')).toHaveLength(1)
  });

});
