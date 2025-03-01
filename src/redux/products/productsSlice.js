import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/products";

export const fetchProducts = createAsyncThunk(
    "products/fetch",
    async (_, thunkAPI) => { 
        try {
            const response = await axios.get(API);
            console.log("Fetched products:", response.data)
            return response.data;
        } catch (error) {
            console.log("Error fetching products:", error.message)
        }
    }
)


export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    }
});

export default productSlice.reducer;
