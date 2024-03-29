import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function useAuth(shouldRedirect: any) {
  const { data: session } = useSession();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      signOut({ callbackUrl: '/signin', redirect: shouldRedirect });
    }

    if (session === null) {
      if (router.route !== '/signin') {
        router.replace('/signin');
      }
      setIsAuthenticated(false);
    } else if (session !== undefined) {
      if (router.route === '/signin') {
        router.replace('/');
      }
      setIsAuthenticated(true);
    }
  }, [router, session, shouldRedirect]);

  return isAuthenticated;
}
