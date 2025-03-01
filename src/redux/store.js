import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../redux/counter/changeSlice";
import userReducer from "./user/userSlice";
import saveReducer from "./idk/Idk";
import dealReducer from './deal/dealSlice';
import productsReducer from './products/productsSlice';
import categoryReducer from './categories/categorySlice';
import Category from "../components/cotegory/Cotegory";
const store = configureStore({
  reducer: {
    colors: colorReducer,
    user: userReducer,
    idk: saveReducer,
    deal: dealReducer,
    products: productsReducer,
    category: categoryReducer,
  },
});

export default store;
