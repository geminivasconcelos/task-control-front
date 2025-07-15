import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateToken } from '../services/authService';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!validateToken()) {
      navigate('/login');
    }
  }, [navigate]);

  if (!validateToken()) {
    return null;
  }

  return <>{children}</>;
}