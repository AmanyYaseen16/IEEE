import {configureStore} from "@reduxjs/toolkit"; //to combine the slices into a single store
import productReducer from "./features/product/ProductSlice.js";
import categoryReducer from "./features/category/CategorySlice.js";
import cartReducer from "./features/cart/CartSlice.js";
import sidebarReducer from "./features/sidebar/SidebarSlice.js"
import searchReducer from "./features/search/SearchSlice.js"


export const makeStore = () => {
    return configureStore({
        reducer: {
            product: productReducer,
            category: categoryReducer,
            cart: cartReducer,
            sidebar: sidebarReducer,
            search: searchReducer,
        } 
       
    });
}






