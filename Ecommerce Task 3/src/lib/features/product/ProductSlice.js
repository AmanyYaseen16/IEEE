import { createAsyncThunk,  createSlice } from "@reduxjs/toolkit";
import {STATUS} from "../../../status.js";

const URL = 'https://dummyjson.com/products';

const initialState = {
    products:[],
    productStatus: STATUS.IDLE,
    productSingle: null,
    productSingleStatus: STATUS.IDLE
}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state, action) => {
            state.productStatus = STATUS.LOADING;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.productStatus = STATUS.SUCCEEDED;
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.productStatus = STATUS.FAILED;
        })
        .addCase(fetchProductSingle.pending, (state, action) => {
            state.productSingleStatus = STATUS.LOADING;
        })
        .addCase(fetchProductSingle.fulfilled, (state, action) => {
            state.productSingleStatus = STATUS.SUCCEEDED;
            state.productSingle = action.payload;
        })
        .addCase(fetchProductSingle.rejected, (state,action) => {
            state.productSingleStatus = STATUS.FAILED;
            state.productSingle = null;
        })
    }
});

export const fetchProducts = createAsyncThunk('products/fetch', async(limit) => {
    const response = await fetch(`${URL}?limit=${limit}`);  // get limited list of products 
    const data = await response.json();
    return data.products;
});

export const fetchProductSingle = createAsyncThunk('product-single/fetch', async(id) => {
    console.log("Fetching product with ID:", id); // Log ID
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    console.log("Response Status:", response.status); // Log response status
    return data;
});

export const getProducts = (state) => state.product.products;
export const getProductsStatus = (state) => state.product.productStatus;
export const getProductSingle = (state) => state.product.productSingle;
export const getSingleProductStatus = (state) => state.product.productSingleStatus;
export default productSlice.reducer;