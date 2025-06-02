// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiService, User } from '@/services/api';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (registrationId: number, password: string) => Promise<void>;
  signup: (userData: {
    name: string;
    email: string;
    registrationId: number;
    branch: string;
    password: string;
    enrolledDomains: string[];
  }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      try {
        const response = await apiService.getCurrentUser();
        setUser(response.user);
        localStorage.setItem('keepLoggedIn', 'true');
        setIsLoading(false);
      } catch (error) {
        setUser(null);
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (registrationId: number, password: string) => {
    try {
      if (!registrationId || !password) {
        throw new Error('Registration ID and password are required');
      }
      const response = await apiService.login({ registrationId, password });
      setUser(response.user);
      localStorage.setItem('keepLoggedIn', 'true');
      toast.success('Logged in successfully!');
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.message || 'Login failed');
      throw error;
    }
  };

  const signup = async (userData: {
    name: string;
    email: string;
    registrationId: number;
    branch: string;
    password: string;
    enrolledDomains: string[];
  }) => {
    try {
      if (!userData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        throw new Error('Invalid email format');
      }
      if (!userData.name || !userData.registrationId || !userData.branch || !userData.password) {
        throw new Error('All fields are required');
      }
      await apiService.signup(userData);
      await login(userData.registrationId, userData.password);
      toast.success('Signed up successfully!');
    } catch (error: any) {
      toast.error(error.message || 'Signup failed');
      throw error;
    }
  };

  const logout = async () => {
    try {
      await apiService.logout();
      setUser(null);
      localStorage.removeItem('keepLoggedIn');
      toast.success('Logged out successfully!');
      navigate('/login');
    } catch (error: any) {
      toast.error('Logout failed');
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};