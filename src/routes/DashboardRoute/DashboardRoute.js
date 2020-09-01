import React, { Component } from 'react';
import LangContext from '../../contexts/LangContext';
import Word from '../../components/Word/Word';
import { Link } from 'react-router-dom';
import './DashboardRoute.css';

class DashboardRoute extends Component {
	render() {
		return (
			<LangContext.Consumer>
				{(langContext) => (
					<section className="dash-section">
						{console.log(langContext)}
						<h2>{langContext.language.name}</h2>
						<Link to="/learn">
							<button>Start Practicing</button>
						</Link>
						<h3>Words to practice</h3>
						<div className="dash-ul-wrapper">
							<ul className="dash-ul">
								<Word word={langContext.words[0]} />
								<Word word={langContext.words[1]} />
								<Word word={langContext.words[2]} />
								<Word word={langContext.words[3]} />
								<Word word={langContext.words[4]} />
							</ul>
							<ul className="dash-ul">
								<Word word={langContext.words[5]} />
								<Word word={langContext.words[6]} />
								<Word word={langContext.words[7]} />
								<Word word={langContext.words[8]} />
								<Word word={langContext.words[9]} />
							</ul>
						</div>
					</section>
				)}
			</LangContext.Consumer>
		);
	}
}

export default DashboardRoute;
