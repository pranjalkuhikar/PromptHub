export interface User {
  _id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Prompt {
  _id: string;
  prompt: string;
  tags: string[];
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  message: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

export interface CreatePromptData {
  prompt: string;
  tags: string[];
}

export interface UpdatePromptData {
  prompt?: string;
  tags?: string[];
}