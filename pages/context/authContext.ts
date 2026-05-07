// import React, { createContext, useContext, useEffect, useState } from "react";
// import { getUser } from "../api/auth/auth";
// import { AppProps } from "antd";

// interface User {
//     _id: string;
//     email: string;
//     name: string;
// }

// interface AuthContextType {
//     user: User | null;
//     login: (userData: User, token: string) => void;
//     loading: boolean;
// }


// function AuthProvider({ children }: AppProps) {
//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState(true);
//     const AuthContext = createContext<AuthContextType | undefined>(undefined);
//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             getUser(token)
//                 .then((res) => setUser(res))
//                 .catch(() => localStorage.removeItem("token"))
//                 .finally(() => setLoading(false));
//         } else {
//             setLoading(false);
//         }
//     }, []);

//     const login = (userData: User, token: string) => {
//         localStorage.setItem("token", token);
//         setUser(userData);
//     };
//     return (
//         // <AuthContext.Provider>
        
//         // </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
// // 3. Hook để dùng context
// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) throw new Error("useAuth phải dùng trong AuthProvider");
//     return context;
// };
