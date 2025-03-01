import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

let API = 'https://randomuser.me/api?results=30';

export const fetchUsers = createAsyncThunk(
  'users/fetch',
  async () => {
    try {
      const response = await axios.get(API);
      return response.data.results;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const saveSlice = createSlice({
  name: 'idk',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default saveSlice.reducer;
