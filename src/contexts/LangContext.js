import React, { Component } from 'react';
import LangService from '../services/lang-api-service';

const LangContext = React.createContext({
	language: {},
	words: [],
});

export default LangContext;

export class LangProvider extends Component {
	//make fetch to /api/language
	constructor(props) {
		super(props);
		const state = { language: {}, words: [] };
		this.state = state;
	}
	componentDidMount() {
		LangService.getLanguage().then((res) => {
			this.setState({
				language: res.language,
				words: res.words,
			});
		});
	}
	render() {
		const value = {
			language: this.state.language,
			words: this.state.words,
		};
		return (
			<LangContext.Provider value={value}>
				{this.props.children}
			</LangContext.Provider>
		);
	}
}
