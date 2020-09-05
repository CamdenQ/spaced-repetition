import React, { Component } from 'react';
import LangContext from '../../contexts/LangContext';
import Word from '../../components/Word/Word';
import { Link } from 'react-router-dom';
import './DashboardRoute.css';
import TokenService from '../../services/token-service';
import config from '../../../src/config';

class DashboardRoute extends Component {
  static contextType = LangContext;

  state = {
    language: {},
    words: [],
  };
  componentDidMount() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: `GET`,
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((res) => {
        this.setState({
          language: res.language,
          words: res.words.sort((a, b) => a.id - b.id),
        });
      });
  }
  render() {
    return (
      <section className="dash-section">
        <h2>{this.context.language.name}</h2>
        <Link to="/learn">
          <button>Start Practicing</button>
        </Link>
        <h3>Words to practice</h3>
        <div className="dash-ul-wrapper">
          <h4>Total correct answers: {this.state.language.total_score}</h4>
          <ul className="dash-ul">
            <Word word={this.state.words[0]} />
            <Word word={this.state.words[1]} />
            <Word word={this.state.words[2]} />
            <Word word={this.state.words[3]} />
            <Word word={this.state.words[4]} />
          </ul>
          <ul className="dash-ul">
            <Word word={this.state.words[5]} />
            <Word word={this.state.words[6]} />
            <Word word={this.state.words[7]} />
            <Word word={this.state.words[8]} />
            <Word word={this.state.words[9]} />
          </ul>
        </div>
      </section>
    );
  }
}

export default DashboardRoute;
