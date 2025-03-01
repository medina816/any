import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../redux/counter/changeSlice";
import userReducer from "./user/userSlice";
import saveReducer from "./idk/Idk";
import dealReducer from './deal/dealSlice';
import productsReducer from './products/productsSlice';
import categoriesReducer from './categories/categoriesSlice'
import categoryProductsReducer from './categoryProduct/categoryProductsSlice'
const store = configureStore({
  reducer: {
    colors: colorReducer,
    user: userReducer,
    idk: saveReducer,
    deal: dealReducer,
    products: productsReducer,
    categories: categoriesReducer,
   categoryProducts: categoryProductsReducer,
  },
});

export default store;
