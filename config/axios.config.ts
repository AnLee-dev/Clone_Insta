// import Axios from 'axios';
// import { configure } from 'axios-hooks';
// import { getSession } from 'next-auth/react';
// import { AppConfig } from './app.config';

// const axios = Axios.create({
//   baseURL: AppConfig.apiBase,
// });

// // request interceptor to add token to request headers
// axios.interceptors.request.use(
//   async (config) => {
//     // Implement function to get token
//     const session = await getSession();

//     if (session?.access_token) {
//       config.headers.Authorization = `Bearer ${session?.access_token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// configure({ axios });

// export default axios;