export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) return 'Email is required';
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters long';
  return null;
};

export const validateUsername = (username: string): string | null => {
  if (!username.trim()) return 'Username is required';
  if (username.length < 3) return 'Username must be at least 3 characters long';
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) return 'Username can only contain letters, numbers, underscores, and hyphens';
  return null;
};

export const validatePrompt = (prompt: string): string | null => {
  if (!prompt.trim()) return 'Prompt is required';
  if (prompt.trim().length < 10) return 'Prompt must be at least 10 characters long';
  return null;
};

export const validateTags = (tags: string): string | null => {
  const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
  if (tagsArray.length === 0) return 'At least one tag is required';
  if (tagsArray.length > 10) return 'Maximum 10 tags allowed';
  for (const tag of tagsArray) {
    if (tag.length > 20) return 'Each tag must be 20 characters or less';
    if (!/^[a-zA-Z0-9\s-]+$/.test(tag)) return 'Tags can only contain letters, numbers, spaces, and hyphens';
  }
  return null;
};