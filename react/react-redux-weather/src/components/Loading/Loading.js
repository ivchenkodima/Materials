import React from 'react';

class Loading extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dots: '',
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			const dots = this.state.dots;

			this.setState({
				dots: dots.length >= 4 ? '' : `${dots}.`,
			});
		}, 100);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<span>{`Loading ${this.state.dots}`}</span>
		);
	}
}

export default Loading;
