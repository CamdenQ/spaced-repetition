import React, { Component } from 'react';
import LangService from '../services/lang-api-service';

const LearningContext = React.createContext({
	nextWord: '',
	totalScore: '',
	correctCount: '',
	incorrectCount: '',
	guessResponse: {},
});

export default LearningContext;

export class LearningProvider extends Component {
	constructor(props) {
		super(props);
		const state = {
			nextWord: '',
			totalScore: '',
			correctCount: '',
			incorrectCount: '',
			guessResponse: {},
		};
		this.state = state;
	}

	onSubmitGuess(e) {
		e.preventDefault();
		const guess = e.target.input.value;
		LangService.submitGuess(guess).then((res) => {
			this.setState({
				guessResponse: res,
			});
		});
		console.log(this.state.guessResponse);
	}

	componentDidMount() {
		LangService.getNextWord().then((res) => {
			this.setState({
				nextWord: res.nextWord,
				totalScore: res.totalScore,
				correctCount: res.correctCount,
				incorrectCount: res.incorrectCount,
			});
		});
	}
	render() {
		const value = {
			nextWord: this.state.nextWord,
			totalScore: this.state.totalScore,
			correctCount: this.state.correctCount,
			incorrectCount: this.state.incorrectCount,
			guessResponse: this.state.guessResponse,
		};
		return (
			<LearningContext.Provider value={value}>
				{this.props.children}
			</LearningContext.Provider>
		);
	}
}
