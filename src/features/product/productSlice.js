import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { toast } from "react-toastify";

const initialFiltersState = {
  animal: null,
  grid_view: false,
  sort: "-price",
  type: "all",
  brand: "all",
};

const initialState = {
  isLoading: false,
  isFiltersPanelOpen: true,
  products: [],
  filteredProducts: [],
  product: null,
  ...initialFiltersState,
};

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get("/products");
      const productsData = res.data.data.data;
      return { productsData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkAPI) => {
    const { animal, sort, type, brand } = thunkAPI.getState().product;
    const url = `/products?sort=${sort}${animal ? `&animal=${animal}` : ""}${
      type !== "all" ? `&type=${type}` : ""
    }${brand !== "all" ? `&brand=${brand}` : ""}`;
    try {
      const res = await customFetch.get(url);
      const productsData = res.data.data.data;
      return { productsData };
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.get(`/products/${id}`);
      const productData = res.data.data.data;
      return { productData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addNewProduct = createAsyncThunk(
  "product/addNewProduct",
  async (product, thunkAPI) => {
    try {
      const res = await customFetch.post("/products", product);
      const productData = res.data.data.data;
      return { productData };
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId, thunkAPI) => {
    try {
      await customFetch.delete(`/products/${productId}`);
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setGrid: (state) => {
      state.grid_view = true;
    },
    setList: (state) => {
      state.grid_view = false;
    },
    openFiltersPanel: (state) => {
      state.isFiltersPanelOpen = true;
    },
    closeFiltersPanel: (state) => {
      state.isFiltersPanelOpen = false;
    },
    updateFilter: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearFilters: (state) => {
      return {
        ...state,
        sort: "-price",
        sortOptions: ["-price", "+price", "+name", "-name"],
        type: "all",
        brand: "all",
      };
    },
  },
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.products = payload.productsData;
      state.isLoading = false;
    },
    [getAllProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getProductById.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductById.fulfilled]: (state, { payload }) => {
      state.product = payload.productData;
      state.isLoading = false;
    },
    [getProductById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [addNewProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [addNewProduct.fulfilled]: (state, { payload }) => {
      toast.success(`${payload.productData.name} is added`);
      state.isLoading = false;
    },
    [addNewProduct.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.filteredProducts = payload.productsData;
      state.isLoading = false;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteProduct.fulfilled]: (state, { payload }) => {
      toast.success(`Product is deleted`);
      state.isLoading = false;
    },
    [deleteProduct.rejected]: (state, { payload }) => {
      toast.error(payload);
      state.isLoading = false;
    },
  },
});

export const {
  setGrid,
  setList,
  updateFilter,
  clearFilters,
  openFiltersPanel,
  closeFiltersPanel,
} = productSlice.actions;

export default productSlice.reducer;
