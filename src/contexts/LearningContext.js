import React, { Component } from 'react';
import LangService from '../services/lang-api-service';
//import history from '../../src/history';

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
      guessResponse: {
        id: 0,
        original: 'none',
        translation: 'none',
        memory_value: 0,
        correct_count: 0,
        incorrect_count: 0,
        language_id: 0,
        next: 0,
        isCorrect: false,
        guess: 'none',
        total_score: 0,
      },
      guessing: true,
    };
    this.state = state;
  }

  onSubmitGuess = (e) => {
    e.preventDefault();
    const guess = e.target['learn-guess-input'].value;
    LangService.submitGuess(guess)
      .then((res) => {
        this.setState({
          guessResponse: res,
        });
      })
      .then(() => {
        this.setState({
          guessing: false,
        });
      });
  };

  onClickNext = (e) => {
    e.preventDefault();
    LangService.getNextWord().then((res) => {
      this.setState({
        nextWord: res.nextWord,
        totalScore: res.totalScore,
        correctCount: res.correctCount,
        incorrectCount: res.incorrectCount,
        guessing: true,
      });
    });
  };

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
      onSubmitGuess: this.onSubmitGuess,
      guessing: this.state.guessing,
      onClickNext: this.onClickNext,
    };
    return (
      <LearningContext.Provider value={value}>
        {this.props.children}
      </LearningContext.Provider>
    );
  }
}
