import {getToken, deauthenticateUser} from '../utils/auth';

export const requestInterceptor = (request) => {
	let token = getToken();

	if (token)
		request.headers.common['Authorization'] = `jwt ${token}`;

	return request;
}

export const errorHandler = (error) => {
	if (error.response && error.response.status === 401) {
    // User is not authenticated
		if (error.response.data.detail) {
			alert(error.response.data.detail);
			deauthenticateUser();
			route('/')
		}

  }

	if (error.response && error.response.status === 400)
		Object.values(error.response.data).map((error) => alert(error));

	return Promise.reject(error);
}
