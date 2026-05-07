// import jwtDecode from 'jwt-decode';
// import { useSession } from 'next-auth/react';
// import { useEffect } from 'react';

// type Props = {
//   setInterval: Function;
// };

// const RefreshTokenHandler = (props: Props) => {
//   const { data: session } = useSession();

//   useEffect(() => {
//     if (!!session) {
//       const decode_token: { exp: number; iat: number } = jwtDecode(String(session.access_token));
//       const timeRemaining = Math.round(decode_token.exp - 1 * 60 - Date.now() / 1000);
//       props.setInterval(timeRemaining > 0 ? timeRemaining : 0);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [session]);

//   return null;
// };

// export default RefreshTokenHandler;
