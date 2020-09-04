import React, { Component } from 'react';
import LearningContext from '../../contexts/LearningContext';

export default class Correct extends Component {
	render() {
		return (
			<LearningContext.Consumer>
				{(learningContext) => (
					<div>
						<h3>Translate the word: {learningContext.nextWord}</h3>
						<p>You were correct! :D</p>
						<p>STUFF HERE</p>
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
