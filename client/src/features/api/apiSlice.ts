import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Prompt } from "@/types";

// Example: JSONPlaceholder API
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    getPrompts: builder.query<Prompt[], void>({
      query: () => "/prompt",
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
    }),
    profile: builder.query({
      query: () => "/profile",
    }),
  }),
});

export const { useGetPromptsQuery } = apiSlice;
