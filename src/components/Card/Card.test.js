import React from 'react';
import { shallow, mount } from 'enzyme';
import { browserHistory } from 'react-router';
import Card from './Card'
// import Card from '../../containers/CardContainer';
import createMockRaf from 'mock-raf';
import sinon from 'sinon';
import { replaceRaf } from 'raf-stub';
import stub from 'stub';

describe('testing Card', () => {
  const mockHike = {
    title: 'place',
    difficulty: 'easy',
    id: 123,
  }

  const render = () => {
    return requestAnimationFrame(() => {
        console.log('animate allthethings!');
    });
  }

  const frameDuration = 1000 / 60 * 2;
  const startTime = performance.now() + 1000;
  const stub = createStub(frameDuration, startTime);

  it.skip('should contain html elements', () => {
    const wrapper = shallow( <Card /> )

    expect(wrapper.find('section')).toHaveLength(1)
    expect(wrapper.find('div')).toHaveLength(1)
  });

  it.skip('should allow us to execute requestAnimationFrame when we want', () => {
      render();

      requestAnimationFrame.step();

      expect(console.log.called).to.be(true);
  });

  it.skip('should allow us to cancel requestAnimationFrame when we want', () => {
      const id = render();

      cancelAnimationFrame(id);
      requestAnimationFrame.step();

      expect(console.log.called).to.be(false);
  });

  it.skip('should be able to accept props', () => {
    const wrapper = shallow( <Card { ...mockHike } /> )

    expect(wrapper.unrendered.props.title).toEqual('place')
    expect(wrapper.unrendered.props.difficulty).toEqual('easy')
    expect(wrapper.unrendered.props.id).toEqual(123)
  })

  it.skip('should be able to display data to DOM', () => {
    const wrapper = shallow( <Card { ...mockHike }/> )

    expect(wrapper.find('.card-container')).toHaveLength(1)
  })

});
