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
          // Only remove keepLoggedIn flag on auth error
          localStorage.removeItem('keepLoggedIn');
          // Do not throw an explicit error here. Let the auth context handle the unauthenticated state.
          // throw new Error('Session expired. Please log in again.');
        } else { // Handle other non-OK responses as general errors
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

  async getQuiz(domain: string, weekNumber: number): Promise<Quiz> {
    return this.request(`/quizzes/${domain}/${weekNumber}`);
  }

  async submitQuiz(userId: string, quizId: string, answers: number[]): Promise<QuizSubmission> {
    return this.request('/quizzes/submit', {
      method: 'POST',
      body: JSON.stringify({ userId, quizId, answers }),
    });
  }
}

export const apiService = new ApiService();