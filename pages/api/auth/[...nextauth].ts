/* eslint-disable react-hooks/rules-of-hooks */
import { useAppDispatch } from '@/store/hooks';
import { save } from '@/store/slice/jwtToken';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import NextAuth, { NextAuthOptions } from 'next-auth';
import { Provider } from 'next-auth/providers';
import CredentialsProvider from 'next-auth/providers/credentials';
import React, { useEffect } from "react";

async function refreshAccessToken(token: any) {
  try {
    // Get a new set of tokens with a refreshToken
    const token_response = await axios.post('http://localhost:4000/v1/auth/refresh-tokens', {
      refreshToken: token.refresh_token,
    });

    return {
      access_token: token_response.data.tokens.access.token,
      refresh_token: token_response.data.tokens.refresh.token,
      role: token_response.data.user.role,
      email: token_response.data.user.email,
      name: token_response.data.user.name,
      access_token_expiry: jwtDecode<{ exp: number }>(String(token_response.data.tokens.access.token)).exp,
    };
  } catch (error) {
    return {
      error: 'RefreshAccessTokenError',
    };
  }
}

const providers: Provider[] = [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      email: { label: 'Email', type: 'email' },
      password: { label: 'Password', type: 'password' },
    },
    async authorize(credentials, req) {
      try {
        let res;
          res = await axios.post(`http://localhost:4000/v1/auth/login`, {
            email: credentials?.email,
            password: credentials?.password,
          });
        // If no error and we have user data, return it
        if (res.status === 200) {
          return {
            ...res.data,
          };
        }
        // Return null if user data could not be retrieved
        return null;
      } catch (error) {
        return null;
      }
    },
  }),
  // ...add more providers here
];

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers,
  callbacks: {
    async jwt({ token, user, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        token.access_token = user.tokens.access.token || '';
        token.refresh_token = user.tokens.refresh.token || '';
        token.role = user.user.role || '';
        token.email = user.user.email || '';
        token.name = user.user.name || '';
      }
      const decode_token: { exp: number; iat: number } = jwtDecode(String(token.access_token));
      // If accessTokenExpiry is 24 hours, we have to refresh token before 24 hours pass.
      const shouldRefreshTime = Math.round(decode_token.exp - 1 * 60 - Date.now() / 1000);
      // If the token is still valid, just return it.
      if (shouldRefreshTime > 0) {
        return Promise.resolve(token);
      }

      return await refreshAccessToken(token);
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.access_token = String(token.access_token);
      session.refresh_token = String(token.refresh_token);
      session.role = String(token.role);
      session.email = String(token.email);
      session.name = String(token.name);
      if (token.error) {
        session.error = String(token.error);
      }
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
};

export default NextAuth(authOptions);
