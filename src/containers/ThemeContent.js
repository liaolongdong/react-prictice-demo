import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ThemeSwitch from '../containers/ThemeSwitch';

class ThemeContent extends Component {
	static propTypes = {
		themeColor: PropTypes.string
	}

	render() {
		return (
			<div> 
				<p style={{color: this.props.themeColor}}>React ThemeContent</p>
				<ThemeSwitch />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}

export default connect(mapStateToProps)(ThemeContent);