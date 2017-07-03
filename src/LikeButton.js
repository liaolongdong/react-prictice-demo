import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

class LikeButton extends Component {
	constructor() {
		super();
		this.state = {
			isLiked: false
		}
	}

	handleClickOnLikeButton() {
		console.log('props:', this.props);
		// console.log(1, this.state.isLiked);
		this.setState({
				isLiked: !this.state.isLiked
			})
			// console.log(2, this.state.isLiked);
		if (this.props.onClick) {
			this.props.onClick();
		}
	}

	render() {
		const wordings = this.props.wordings || {
			likedText: '取消',
			unlikedText: '点赞'
		}
		return (
			<button onClick={this.handleClickOnLikeButton.bind(this)}>
				{this.state.isLiked? wordings.likedText:wordings.unlikedText}
			</button>
		)
	}
}

export default LikeButton;