import React, { Component } from 'react';
import LearningContext from '../../contexts/LearningContext';
import LangContext from '../../contexts/LangContext';
import TokenService from '../../services/token-service';
import config from '../../config';
import { Link } from 'react-router-dom';
import './LearningRoute.css';

class LearningRoute extends Component {
	render() {
		return (
			<LearningContext.Consumer>
				{(learningContext) => (
					<LangContext.Consumer>
						{(langContext) => (
							<section className="learn-section">
								<h2>{langContext.language.name}</h2>
								<h3>Translate the word: {learningContext.nextWord}</h3>
								<p>What's the translation for this word?</p>
								<form>
									<input></input>
									<div className="submit-div">
										<button typeof="submit">Submit</button>
									</div>
								</form>
								<p className="small">
									You've answered this word correctly{' '}
									{learningContext.correctCount} times.
								</p>
								<p className="small">
									You've answered this word incorrectly{' '}
									{learningContext.incorrectCount} times.
								</p>
								<p className="small">
									Your total score is: {learningContext.totalScore}.
								</p>
							</section>
						)}
					</LangContext.Consumer>
				)}
			</LearningContext.Consumer>
		);
	}
}

export default LearningRoute;
