import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_CATEGORIES = "https://api.escuelajs.co/api/v1/categories";


export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(API_CATEGORIES);
            return res.data;
        } catch (error) {
         
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        list: [],       
        loading: false,
        error: null,   
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Пока идет загрузка
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Когда данные загружены
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            // Если произошла ошибка
            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default categoriesSlice.reducer;
