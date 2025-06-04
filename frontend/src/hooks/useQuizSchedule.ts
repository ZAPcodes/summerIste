
import { useState, useEffect } from 'react';
import { getQuizSchedule, QuizSchedule } from '@/services/api';

interface QuizStatus {
  isLive: boolean;
  hasStarted: boolean;
  hasEnded: boolean;
  timeRemaining?: number;
  timeUntilStart?: number;
  schedule?: QuizSchedule;
}

export const useQuizSchedule = (domain: string, week: number) => {
  const [status, setStatus] = useState<QuizStatus>({
    isLive: false,
    hasStarted: false,
    hasEnded: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkQuizStatus = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const schedule = await getQuizSchedule(domain, week);
        const currentTime = new Date();
        const startTime = new Date(schedule.startTime);
        const endTime = new Date(startTime.getTime() + schedule.duration * 60 * 1000);

        const hasStarted = currentTime >= startTime;
        const hasEnded = currentTime > endTime;
        const isLive = hasStarted && !hasEnded;

        let timeRemaining: number | undefined;
        let timeUntilStart: number | undefined;

        if (isLive) {
          timeRemaining = Math.max(0, Math.floor((endTime.getTime() - currentTime.getTime()) / 1000));
        } else if (!hasStarted) {
          timeUntilStart = Math.max(0, Math.floor((startTime.getTime() - currentTime.getTime()) / 1000));
        }

        setStatus({
          isLive,
          hasStarted,
          hasEnded,
          timeRemaining,
          timeUntilStart,
          schedule,
        });
      } catch (err: any) {
        setError(err.message || 'Failed to fetch quiz schedule');
        setStatus({
          isLive: false,
          hasStarted: false,
          hasEnded: false,
        });
      } finally {
        setLoading(false);
      }
    };

    if (domain && week) {
      checkQuizStatus();
      
      // Check every 30 seconds for real-time updates
      const interval = setInterval(checkQuizStatus, 30000);
      
      return () => clearInterval(interval);
    }
  }, [domain, week]);

  return { status, loading, error, refetch: () => {
    if (domain && week) {
      setLoading(true);
      // Trigger useEffect by changing a dependency
    }
  }};
};
