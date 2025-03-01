import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const API = 'https://api.escuelajs.co/api/v1/categories';

export const getCategoryProducts = createAsyncThunk(
    "categoryProducts/getCategoryProducts",
    async (id, thunkAPI) => {
        try {
            const res = await axios.get(`${API}/${id}/products`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const categoryProductsSlice = createSlice({
    name: "categoryProducts",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearProducts: (state) => {
            state.products = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategoryProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategoryProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getCategoryProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearProducts } = categoryProductsSlice.actions;
export default categoryProductsSlice.reducer;
