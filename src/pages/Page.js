import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/Page";
import { PageHero, Products, FiltersPanel, Loader } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProducts,
  updateFilter,
} from "../features/product/productSlice";

const Page = () => {
  const page = window.location.pathname;

  const {
    isLoading,
    animal,
    search,
    sort,
    type,
    brand,
    products,
    filteredProducts,
  } = useSelector((store) => store.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    if (page === "/dog") {
      dispatch(updateFilter({ name: "animal", value: "dog" }));
      return;
    }
    if (page === "/cat") {
      dispatch(updateFilter({ name: "animal", value: "cat" }));
      return;
    }
    dispatch(updateFilter({ name: "animal", value: null }));
  }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, [animal, sort, brand, type]);

  return (
    <Wrapper className="container--max">
      {/* for dog PAGE */}
      {page === "/dog" && (
        <>
          <div className="page-container">
            <FiltersPanel />
            <div>
              <PageHero page={"for dogs"} type={"page"} />
              {isLoading && <Loader color="white" />}
              {!isLoading && <Products products={filteredProducts} />}
            </div>
          </div>
          <div className="background background--1"></div>
        </>
      )}
      {page === "/cat" && <div className="background background--2"></div>}
      {page === "/all" && <div className="background background--3"></div>}
      {page === "/about" && <div className="background background--4"></div>}
    </Wrapper>
  );
};

export default Page;
