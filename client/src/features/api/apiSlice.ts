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
  }),
});

export const {
  useGetPromptsQuery,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useProfileQuery,
} = apiSlice;
