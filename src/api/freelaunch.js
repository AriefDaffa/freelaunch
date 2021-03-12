import axios from 'axios';

//
export default axios.create({
	baseURL: 'http://54.204.135.32:3000',
	headaer: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
	},
});
