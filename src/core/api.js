import axios from 'axios';
import {requestInterceptor,errorHandler} from './httpInterceptor';

// Config baseURL
axios.defaults.baseURL = 'https://i2x-challenge.herokuapp.com/';

// Add a request interceptor
axios.interceptors.request.use(config => requestInterceptor(config), error => Promise.reject(error));

// Add a response interceptor Add a response interceptor
axios.interceptors.response.use(response => response, error => errorHandler(error));


// Login request
export const login = (email, password) => axios.post('core/login/', {email, password})

// Get recordings List
export const loadRecordingsList = (email, password) => axios.get('ai/recording/list/')
