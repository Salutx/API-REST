import Axios from 'axios';
import { urlAPI } from '../base/api';
import jwt_decode from 'jwt-decode';

export const fetchData = async () => {
	let response;
	const token = localStorage.getItem('access-token');
	const decoded = jwt_decode(token);	
	
	try {
		response = await Axios.get(`${urlAPI}categorys/userdetails/${decoded.userId}`, {});
	} catch (e) {
		throw new Error(e.message)
	} 

  return response?.data ? response?.data : null;
}
