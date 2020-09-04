import React, { Component } from 'react';
import LearningContext from '../../contexts/LearningContext';
import LangContext from '../../contexts/LangContext';

export default class Question extends Component {
	render() {
		return (
			<LearningContext.Consumer>
				{(learningContext) => (
					<div>
						<h3>Translate the word: {learningContext.nextWord}</h3>
						<p>What's the translation for this word?</p>
						<form onSubmit={LangContext.onSubmitGuess}>
							<input name="answer" aria-label="Your guess here"></input>
							<div className="submit-div">
								<button type="submit">Submit</button>
							</div>
						</form>
						<p className="small">
							You've answered this word correctly {learningContext.correctCount}{' '}
							times.
						</p>
						<p className="small">
							You've answered this word incorrectly{' '}
							{learningContext.incorrectCount} times.
						</p>
						<p className="small">
							Your total score is: {learningContext.totalScore}.
						</p>
					</div>
				)}
			</LearningContext.Consumer>
		);
	}
}
