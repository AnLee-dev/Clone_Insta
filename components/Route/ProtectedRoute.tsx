import { Navigate } from 'react-router-dom';
import { useAuth } from '@/pages/context/authContext'
import { AppProps } from 'antd';

export default function ProtectedRoute({ children }: AppProps) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}