// import React from 'react';
// import { mount } from 'enzyme';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';
//
// import HikeContainer from './HikeContainer';
// import Hikes from '../components/Hikes/Hikes';
//
// const mockStore = configureMockStore()([{
//   hike: {
//     title: 'Mordor',
//     distance: '100 miles',
//     id: 1,
//     difficulty: 'easy'
//   }
// }])
//
// const setup = () => {
//   const Container = mount(
//     <Provider store={ mockStore } >
//       <HikeContainer />
//     </Provider>
//   );
//   const Component = Container.find(Login);
//   return {
//     Container,
//     Component
//   }
// }
//
// describe('HikeContainer', () => {
//   const { Container, Component } = setup();
//
//   it.skip('should pass the appropriate props from state', () => {
//     expect(Component.props().user).toEqual({
//       title: 'Mordor',
//       distance: '100 miles',
//       id: 1,
//       difficulty: 'easy'
//     });
//   });
//
//   it.skip('should pass down the correct action creaters props from state', () => {
//     expect(Object.keys(Component.props())).toContain(
//       'fetchHikes'
//     );
//   });
// });
