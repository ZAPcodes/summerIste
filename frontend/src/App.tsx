import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import WebDevelopment from "./pages/WebDevelopment";
import AiMl from "./pages/AiMl";
import Design from "./pages/Design";
import Cybersecurity from "./pages/Cybersecurity";
import AppDevelopment from "./pages/AppDevelopment";
import DataStructures from "./pages/DataStructures";
import DomainLeaderboard from "./pages/DomainLeaderboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


import { useState } from "react";

const GuestBanner = () => {
  const [visible, setVisible] = useState(() => {
    // Hide for session if dismissed
    return sessionStorage.getItem('hideGuestBanner') !== 'true';
  });
  if (!visible) return null;
  return (
    <div className="w-full bg-yellow-400 text-black text-center py-2 px-4 font-medium flex items-center justify-center z-50 relative">
      <span className="mr-2">You are in guest mode. Your progress is stored only in this browser.</span>
      <button
        className="ml-2 px-2 py-1 rounded bg-yellow-500 hover:bg-yellow-600 text-xs font-bold"
        onClick={() => {
          setVisible(false);
          sessionStorage.setItem('hideGuestBanner', 'true');
        }}
        aria-label="Dismiss guest mode banner"
      >
        Dismiss
      </button>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GuestBanner />
      <div className="overflow-x-hidden">
        <Routes>
          {/* Public routes (authentication removed) */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/dashboard" element={<Index />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/webdev" element={<WebDevelopment />} />
          <Route path="/aiml" element={<AiMl />} />
          <Route path="/design" element={<Design />} />
          <Route path="/cybersec" element={<Cybersecurity />} />
          <Route path="/appdev" element={<AppDevelopment />} />
          <Route path="/dsa" element={<DataStructures />} />
          <Route path="/leaderboard/:domain/:week" element={<DomainLeaderboard />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;