import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "@/status";

const URL = 'https://dummyjson.com/products/search?q=';

const initialState = {
    searchedProducts: [],
    searchProductsStatus: STATUS.IDLE
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        clearSearch: (state, action) => {
            state.searchedProducts = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchSearchProduct.pending, (state, action) => {
            state.searchProductsStatus = STATUS.LOADING;
        })

        .addCase(fetchSearchProduct.fulfilled, (state, action) => {
            state.searchedProducts = action.payload;
            state.searchProductsStatus = STATUS.SUCCEEDED;
        })

        .addCase(fetchSearchProduct.rejected, (state, action) => {
            state.searchProductsStatus = STATUS.FAILED;
        })
    }
})

export const fetchSearchProduct = createAsyncThunk('product-search/fetch', async(searchTerm) => {
    const response = await fetch(`${URL}${searchTerm}`);
    const data = await response.json();
    return data.products;
});

export const { setSearchTerm, clearSearch } = searchSlice.actions;
export const getSearchedProducts = (state) => state.search.searchedProducts;
export const getSearchProductsStatus = (state) => state.search.searchProductsStatus;
export default searchSlice.reducer;