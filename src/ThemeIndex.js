import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ThemeHeader from './ThemeHeader';
import ThemeContent from './ThemeContent';

function createStore(reducer){
	let state = null;
	const listeners = [];
	const subscribe = (listener) => listeners.push(listener);
	const getState = () => state;
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach((listener) => listener());
	}
	dispatch({}); // 初始化state
	return {getState, dispatch, subscribe}
}

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
	static childContextTypes = {
		store: PropTypes.object
	}

	getChildContext(){
		return {store}
	}
	
	render() {
		return (
			<div>
				<ThemeHeader/>
				<ThemeContent/>
			</div>
		)
	}
}

export default ThemeIndex;