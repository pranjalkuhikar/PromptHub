import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Prompt } from "@/types";

// Example: JSONPlaceholder API
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: "include",
  }),
  tagTypes: ["Auth"],

  endpoints: (builder) => ({
    getPrompts: builder.query<Prompt[], void>({
      query: () => "/prompt",
      providesTags: ["Auth"],
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
      invalidatesTags: ["Auth"],
    }),
    profile: builder.query({
      query: () => "/profile",
      providesTags: ["Auth"],
    }),
    getUserPrompts: builder.query<Prompt[], void>({
      query: () => "/prompt/user",
      providesTags: ["Auth"],
    }),
    getUserByProfile: builder.query<{ username: string }, string>({
      query: (username) => `/profile/${username}`,
    }),
    getPromptById: builder.query<Prompt, string>({
      query: (id) => `/prompt/${id}`,
    }),
    createPrompt: builder.mutation<Prompt, { prompt: string; tags: string[] }>({
      // Add this line
      query: (body) => ({
        url: "/prompt/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useGetPromptsQuery,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useProfileQuery,
  useGetUserPromptsQuery,
  useGetPromptByIdQuery,
  useCreatePromptMutation,
  useGetUserByProfileQuery,
} = apiSlice;
