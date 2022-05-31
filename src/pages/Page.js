import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/Page";
import { PageHero, Products } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/product/productSlice";

const Page = () => {
  const page = window.location.pathname;

  // for cats
  const { isLoading, products } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Wrapper>
      {page === "/dog" && (
        <>
          <div className="page-container">
            <h1>Filters Panel</h1>
            <div>
              <PageHero page={"for dogs"} type={"page"} />
              <Products products={products} />
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
