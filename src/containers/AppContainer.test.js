// import React from 'react';
// import { mount } from 'enzyme';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';
//
// import AppContainer from './AppContainer';
// import App from '../components/App/App';
//
//
//
// let Component;
// 	let AppComponent;
//
//
// const setup = () => {
//   const Container = mount(
//     <Provider store={ mockStore } >
//       <AppContainer />
//     </Provider>
//   );
//   const Component = Container.find(App);
//   return {
//     Container,
//     Component
//   }
// }
//
// describe('AppContainer', () => {
//
//   it('should render', () => {
//     expect(Component.length).toBeTruthy();
//     expect(AppComponent.length).toBeTruthy();
//   });
//
//
// })
//
// describe('AppContainer', () => {
// 	let Component;
// 	let AppComponent;
//
// 	beforeEach(() => {
//     const mockStore = configureMockStore()({
//       hike: {
//         title: 'Mordor',
//         distance: '100 miles',
//         id: 1,
//         difficulty: 'easy'
//       }
//     })
//
// 		const wrapper = mount(
// 			<Provider store={mockStore}>
// 				<AppContainer />
// 			</Provider>
// 		);
//
// 		Component = wrapper.find(AppContainer);
// 		AppComponent = Component.find(App);
// 	});
//
// 	it('should render', () => {
// 		expect(Component.length).toBeTruthy();
// 		expect(AppComponent.length).toBeTruthy();
// 	});
// });
