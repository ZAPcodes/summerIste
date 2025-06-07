
// src/components/Login.tsx
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookOpen } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    registrationId: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!formData.registrationId || isNaN(Number(formData.registrationId))) {
        throw new Error('Valid registration ID is required');
      }
      await login(Number(formData.registrationId), formData.password);
      localStorage.setItem("keepLoggedIn", "true");
      navigate('/dashboard');
    } catch (error: any) {
      // Error is toasted in AuthContext
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white flex items-center justify-center p-4 sm:p-6">
      <Card className="w-full max-w-sm sm:max-w-md bg-black/40 backdrop-blur-sm border-blue-800/50">
        <CardHeader className="text-center px-4 sm:px-6">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <img src="/ISTE.png" alt="ISTE" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg sm:text-xl font-bold truncate text-white">ISTE Summer School</span>
          </div>
          <CardTitle className="text-xl sm:text-2xl text-white">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="registrationId" className="text-gray-300 text-sm">
                Registration ID
              </Label>
              <Input
                id="registrationId"
                name="registrationId"
                type="number"
                value={formData.registrationId}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                className="bg-gray-800/50 border-gray-600 text-white mt-1"
                placeholder="Enter your registration ID"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-300 text-sm">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                className="bg-gray-800/50 border-gray-600 text-white mt-1"
                placeholder="Enter your password"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-sm sm:text-base py-2 sm:py-3"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>

            <div className="text-center text-sm">
              <span className="text-gray-400">Don't have an account? </span>
              <Link to="/signup" className="text-blue-400 hover:text-blue-300 break-words">
                Sign up here
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
