import React, { Component } from 'react';
import Question from '../../../src/components/Question/Question';
import LangContext from '../../contexts/LangContext';
import './LearningRoute.css';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Correct from '../../components/Correct/Correct';
import Incorrect from '../../components/Incorrect/Incorrect';

class LearningRoute extends Component {
	render() {
		return (
			<LangContext.Consumer>
				{(langContext) => (
					<section className="learn-section">
						<h2>{langContext.language.name}</h2>
						<PrivateRoute exact path="/learn" component={Question} />
						<PrivateRoute path="/learn/correct" component={Correct} />
						<PrivateRoute path="/learn/incorrect" component={Incorrect} />
					</section>
				)}
			</LangContext.Consumer>
		);
	}
}

export default LearningRoute;
