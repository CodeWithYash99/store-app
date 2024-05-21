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
    addRandomSearchData: (state, action) => {
      state.randomSearchData.push(action.payload);
    },
    addItemToCart: (state, action) => {
      const cartItem = state.productsData.find((p) => p.id === action.payload);
      state.cartData.push(cartItem);
    },
    addItemToWishList: (state, action) => {
      const cartItem = state.cartData.filter(
        (item) => item.id !== action.payload
      );
      state.cartData.splice(0, state.cartData.length);
      state.cartData.push(...cartItem);

      const saveItem = state.productsData.find((p) => p.id === action.payload);
      state.wishListData.push(saveItem);
    },
    addItemToOrders: (state, action) => {
      const orderItem = state.productsData.find((p) => p.id === action.payload);
      state.ordersData.push(orderItem);

      const cartItem = state.cartData.filter((p) => p.id !== action.payload);
      state.cartData.splice(0, state.cartData.length);
      state.cartData.push(...cartItem);
    },
    removeItemFromCart: (state, action) => {
      const cartItem = state.cartData.filter(
        (item) => item.id !== action.payload
      );
      state.cartData.splice(0, state.cartData.length);
      state.cartData.push(...cartItem);

      const saveItem = state.wishListData.filter(
        (item) => item.id !== action.payload
      );
      state.wishListData.splice(0, state.wishListData.length);
      state.wishListData.push(...saveItem);
    },
    removeItemFromWishList: (state, action) => {
      const saveItem = state.wishListData.find((p) => p.id === action.payload);
      state.cartData.push(saveItem);

      const filterData = state.wishListData.filter(
        (p) => p.id !== action.payload
      );
      state.wishListData.splice(0, state.wishListData.length);
      state.wishListData.push(...filterData);
    },
    removeItemFromOrders: (state, action) => {
      const orderItem = state.ordersData.filter((p) => p.id !== action.payload);
      state.ordersData.splice(0, state.ordersData.length);
      state.ordersData.push(...orderItem);
    },
    clearRandomSearchData: (state) => {
      state.randomSearchData.pop();
    },
  },
});

export const {
  productSearch,
  addItemToCart,
  addItemToWishList,
  addItemToOrders,
  addRandomSearchData,
  removeItemFromCart,
  removeItemFromWishList,
  removeItemFromOrders,
  clearRandomSearchData,
} = productSlice.actions;

export default productSlice.reducer;
