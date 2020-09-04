import React, { Component } from 'react';
import LangContext from '../../contexts/LangContext';
import './LearningRoute.css';
import LearningContext from '../../contexts/LearningContext';

class LearningRoute extends Component {
	static contextType = LearningContext;
	render() {
		return (
			<LangContext.Consumer>
				{(langContext) => (
					<section className="learn-section">
						<h2>{langContext.language.name}</h2>
						{this.context.guessing === true ? (
							<div>
								<h3>Translate the word: {this.context.nextWord}</h3>
								<p>What's the translation for this word?</p>
								<form onSubmit={(e) => this.context.onSubmitGuess(e)}>
									<input name="answer" aria-label="Your guess here"></input>
									<div className="submit-div">
										<button type="submit">Submit</button>
									</div>
								</form>
								<p className="small">
									You've answered this word correctly{' '}
									{this.context.correctCount} times.
								</p>
								<p className="small">
									You've answered this word incorrectly{' '}
									{this.context.incorrectCount} times.
								</p>
								<p className="small">
									Your total score is: {this.context.totalScore}.
								</p>
							</div>
						) : (
							<div>
								<h3>Translate the word: {this.context.nextWord}</h3>
								{this.context.guessResponse.isCorrect === true ? (
									<>
										{' '}
										<p>You were correct! :D</p>
										<p>
											The correct translation for "
											{this.context.guessResponse.original}" was "
											{this.context.guessResponse.translation}" and you chose "
											{this.context.guessResponse.guess}".
										</p>
									</>
								) : (
									<>
										<p>Good try but not quite right :(</p>
										<p>
											The correct translation for "
											{this.context.guessResponse.original}" was "
											{this.context.guessResponse.translation}" and you chose "
											{this.context.guessResponse.guess}".
										</p>
									</>
								)}

								<button onClick={this.context.onClickNext}>
									Try another word
								</button>

								<p className="small">
									You've answered this word correctly{' '}
									{this.context.guessResponse.correct_count} times.
								</p>
								<p className="small">
									You've answered this word incorrectly{' '}
									{this.context.guessResponse.incorrect_count} times.
								</p>
								<p className="small">
									Your total score is: {this.context.guessResponse.total_score}.
								</p>
							</div>
						)}
					</section>
				)}
			</LangContext.Consumer>
		);
	}
}

export default LearningRoute;
