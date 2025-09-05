'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { promptAPI } from '@/lib/api';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { validatePrompt, validateTags } from '@/lib/validation';
import { ErrorMessage } from '@/components/ErrorMessage';

export const dynamic = 'force-dynamic';

export default function CreatePromptPage() {
  const [prompt, setPrompt] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState<{ prompt?: string; tags?: string }>({});
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setErrors({});

    const promptError = validatePrompt(prompt);
    const tagsError = validateTags(tags);

    if (promptError || tagsError) {
      setErrors({
        prompt: promptError || undefined,
        tags: tagsError || undefined,
      });
      return;
    }

    setLoading(true);

    try {
      const tagsArray = tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      await promptAPI.createPrompt({
        prompt: prompt.trim(),
        tags: tagsArray,
      });

      router.push('/prompts');
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || 'Failed to create prompt');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create New Prompt</h1>

            {error && <ErrorMessage message={error} onDismiss={() => setError('')} />}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
                  Prompt
                </label>
                <textarea
                  id="prompt"
                  name="prompt"
                  rows={4}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm text-gray-900 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                  errors.prompt ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your creative prompt..."
                  value={prompt}
                  onChange={(e) => {
                    setPrompt(e.target.value);
                    setErrors({ ...errors, prompt: undefined });
                  }}
                />
                {errors.prompt && (
                  <p className="mt-1 text-sm text-red-600">{errors.prompt}</p>
                )}
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm text-gray-900 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                  errors.tags ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="creative, writing, art, etc..."
                  value={tags}
                  onChange={(e) => {
                    setTags(e.target.value);
                    setErrors({ ...errors, tags: undefined });
                  }}
                />
                {errors.tags && (
                  <p className="mt-1 text-sm text-red-600">{errors.tags}</p>
                )}
                <p className="mt-2 text-sm text-gray-500">
                  Separate tags with commas
                </p>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => router.push('/prompts')}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Create Prompt'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}