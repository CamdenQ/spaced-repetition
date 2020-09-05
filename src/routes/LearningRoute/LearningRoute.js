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

                <form onSubmit={(e) => this.context.onSubmitGuess(e)}>
                  <label htmlFor="learn-guess-input">
                    What's the translation for this word?
                  </label>
                  <input
                    type="text"
                    name="learn-guess-input"
                    id="learn-guess-input"
                    aria-label="Your guess here"
                    required
                  />
                  <div className="submit-div">
                    <button type="submit">Submit your answer</button>
                  </div>
                </form>
                <div className="DisplayScore">
                  <p className="small">
                    Your total score is: {this.context.totalScore}
                  </p>
                </div>
                <p className="small">
                  You've answered this word correctly{' '}
                  {this.context.correctCount} times.
                </p>
                <p className="small">
                  You've answered this word incorrectly{' '}
                  {this.context.incorrectCount} times.
                </p>
              </div>
            ) : (
              <div>
                <h3>Translate the word: {this.context.nextWord}</h3>
                {this.context.guessResponse.isCorrect === true ? (
                  <>
                    {' '}
                    <h4>You were correct! :D</h4>
                    <div className="DisplayFeedback">
                      <p>
                        The correct translation for "
                        {this.context.guessResponse.original}" was "
                        {this.context.guessResponse.translation}" and you chose
                        "{this.context.guessResponse.guess}".
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <h4>Good try, but not quite right :(</h4>
                    <div className="DisplayFeedback">
                      <p>
                        The correct translation for "
                        {this.context.guessResponse.original}" was "
                        {this.context.guessResponse.translation}" and you chose
                        "{this.context.guessResponse.guess}".
                      </p>
                    </div>
                  </>
                )}
                <button onClick={this.context.onClickNext}>
                  Try another word!
                </button>
                <p className="small">
                  You've answered this word correctly{' '}
                  {this.context.guessResponse.correct_count} times.
                </p>
                <p className="small">
                  You've answered this word incorrectly{' '}
                  {this.context.guessResponse.incorrect_count} times.
                </p>{' '}
                <div className="DisplayScore">
                  <p className="small">
                    Your total score is:{' '}
                    {this.context.guessResponse.total_score}
                  </p>
                </div>
              </div>
            )}
          </section>
        )}
      </LangContext.Consumer>
    );
  }
}

export default LearningRoute;
