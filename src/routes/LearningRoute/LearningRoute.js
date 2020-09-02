import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import config from '../../config';

class LearningRoute extends Component {
	state = {
		nextWord: '',
		wordCorrect: 0,
		wordIncorrectCount: 0,
		totalScore: 0,
		answer: '',
		isCorrect: null,
		guess: '',
	};

	handleNext = (e) => {
		e.preventDefault();

		fetch(`${config.API_ENDPOINT}/language/head`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
				'content-type': 'application/json',
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				this.setState({
					answer: '',
					isCorrect: null,
					guess: '',
					nextWord: res.nextWord,
					totalScore: res.totalScore,
					wordCorrectCount: res.wordCorrectCount,
					wordIncorrectCount: res.wordIncorrectCount,
				});
			});
	};

	componentDidMount() {
		fetch(`${config.API_ENDPOINT}/language/head`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
				'content-type': 'application/json',
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				this.setState({
					nextWord: res.nextWord,
					totalScore: res.totalScore,
					wordCorrectCount: res.wordCorrectCount,
					wordIncorrectCount: res.wordIncorrectCount,
				});
			});
	}

	render() {
		return <section>implement and style me</section>;
	}
}

export default LearningRoute;
