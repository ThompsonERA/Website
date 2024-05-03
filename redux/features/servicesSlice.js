import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Get all services
export const servicesData = createAsyncThunk(
    'services/fetchServices',
    async () => {
      const response = await fetch('https://localhost:4002/homes/services/all-services')
      const data = response.json();
      return data;
    }
)
// Get single service
export const singleService = createAsyncThunk(
    'service/fetchService',
    async (id = '622037c6ea7975d304b6b4ef') => {
      const response = await fetch(`https://localhost:4002/services/${id}`)
      const event = response.json();
      return event;
    }
)
// servicesSlice
export const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    allServices : [],
    status:'',
    service:{},
    serviceStatus:'',
    searchValue:'',
    searchServicesItems:[],
  },
  reducers: {
    searchText: (state, {payload}) => {
      state.searchValue= payload;
      state.searchServicesItems = state.allServices.filter(service => service.title
      .toLowerCase().includes(payload.toLowerCase()))
    },
  },
  extraReducers: (builder) => {
    // All services
    builder.addCase(servicesData.fulfilled, (state, action) => {
      state.allServices = action.payload
      state.status = 'fulfilled'
    }),
    builder.addCase(servicesData.pending, (state, action) => {
      state.status = 'pending'
    })
    // Single service
    builder.addCase(singleService.fulfilled, (state, action) => {
      state.service = action.payload
      state.serviceStatus = 'fulfilled'
    }),
    builder.addCase(singleService.pending, (state, action) => {
        state.serviceStatus = 'pending'
    })
  },
})
export const { searchText } = servicesSlice.actions
export default servicesSlice.reducer