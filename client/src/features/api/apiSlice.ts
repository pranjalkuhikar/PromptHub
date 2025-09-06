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
  }),
});

export const { useGetPromptsQuery } = apiSlice;