import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import WebDevelopment from "./pages/WebDevelopment";
import AiMl from "./pages/AiMl";
import Design from "./pages/Design";
import Cybersecurity from "./pages/Cybersecurity";
import AppDevelopment from "./pages/AppDevelopment";
import DataStructures from "./pages/DataStructures";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute: React.FC<{ children: React.ReactNode; domain?: string }> = ({ children, domain }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (domain && !user.enrolledDomains.includes(domain)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/webdevelopment"
            element={
              <ProtectedRoute domain="webdev">
                <WebDevelopment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/aiml"
            element={
              <ProtectedRoute domain="aiml">
                <AiMl />
              </ProtectedRoute>
            }
          />
          <Route
            path="/design"
            element={
              <ProtectedRoute domain="design">
                <Design />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cybersecurity"
            element={
              <ProtectedRoute domain="cybersec">
                <Cybersecurity />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appdev"
            element={
              <ProtectedRoute domain="appdev">
                <AppDevelopment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dsa"
            element={
              <ProtectedRoute domain="dsa">
                <DataStructures />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;