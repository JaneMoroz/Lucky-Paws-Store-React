import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/ProductsPage";
import { PageHero, Products, FiltersPanel, Loader } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProducts,
  updateFilter,
  clearFilters,
} from "../features/product/productSlice";
import { useState } from "react";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { isLoading, animal, sort, type, brand, filteredProducts } =
    useSelector((store) => store.product);
  const page = window.location.pathname;

  const [productsPageType, setProductsPageType] = useState("all");

  useEffect(() => {
    dispatch(getAllProducts());
    if (page === "/dog") {
      dispatch(clearFilters());
      dispatch(updateFilter({ name: "animal", value: "dog" }));
      setProductsPageType("dogs");
      return;
    }
    if (page === "/cat") {
      dispatch(clearFilters());
      dispatch(updateFilter({ name: "animal", value: "cat" }));
      setProductsPageType("cats");
      return;
    } else if (page === "/all") {
      dispatch(updateFilter({ name: "animal", value: null }));
      setProductsPageType("all");
    }
  }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, [animal, sort, brand, type]);

  return (
    <Wrapper className="container--max">
      <div className="page-container">
        <FiltersPanel />
        <div>
          <PageHero page={`for ${productsPageType}`} type={"products"} />
          {isLoading && <Loader color="white" />}
          {!isLoading && <Products products={filteredProducts} />}
        </div>
      </div>
      <div className={`background background--${productsPageType}`}></div>
    </Wrapper>
  );
};

export default ProductsPage;
