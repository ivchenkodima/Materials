import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather, fetchForecast } from '../actions';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentWillMount() {
		this.props.onFetchFotrecast('Odessa');
		this.props.onFetchWeather('Odessa');
	}

	handleSubmit(e) {
		e.preventDefault();
		const input = this.refs.city;
		if (!input.value.trim()) return;

		this.props.onFetchFotrecast(input.value);
		this.props.onFetchWeather(input.value);
		input.value = '';
	}

	render() {
		return (
			<form className="Search" onSubmit={this.handleSubmit}>
				<input className="Search__input" placeholder="Search city" ref="city" />
			</form>
		);
	}
}
function mapDispatchToProps(dispatch) {
	return {
		onFetchWeather: function (city) {
			return dispatch(fetchWeather(`q=${city}`));
		},
		onFetchFotrecast: function (city) {
			return dispatch(fetchForecast(`q=${city}`));
		},
	};
}

Search = connect(null, mapDispatchToProps)(Search);

export default Search;
