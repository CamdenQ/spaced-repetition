import TokenService from './token-service';
import config from '../config';

const LangService = {
	getLanguage() {
		return fetch(`${config.API_ENDPOINT}/language`, {
			method: `GET`,
			headers: {
				authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},

	getNextWord() {
		return fetch(`${config.API_ENDPOINT}/language/head`, {
			method: 'GET',
			headers: {
				authorization: `Bearer ${TokenService.getAuthToken()}`,
				'content-type': 'application/json',
			},
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
};

export default LangService;
//TokenService.getAuthToken() retrieve token
