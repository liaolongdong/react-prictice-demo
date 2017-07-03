import React, {Component} from 'react';

class Title extends Component {
	handleClickOnTitle(word, e) {
		console.log('this', this);
		console.log('word', word);
		console.log('e', e);
		console.log('innerHTML', e.target.innerHTML);
	}

	render() {
		return (
			<h2 onClick={this.handleClickOnTitle.bind(this, 'Hello')}>React 小书</h2>
		)
	}
}

export default Title;