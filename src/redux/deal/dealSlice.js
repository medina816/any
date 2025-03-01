import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/categories";

export const fetchCategories = createAsyncThunk(
    "deal/fetchCategories",  
    async (_, thunkAPI) => {
        console.log("fetchCategories started");  
        try {
            const res = await axios.get(API);
            console.log("Fetched categories:", res.data); 
            return res.data;
        } catch (error) {
            console.error("Fetch error:", error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const dealSlice = createSlice({
    name: "deal",
    initialState: {
        categories: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default dealSlice.reducer;
