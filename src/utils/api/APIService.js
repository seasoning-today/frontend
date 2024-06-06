import axios from 'axios';
import { redirect } from 'react-router-dom';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 75000,
});

const getAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    return accessToken;
  } else {
    console.log('* No Access Token... Redirecting to /login');
    redirect('/login');
    throw new Error('No access token');
  }
};

api.interceptors.request.use(
  (config) => {
    try {
      const accessToken = getAccessToken();
      config.headers.Authorization = `Bearer ${accessToken}`;
    } catch (error) {
      console.error('Access token error:', error.message);
      throw new axios.Cancel('Operation canceled');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('* Unauthorized... Redirecting to /login');
      redirect('/login');
    } else if (error.response) {
      console.log('* Response Error... Redirecting to /home');
      redirect('/home');
    }
    return Promise.reject(error);
  }
);

export default api;
