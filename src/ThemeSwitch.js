import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {connect} from './react-redux';
import {connect} from 'react-redux';

class ThemeSwitch extends Component {
	// static contextTypes = {
	// 	store: PropTypes.object
	// }

	// constructor(){
	// 	super();
	// 	this.state = {
	// 		themeColor: ''
	// 	}
	// }

	// handleSwitchColor(color){
	// 	const {store} = this.context;
	// 	store.dispatch({
	// 		type: 'CHANGE_COLOR',
	// 		themeColor: color
	// 	})
	// }

	// _updateThemeColor(){
	// 	const {store} = this.context;
	// 	const state = store.getState();
	// 	this.setState({
	// 		themeColor: state.themeColor
	// 	})
	// }

	// componentWillMount(){
	// 	const {store} = this.context;
	// 	this._updateThemeColor();
	// 	store.subscribe(() => this._updateThemeColor());
	// }

	static propTypes = {
		themeColor: PropTypes.string,
		onSwitchColor: PropTypes.func
	}

	handleSwitchColor(color){
		if(this.props.onSwitchColor){
			this.props.onSwitchColor(color)
		}
	}
	render() {
		return (
			<div>
				<button style={{'color': this.props.themeColor}} onClick={this.handleSwitchColor.bind(this, 'green')}>green</button>
				<button style={{'color': this.props.themeColor}} onClick={this.handleSwitchColor.bind(this, 'blue')}>blue</button>
			</div>
		)
	}
}

const mapStateProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSwitchColor: (color) => {
			dispatch({type: 'CHANGE_COLOR', themeColor: color})
		}
	}
}

ThemeSwitch = connect(mapStateProps, mapDispatchToProps)(ThemeSwitch);

export default ThemeSwitch;