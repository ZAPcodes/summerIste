
// src/components/Signup.tsx
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { BookOpen } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    registrationId: '',
    branch: '',
    password: '',
    enrolledDomains: [] as string[],
  });
  const [isLoading, setIsLoading] = useState(false);

  const domains = [
    { id: 'webdev', label: 'Web Development' },
    { id: 'aiml', label: 'AI & Machine Learning' },
    { id: 'cybersec', label: 'Cybersecurity' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'appdev', label: 'App Development' },
    { id: 'dsa', label: 'Data Structures & Algorithms' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDomainChange = (domainId: string) => {
    setFormData((prev) => {
      const enrolledDomains = prev.enrolledDomains.includes(domainId)
        ? prev.enrolledDomains.filter((id) => id !== domainId)
        : [...prev.enrolledDomains, domainId];
      return { ...prev, enrolledDomains };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        throw new Error('Invalid email format');
      }
      if (!formData.registrationId || isNaN(Number(formData.registrationId))) {
        throw new Error('Valid registration ID is required');
      }
      if (formData.enrolledDomains.length === 0) {
        throw new Error('Please select at least one domain');
      }
      await signup({
        ...formData,
        registrationId: Number(formData.registrationId),
      });
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
              <BookOpen className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold truncate">ISTE Summer School</span>
          </div>
          <CardTitle className="text-xl sm:text-2xl text-white">Create Account</CardTitle>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-300 text-sm">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                className="bg-gray-800/50 border-gray-600 text-white mt-1"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-300 text-sm">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                className="bg-gray-800/50 border-gray-600 text-white mt-1"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Label htmlFor="registrationId" className="text-gray-300 text-sm">
                Registration No.
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
                placeholder="Enter registration number"
              />
            </div>

            <div>
              <Label htmlFor="branch" className="text-gray-300 text-sm">
                Branch
              </Label>
              <Input
                id="branch"
                name="branch"
                type="text"
                value={formData.branch}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                className="bg-gray-800/50 border-gray-600 text-white mt-1"
                placeholder="Enter your branch"
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
                placeholder="Create a password"
              />
            </div>

            <div>
              <Label className="text-gray-300 mb-2 block text-sm">Select Domains to Enroll</Label>
              <div className="space-y-2 max-h-32 overflow-y-auto bg-gray-800/30 rounded-md p-3">
                {domains.map((domain) => (
                  <div key={domain.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={domain.id}
                      checked={formData.enrolledDomains.includes(domain.id)}
                      onCheckedChange={() => handleDomainChange(domain.id)}
                      disabled={isLoading}
                      className="border-gray-600"
                    />
                    <Label htmlFor={domain.id} className="text-sm text-gray-300 flex-1 leading-relaxed">
                      {domain.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-sm sm:text-base py-2 sm:py-3"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>

            <div className="text-center text-sm">
              <span className="text-gray-400">Already have an account? </span>
              <Link to="/login" className="text-blue-400 hover:text-blue-300 break-words">
                Login here
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
