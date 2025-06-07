import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { apiService, Progress } from '@/services/api';

interface UseProgressReturn {
  progress: Progress | null;
  loading: boolean;
  error: string | null;
  toggleTask: (weekNumber: number, taskIndex: number, isCompleted: boolean) => Promise<void>;
  updateQuizProgress: (domain: string, weekNumber: number, passed: boolean, score: number) => Promise<void>;
}

const getLocalProgress = (domain: string): Progress | null => {
  try {
    const stored = localStorage.getItem(`progress_${domain}`);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

const setLocalProgress = (domain: string, progress: Progress) => {
  try {
    localStorage.setItem(`progress_${domain}`, JSON.stringify(progress));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
};

export const useProgress = (domain: string): UseProgressReturn => {
  const { user, isLoading: authLoading } = useAuth();
  const [progress, setProgress] = useState<Progress | null>(() => getLocalProgress(domain));
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProgress = useCallback(async () => {
    if (authLoading) {
      setLoading(true);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 50));

    const currentUser = user;

    if (!currentUser?._id) {
      const localProgress = getLocalProgress(domain);
      if (localProgress) {
        setProgress(localProgress);
      }
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const progressData = await apiService.getProgress(currentUser._id, domain);
      setProgress(progressData);
      setLocalProgress(domain, progressData);
    } catch (err: any) {
      console.error('Failed to fetch progress:', err);
      const localProgress = getLocalProgress(domain);
      if (localProgress) {
        setProgress(localProgress);
      }
    } finally {
      setLoading(false);
    }
  }, [user, domain, authLoading]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const toggleTask = async (weekNumber: number, taskIndex: number, isCompleted: boolean) => {
    const currentProgress = progress || { user: user?._id || '', domain, weeks: [] };
    const weekIndex = currentProgress.weeks.findIndex(w => w.weekNumber === weekNumber);
    
    if (weekIndex === -1 && isCompleted) {
      currentProgress.weeks.push({
        weekNumber,
        tasksCompleted: [taskIndex],
        quizPassed: false,
        completedAt: new Date().toISOString(),
        quizScore: 0, // Default to 0 for new week progress
      });
    } else if (weekIndex !== -1) {
      const week = currentProgress.weeks[weekIndex];
      if (isCompleted) {
        if (!week.tasksCompleted.includes(taskIndex)) {
          week.tasksCompleted.push(taskIndex);
          week.completedAt = new Date().toISOString();
        }
      } else {
        week.tasksCompleted = week.tasksCompleted.filter(index => index !== taskIndex);
        if (week.tasksCompleted.length === 0 && !week.quizPassed) {
          currentProgress.weeks = currentProgress.weeks.filter(w => w.weekNumber !== weekNumber);
        }
      }
    }

    setProgress({ ...currentProgress }); // Ensure state update triggers re-render
    setLocalProgress(domain, currentProgress);

    if (!authLoading && user?._id) {
      try {
        setError(null);
        const updatedProgress = await apiService.updateTaskProgress({
          userId: user._id,
          domain,
          weekNumber,
          taskIndex,
          isCompleted,
        });
        setProgress(updatedProgress);
        setLocalProgress(domain, updatedProgress);
      } catch (err: any) {
        console.error('Failed to update task to backend:', err);
      }
    }
  };

  const updateQuizProgress = async (domain: string, weekNumber: number, passed: boolean, score: number) => {
    const currentProgress = progress || { user: user?._id || '', domain, weeks: [] };
    const weekIndex = currentProgress.weeks.findIndex(w => w.weekNumber === weekNumber);

    if (weekIndex !== -1) {
      currentProgress.weeks[weekIndex].quizPassed = passed;
      currentProgress.weeks[weekIndex].quizScore = score;
      currentProgress.weeks[weekIndex].completedAt = new Date().toISOString();
    } else {
      // This case should ideally not happen if tasks are completed first
      currentProgress.weeks.push({
        weekNumber,
        tasksCompleted: [],
        quizPassed: passed,
        quizScore: score,
        completedAt: new Date().toISOString(),
      });
    }

    setProgress({ ...currentProgress }); // Ensure state update triggers re-render
    setLocalProgress(domain, currentProgress);

    if (!authLoading && user?._id) {
      try {
        setError(null);
        const updatedProgress = await apiService.updateQuizProgress({
          userId: user._id,
          domain,
          weekNumber,
          quizPassed: passed,
          quizScore: score,
        });
        setProgress(updatedProgress);
        setLocalProgress(domain, updatedProgress);
      } catch (err: any) {
        console.error('Failed to update quiz progress to backend:', err);
        setError(err.message || 'Failed to update quiz progress');
      }
    }
  };

  return { progress, loading: loading || authLoading, error, toggleTask, updateQuizProgress };
};