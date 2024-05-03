import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Async thunk for fetching all homes
export const fetchHomes = createAsyncThunk(
  'homes/fetchHomes',
  async () => {
    const response = await fetch('https://localhost:4002/homes/all-homes');
    const data = await response.json();
    return data;
  }
);
// Async thunk for fetching a single home by ID
export const fetchHomeById = createAsyncThunk(
  'homes/fetchHomeById',
  async (id) => {
    const response = await fetch(`https://your-api-endpoint.com/homes/home/${id}`);
    const data = await response.json();
    return data;
  }
);
// Async thunk for creating a new home
export const createHome = createAsyncThunk(
  'homes/createHome',
  async (homeDetails) => {
    const response = await fetch('https://localhost:4002/homes/create-home', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(homeDetails),
    });
    const data = await response.json();
    return data;
  }
);
// Async thunk for deleting a home by ID
export const deleteHome = createAsyncThunk(
  'homes/deleteHome',
  async (id) => {
    await fetch(`https://localhost:4002/homes/delete-home/${id}`, {
      method: 'DELETE',
    });
    return id;
  }
);
// Define the initial state for the homes slice
const initialState = {
  homes: [],
  // You can add more fields to the initial state as needed
};
const homesSlice = createSlice({
  name: 'homes',
  initialState,
  reducers: {
    // Reducers for synchronous actions can be added here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomes.fulfilled, (state, action) => {
        state.homes = action.payload;
      })
      .addCase(createHome.fulfilled, (state, action) => {
        state.homes.push(action.payload);
      })
      .addCase(deleteHome.fulfilled, (state, action) => {
        state.homes = state.homes.filter(home => home.id !== action.payload);
      });
      // Make sure to handle rejected cases for the async thunks if needed
  },
});
export default homesSlice.reducer;