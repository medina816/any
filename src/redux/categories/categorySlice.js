import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API endpoint для получения категорий
const API_CATEGORIES = "https://api.escuelajs.co/api/v1/categories";

// Асинхронный экшен для получения категорий
export const getCategories = createAsyncThunk(
    "category/getCategories", // Уникальное имя экшена
    async (_, thunkAPI) => {
        try {
            // Запрос категорий
            const res = await axios.get(API_CATEGORIES);
            return res.data; // Возвращаем полученные категории
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Асинхронный экшен для получения продуктов по ID категории
export const getCategory = createAsyncThunk(
    "category/getCategoryById", // Уникальное имя экшена
    async (id, thunkAPI) => {
        try {
            // Запрос продуктов для выбранной категории
            const res = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
            return res.data; // Возвращаем полученные продукты
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Создание слайса с состоянием
const categorySlice = createSlice({
    name: "category", 
    initialState: {
        category: [], 
        products: [], 
        error: null,
        loading: false 
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
   
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
                state.error = null; 
            })
         
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.category = action.payload; 
            })
       
            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; 
            })
            .addCase(getCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload; 
            })

            .addCase(getCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default categorySlice.reducer; 
