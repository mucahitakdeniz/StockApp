import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    sales: [],
    firms: [],
    purchases: [],
    products: [],
    brands: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getFirmSSuccess: (state, { payload }) => {
      state.loading = false;
      state.firms = payload;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getFirmSSuccess,
  fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;
