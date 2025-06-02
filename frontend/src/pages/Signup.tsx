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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-black/40 backdrop-blur-sm border-blue-800/50">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">ISTE Summer School</span>
          </div>
          <CardTitle className="text-2xl text-white">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-300">
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
                className="bg-gray-800/50 border-gray-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-300">
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
                className="bg-gray-800/50 border-gray-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="registrationId" className="text-gray-300">
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
                className="bg-gray-800/50 border-gray-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="branch" className="text-gray-300">
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
                className="bg-gray-800/50 border-gray-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-300">
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
                className="bg-gray-800/50 border-gray-600 text-white"
              />
            </div>

            <div>
              <Label className="text-gray-300 mb-3 block">Select Domains to Enroll</Label>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {domains.map((domain) => (
                  <div key={domain.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={domain.id}
                      checked={formData.enrolledDomains.includes(domain.id)}
                      onCheckedChange={() => handleDomainChange(domain.id)}
                      disabled={isLoading}
                      className="border-gray-600"
                    />
                    <Label htmlFor={domain.id} className="text-sm text-gray-300">
                      {domain.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>

            <div className="text-center">
              <span className="text-gray-400">Already have an account? </span>
              <Link to="/login" className="text-blue-400 hover:text-blue-300">
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