import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let API = "https://restcountries.com/v3.1/all?fields=name,flags";

export const countryFetch = createAsyncThunk (
    "country/flag",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(API);
            
           return res.data
            } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
const userSlice = createSlice({
    name: "country",
    initialState: { 
        country: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(countryFetch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(countryFetch.fulfilled, (state, action) => {
                state.loading = false;
                state.country = action.payload;
            })
            .addCase(countryFetch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export default userSlice.reducer;