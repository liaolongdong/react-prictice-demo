import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ThemeSwitch from './ThemeSwitch';

class ThemeContent extends Component {
	static contextTypes = {
		store: PropTypes.object
	}

	constructor(){
		super();
		this.state = {
			themeColor: ''
		}
	}

	_updateThemeColor(){
		const {store} = this.context;
		const state = store.getState();
		this.setState({themeColor: state.themeColor});
	}

	componentWillMount(){
		const {store} = this.context;
		this._updateThemeColor();
		store.subscribe(() => this._updateThemeColor());
	}

	render() {
		return (
			<div>
				<p style={{'color': this.state.themeColor}}>React ThemeContent</p>
				<ThemeSwitch/>
			</div>
		)
	}
}

export default ThemeContent;