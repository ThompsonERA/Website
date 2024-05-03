import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
 
export const servicesDetailsData = createAsyncThunk(
  'services/fetchServiceDetails',
  async (id) => {
    const response = await fetch(`https://eduker-server.onrender.com/services/${id}`);
    const data = response.json();
    return data;
  }
);
 
export const servicesDetailsSlice = createSlice({
  name: 'services',
  initialState: {
    serviceDetails: {
      title: '',  
      description: '', 
      cost: 0,  
    },
    status: '',
  },
  reducers: {
 
    updateServiceDetails: (state, action) => {
      state.serviceDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(servicesDetailsData.fulfilled, (state, action) => {
        state.serviceDetails = action.payload;  
        state.status = 'fulfilled';
      })
      .addCase(servicesDetailsData.pending, (state) => {
        state.status = 'pending';
      });
 
  },
});
 
export const { updateServiceDetails } = servicesDetailsSlice.actions;
 
export default servicesDetailsSlice.reducer;