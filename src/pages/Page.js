import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/Page";
import { PageHero, Products, FiltersPanel, Loader } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProducts,
  updateFilter,
  clearFilters,
} from "../features/product/productSlice";
import img1 from "../assets/images/about-1.jpg";
import img2 from "../assets/images/about-2.jpg";
import img3 from "../assets/images/about-3.jpg";
import { Link } from "react-router-dom";

const Page = () => {
  const page = window.location.pathname;

  const { isLoading, animal, sort, type, brand, filteredProducts } =
    useSelector((store) => store.product);

  const dispatch = useDispatch();

  useEffect(() => {
    if (page !== "/about") {
      dispatch(getAllProducts());
    }
    if (page === "/dog") {
      dispatch(clearFilters());
      dispatch(updateFilter({ name: "animal", value: "dog" }));
      return;
    }
    if (page === "/cat") {
      dispatch(clearFilters());
      dispatch(updateFilter({ name: "animal", value: "cat" }));
      return;
    } else if (page === "/all") {
      dispatch(updateFilter({ name: "animal", value: null }));
    }
  }, []);

  useEffect(() => {
    if (page !== "/about") {
      dispatch(getProducts());
    }
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
      {/* for cat PAGE */}
      {page === "/cat" && (
        <>
          <div className="page-container">
            <FiltersPanel />
            <div>
              <PageHero page={"for cats"} type={"page"} />
              {isLoading && <Loader color="white" />}
              {!isLoading && <Products products={filteredProducts} />}
            </div>
          </div>
          <div className="background background--2"></div>
        </>
      )}
      {/* ALL products PAGE */}
      {page === "/all" && (
        <>
          <div className="page-container">
            <FiltersPanel />
            <div>
              <PageHero page={"for all"} type={"page"} />
              {isLoading && <Loader color="white" />}
              {!isLoading && <Products products={filteredProducts} />}
            </div>
          </div>
          <div className="background background--3"></div>
        </>
      )}
      {page === "/about" && (
        <>
          <div className="about-container">
            <div className="gallery">
              <div className="img img--1">
                <img src={img1} alt="Our Store" />
                <div className="image-overlay"></div>
              </div>
              <div className="img img--2">
                <img src={img2} alt="Lucy and her cat" />
                <div className="image-overlay"></div>
              </div>
              <div className="img img--3">
                <img src={img3} alt="Lucy's cat - Boris" />
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="text">
              <p className="main">
                Hi! My name is Lucy and I'm an owner of Lucky Paws Store.
              </p>
              <p className="secondary">
                One of the greatest advantages in starting a pet shop business
                is a chance to share your animal passion with others. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Quas,
                architecto iusto suscipit provident commodi neque tempora
                aperiam nobis dolore, eos debitis eligendi aut ipsa consequatur
                est repellat! Ducimus, modi sint?
              </p>
              <Link to="/all" className="btn btn--outlined">
                Back to store
              </Link>
            </div>
          </div>
          <div className="background background--4"></div>
        </>
      )}
    </Wrapper>
  );
};

export default Page;
