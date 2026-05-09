export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface AuthToken {
  token: string;
  expires: string;
}

export interface LoginResponse {
  user: {
    id: string;
    userName: string;
    fullName: string;
    profilePicUrl: string;
    email: string;
    isEmailVerified: boolean;
  };
  tokens: {
    access: AuthToken;
    refresh: AuthToken;
  };
}