import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    user: { id: string; email: string; name: string; role: string };
    tokens: {
      access: {
        token: string;
        expires: string;
      };
      refresh: {
        token: string;
        expires: string;
      };
    };
  }

  interface Session {
    access_token: string;
    refresh_token: string;
    access_token_expiry: number;
    error: string;
    role: string;
    email: string;
    name: string;
    role: string;
  }

  interface JWT {
    access_token: string;
    refresh_token: string;
    error: string;
  }

  interface DefaultUser {
    id: string;
    email: string;
    name: string;
    role: string;
  }
}
