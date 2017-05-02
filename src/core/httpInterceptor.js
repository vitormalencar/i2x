import {getToken, deauthenticateUser} from '../utils/auth';

/**
   * Handle requests and update jwt token
   *
   * @param {object} token
*/
export const requestInterceptor = (request) => {
	let token = getToken();

	if (token)
		request.headers.common['Authorization'] = `jwt ${token}`;

	return request;
}

/**
   * Error handler for http requests based on http-status
   *
   * @param {object} error
*/
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
