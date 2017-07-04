import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from './react-redux';
import ThemeSwitch from './ThemeSwitch';

class ThemeContent extends Component {
	static PropTypes = {
		themeColor: PropTypes.string
	}

	// static contextTypes = {
	// 	store: PropTypes.object
	// }

	// constructor(){
	// 	super();
	// 	this.state = {
	// 		themeColor: ''
	// 	}
	// }

	// _updateThemeColor(){
	// 	const {store} = this.context;
	// 	const state = store.getState();
	// 	this.setState({themeColor: state.themeColor});
	// }

	// componentWillMount(){
	// 	const {store} = this.context;
	// 	this._updateThemeColor();
	// 	store.subscribe(() => this._updateThemeColor());
	// }

	render() {
		return (
			<div>
				<p style={{'color': this.props.themeColor}}>React ThemeContent</p>
				<ThemeSwitch/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}
ThemeContent = connect(mapStateToProps)(ThemeContent);

export default ThemeContent;