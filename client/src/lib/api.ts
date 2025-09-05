import axios from 'axios';
import type {
  User,
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
  Prompt,
  CreatePromptData,
  UpdatePromptData,
} from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Auth endpoints
export const authAPI = {
  register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    const response = await api.post('/auth/register', credentials);
    return response.data;
  },

  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  logout: async (): Promise<{ message: string }> => {
    const response = await api.get('/auth/logout');
    return response.data;
  },

  getProfile: async (): Promise<{ user: User }> => {
    const response = await api.get('/profile');
    return response.data;
  },
};

// Prompt endpoints
export const promptAPI = {
  getAllPrompts: async (): Promise<Prompt[]> => {
    const response = await api.get('/prompt');
    return response.data;
  },

  getPromptById: async (id: string): Promise<Prompt> => {
    const response = await api.get(`/prompt/${id}`);
    return response.data;
  },

  createPrompt: async (data: CreatePromptData): Promise<Prompt> => {
    const response = await api.post('/prompt/create', data);
    return response.data;
  },

  updatePrompt: async (id: string, data: UpdatePromptData): Promise<Prompt> => {
    const response = await api.put(`/prompt/update/${id}`, data);
    return response.data;
  },

  deletePrompt: async (id: string): Promise<{ message: string }> => {
    const response = await api.delete(`/prompt/delete/${id}`);
    return response.data;
  },
};

export default api;