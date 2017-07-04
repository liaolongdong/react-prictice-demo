import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {connect} from './react-redux';
import {connect} from 'react-redux';

class ThemeHeader extends Component {
	static propTypes = {
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

	// _updateThemeColor() {
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
			// <h1 style={{color: this.state.themeColor}}>React ThemeHeader</h1>
			<h1 style={{color: this.props.themeColor}}>React ThemeHeader</h1>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}
ThemeHeader = connect(mapStateToProps)(ThemeHeader);

export default ThemeHeader;