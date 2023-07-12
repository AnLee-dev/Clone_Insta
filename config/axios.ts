
// import axios from 'axios';
// import { getSession } from 'next-auth/react';

// axios.interceptors.request.use(
//   async (config) => {
//     // Get session from NextAuth
//     const session = await getSession();
//     if (session?.access_token) {
//       config.headers.Authorization = `Bearer ${session?.access_token}`;
//     }
//     return config;