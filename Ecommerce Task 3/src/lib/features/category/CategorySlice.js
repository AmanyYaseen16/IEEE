import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../../status";


const URL = 'https://dummyjson.com/';
const initialState = {
    categories: [],
    categoriesStatus: STATUS.IDLE,
    categoryProducts: [],
    categoryProductsStatus: STATUS.IDLE
}

const CategorySlice = createSlice({
    name:'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategories.pending, (state, action) => {
            state.categoriesStatus = STATUS.LOADING;
        })

        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.categoriesStatus = STATUS.SUCCEEDED;
        })

        .addCase(fetchCategories.rejected, (state, action) => {
            state.categoriesStatus = STATUS.FAILED;
        })
        .addCase(fetchCategoryProducts.pending, (state, action) => {
            state.categoryProductsStatus = STATUS.LOADING;
        })

        .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
            state.categoryProducts = action.payload;
            state.categoryProductsStatus = STATUS.SUCCEEDED;
        })

        .addCase(fetchCategoryProducts.rejected, (state, action) => {
            state.categoryProductsStatus = STATUS.FAILED;
        })
    }
})

export const fetchCategories = createAsyncThunk('categories/fetch', async() => {
    const response = await fetch(`${URL}products/category-list`);
    const data = await response.json();
    return data;
});
export const fetchCategoryProducts = createAsyncThunk('category-products/fetch', async(category) => {
    const response = await fetch(`${URL}products/category/${category}`);
    const data = await response.json();
    return data.products;
});


export const getCategories = (state) => state.category.categories; //selector to access the state
export const getCategoryProducts = (state) => state.category.categoryProducts;
export const getCategoryProductsStatus = (state) => state.category.categoryProductsStatus;
export default CategorySlice.reducer;