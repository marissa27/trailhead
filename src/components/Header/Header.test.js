import React from 'react';
import { shallow, mount } from 'enzyme';
import { browserHistory } from 'react-router';
import Header from './Header';

describe('testing Header', () => {

  it('should contain two buttons and one h1 element', () => {
    const wrapper = shallow( <Header /> )

    expect(wrapper.find('h1')).toHaveLength(1)
    expect(wrapper.find('button')).toHaveLength(2)
  });

  it.skip('should redirect to '/' page on click', () => {
    spyOn(browserHistory, 'push');
    const wrapper = mount(
        <Header history={ browserHistory }/> )

    const goHome = wrapper.find('header').first()
    goHome.simulate('click');

    expect(browserHistory.push).toHaveBeenCalledWith('/');
  });

});
