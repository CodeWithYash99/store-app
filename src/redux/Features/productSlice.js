import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsData = createAsyncThunk(
  "fetchProductsData",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);

const initialState = {
  search: "",
  productsData: [],
  randomSearchData: [],
  cartData: [],
  wishListData: [],
  ordersData: [],
  isLoading: false,
  isError: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProductsData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductsData.fulfilled, (state, action) => {
      state.productsData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProductsData.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
  reducers: {
    productSearch: (state, action) => {
      state.search = action.payload;
    },
    addItemToCart: (state, action) => {
      state.cartData.push(action.payload);
    },
    addRandomSearchData: (state, action) => {
      state.randomSearchData.push(action.payload);      
    },
    clearRandomSearchData: (state) => {
      state.randomSearchData.pop();
    },
  },
});

export const {
  productSearch,
  addItemToCart,
  addRandomSearchData,
  clearRandomSearchData,
} = productSlice.actions;

export default productSlice.reducer;