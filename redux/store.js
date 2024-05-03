import { configureStore } from '@reduxjs/toolkit';
import coursesSlice from '../redux/features/coursesSlice';
import blogSlice from './features/blogSlice';
import eventSlice from './features/eventSlice';
import teamSlice from './features/teamSlice';
import categorySlice from './features/categorySlice';
import courseDetailsSlice from './features/courseDetailsSlice';
import cartSlice from './features/cartSlice';
import myOrderSlice from './features/myOrderSlice';
import { apiSlice } from './api/apiSlice';
import servicesSlice from './features/servicesSlice';
import homesSlice from './features/homesSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    services:servicesSlice,
    homes:homesSlice,
    // employees:employeeSlice,
    courses: coursesSlice,
    blogs: blogSlice,
    events: eventSlice,
    teams: teamSlice,
    category: categorySlice,
    courseDetails : courseDetailsSlice,
    cart:cartSlice,
    order:myOrderSlice,
  },
  middleware:(getDefaultMiddleware) => 
  getDefaultMiddleware().concat(apiSlice.middleware)
})