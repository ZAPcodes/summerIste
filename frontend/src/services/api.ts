
// src/services/api.ts
import { API_BASE_URL } from '@/config';

export interface User {
  _id: string;
  name: string;
  email: string;
  registrationId: number;
  branch: string;
  enrolledDomains: string[];
}

export interface Progress {
  user: string;
  domain: string;
  weeks: {
    weekNumber: number;
    tasksCompleted: number[];
    quizPassed: boolean;
    quizScore?: number;
    completedAt?: string;
  }[];
}

export interface Quiz {
  _id: string;
  domain: string;
  weekNumber: number;
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
  duration: number;
  passingScore: number;
}

export interface QuizSubmission {
  score: number;
  passed: boolean;
}

export interface LeaderboardEntry {
  _id: string;
  userId: {
    _id: string;
    name: string;
    email: string;
  };
  domain: string;
  week: number;
  score: number;
  completionTime: number;
  completedAt: string;
}

export interface QuizSchedule {
  _id: string;
  domain: string;
  week: number;
  startTime: string;
  duration: number;
}

class ApiService {
  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      credentials: 'include' as RequestCredentials,
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'An error occurred' }));
        console.error(`API error (${endpoint}):`, error);
        
        if (response.status === 401) {
          localStorage.removeItem('keepLoggedIn');
        } else {
          throw new Error(error.message || 'Request failed');
        }
      }

      return response.json();
    } catch (error: any) {
      console.error(`API request failed (${endpoint}):`, error);
      throw error;
    }
  }

  async signup(userData: {
    name: string;
    email: string;
    registrationId: number;
    branch: string;
    password: string;
    enrolledDomains: string[];
  }): Promise<{ message: string }> {
    return this.request('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async login(credentials: { registrationId: number; password: string }): Promise<{ user: User }> {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async logout(): Promise<{ message: string }> {
    return this.request('/auth/logout', {
      method: 'POST',
    });
  }

  async getCurrentUser(): Promise<{ user: User }> {
    return this.request('/auth/me');
  }

  async updateTaskProgress(data: {
    userId: string;
    domain: string;
    weekNumber: number;
    taskIndex: number;
    isCompleted: boolean;
  }): Promise<Progress> {
    return this.request('/progress/task', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateQuizProgress(data: {
    userId: string;
    domain: string;
    weekNumber: number;
    quizPassed: boolean;
    quizScore: number;
  }): Promise<Progress> {
    return this.request('/progress/quiz', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getProgress(userId: string, domain: string): Promise<Progress> {
    return this.request(`/progress/${userId}/${domain}`);
  }

  // async getQuiz(domain: string, weekNumber: number): Promise<Quiz> {
  //   return this.request(`/quizzes/${domain}/${weekNumber}`);
  // }

  // async submitQuiz(userId: string, quizId: string, answers: number[]): Promise<QuizSubmission> {
  //   return this.request('/quizzes/submit', {
  //     method: 'POST',
  //     body: JSON.stringify({ userId, quizId, answers }),
  //   });
  // }

  async submitQuizResult(data: {
    domain: string;
    week: number;
    answers: number[];
    score: number;
    completionTime: number;
  }): Promise<{ message: string; quizResult: any }> {
    return this.request('/quiz/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getLeaderboard(domain: string, week: number): Promise<LeaderboardEntry[]> {
    return this.request(`/quiz/leaderboard/${domain}/${week}`);
  }

  async getQuizSchedule(domain: string, week: number): Promise<QuizSchedule> {
    return this.request(`/quiz/schedule/${domain}/${week}`);
  }

  async setQuizSchedule(data: {
    domain: string;
    week: number;
    startTime: string;
    duration: number;
  }): Promise<{ message: string; schedule: QuizSchedule }> {
    return this.request('/quiz/schedule', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const apiService = new ApiService();

export const getLeaderboard = async (domain: string, week: number): Promise<LeaderboardEntry[]> => {
  return apiService.getLeaderboard(domain, week);
};

export const getQuizSchedule = async (domain: string, week: number): Promise<QuizSchedule> => {
  return apiService.getQuizSchedule(domain, week);
};
