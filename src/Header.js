import React, {Component} from 'react';

class Header extends Component {
	constructor() {
		super();
		console.log('constructor');
	}

	componentWillMount() {
		console.log('componentWillMount');
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	render() {
		console.log('render');
		return (
			<div>
				<h1 className="title">React 小书</h1>
			</div>
		)
	}

	componentWillUnmount() {
		console.log('componentWillUnMount');
	}
}

export default Header;