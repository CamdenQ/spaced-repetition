import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './RegistrationRoute.css';

class RegistrationRoute extends Component {
	static defaultProps = {
		history: {
			push: () => {},
		},
	};

	handleRegistrationSuccess = () => {
		const { history } = this.props;
		history.push('/login');
	};

	render() {
		return (
			<section className="registration-section">
				<h2>Sign up</h2>
				<p>
					Practice learning a language with the spaced repetition revision
					technique.
				</p>
				<RegistrationForm
					onRegistrationSuccess={this.handleRegistrationSuccess}
				/>
			</section>
		);
	}
}

export default RegistrationRoute;
