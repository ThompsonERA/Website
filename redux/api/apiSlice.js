import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://eduker-server.onrender.com",
  }),
  tagTypes: [],
  keepUnusedDataFor: 600,
  endpoints: (builder) => ({
    getHomes: builder.query({
      query: () => "/homes",
    }),
    getHome: builder.query({
      query: (id) => `/homes/${id}`,
    }),
    getReviews: builder.query({
      query: () => "/reviews",
    }),
    getReview: builder.query({
      query: (id) => `/reviews/${id}`,
    }),
    getServices: builder.query({
      query: () => "/services",
    }),
    getService: builder.query({
      query: (id) => `/services/${id}`,
    }),
    //prebuild query
    getCourses: builder.query({
      query: () => "/courses",
    }),
    getBlogs: builder.query({
      query: () => "/blog",
    }),
    getEvents: builder.query({
      query: () => "/events",
    }),
    getTeams: builder.query({
      query: () => "/teams",
    }),
    // single blog
    getBlog: builder.query({
      query: (id) => `/blog/${id}`,
    }),
    // single team
    getTeam: builder.query({
      query: (id) => `/team/${id}`,
    }),
    // single event
    getEvent: builder.query({
      query: (id) => `/event/${id}`,
    }),
    // single course
    getCourse: builder.query({
      query: (id) => `/courseDetails/${id}`,
    }),
    // category get
    getCategory: builder.query({
      query: (category) => `/category/${category}`,
    }),
    getMyCourses: builder.query({
      query: (email) => `/myOrder/${email}`,
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetBlogsQuery,
  useGetBlogQuery,
  useGetEventsQuery,
  useGetMyCoursesQuery,
  useGetTeamsQuery,
  useGetTeamQuery,
  useGetEventQuery,
  useGetCourseQuery,
  useGetCategoryQuery,
  useGetHomeQuery,
  useGetHomesQuery,
  useGetReviewQuery,
  useGetReviewsQuery,
  useGetServiceQuery,
  useGetServicesQuery,
} = apiSlice;
