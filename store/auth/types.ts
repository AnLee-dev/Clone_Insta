export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthTokens {
  access: {
    token: string;
    expires: string;
  };
  refresh: {
    token: string;
    expires: string;
  };
}

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface LoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    isEmailVerified: boolean;
  };
  tokens: AuthTokens;
}