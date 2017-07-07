import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import {Provider} from './react-redux';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import ThemeHeader from './ThemeHeader';
// import ThemeContent from './ThemeContent';
import ThemeHeader from './containers/ThemeHeader';
import ThemeContent from './containers/ThemeContent';

// function createStore(reducer){
// 	let state = null;
// 	const listeners = [];
// 	const subscribe = (listener) => listeners.push(listener);
// 	const getState = () => state;
// 	const dispatch = (action) => {
// 		state = reducer(state, action);
// 		listeners.forEach((listener) => listener());
// 	}
// 	dispatch({}); // 初始化state
// 	return {getState, dispatch, subscribe}
// }

const themeReducer = (state, action) => {
	if(!state) return {
		themeColor: 'green'
	}
	switch(action.type){
		case 'CHANGE_COLOR':
			return {...state, themeColor: action.themeColor}
		default:
			return state
	}
}

const store = createStore(themeReducer);

class ThemeIndex extends Component {
	// static childContextTypes = {
	// 	store: PropTypes.object
	// }

	// getChildContext(){
	// 	return {store}
	// }
	
	render() {
		return (
			<Provider store={store}>
				<div>
					<ThemeHeader/>
					<ThemeContent/>
				</div>
			</Provider>
		)
	}
}

export default ThemeIndex;