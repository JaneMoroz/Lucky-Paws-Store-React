import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/FiltersPanel";
import { BsGrid3X2GapFill, BsList } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { HiOutlineFilter } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  setGrid,
  setList,
  updateFilter,
  clearFilters,
  openFiltersPanel,
  closeFiltersPanel,
} from "../features/product/productSlice";

const FiltersPanel = () => {
  const dispatch = useDispatch();
  const {
    grid_view,
    isLoading,
    isFiltersPanelOpen,
    animal,
    sort,
    type,
    brand,
    products,
    filteredProducts,
  } = useSelector((store) => store.product);

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleFilter = (e) => {
    if (isLoading) return;
    let name = e.target.name;
    let value = e.target.value;
    if (name === "type") {
      value = e.target.textContent;
    }
    dispatch(updateFilter({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  useEffect(() => {
    // get categories/types
    let tempCategories = [];
    tempCategories = products
      .map((product) => {
        if (animal !== null) {
          if (product.animal.includes(animal)) {
            return product.type;
          }
        } else {
          return product.type;
        }
      })
      .filter((product) => product !== undefined);
    setCategories(["all", ...new Set(tempCategories)]);

    // get brands
    let tempBrands = [];
    tempBrands = products
      .map((product) => {
        if (animal !== null) {
          if (product.animal.includes(animal)) {
            return product.brand;
          }
        } else {
          return product.brand;
        }
      })
      .filter((product) => product !== undefined);
    setBrands(["all", ...new Set(tempBrands)]);
  }, [products]);

  return (
    <Wrapper>
      <div className={`filters-hidden ${isFiltersPanelOpen ? "hidden" : ""}`}>
        <button
          className="btn close"
          onClick={() => dispatch(openFiltersPanel())}
        >
          <HiOutlineFilter />
        </button>
      </div>
      <form
        className={`filters-container ${isFiltersPanelOpen ? "" : "hidden"}`}
        onSubmit={(e) => e.preventDefault()}
      >
        <button
          className="btn close"
          onClick={() => dispatch(closeFiltersPanel())}
        >
          <MdClose />
        </button>

        <div className="form-control">
          {/* total found */}
          <p className="total">{filteredProducts.length} products found</p>
          {/* display options */}
          <div className="display-filter">
            <button
              onClick={() => dispatch(setGrid())}
              className={`btn icon ${grid_view ? "active" : ""}`}
            >
              <BsGrid3X2GapFill />
            </button>
            <button
              onClick={() => dispatch(setList())}
              className={`btn icon ${grid_view ? "" : "active"}`}
            >
              <BsList />
            </button>
          </div>
          {/* sort */}
          <div className="form-control">
            <label htmlFor="sort" className="form-label">
              sort by
            </label>
            <select
              name="sort"
              id="sort"
              className="form-input"
              onChange={handleFilter}
              value={sort}
            >
              <option value="+price">price (lowest)</option>
              <option value="-price">price (highest)</option>
              <option value="+name">name (a-z)</option>
              <option value="-name">name (z-a)</option>
            </select>
          </div>
        </div>
        {/* category/type */}
        <div className="form-control category-container">
          <p className="form-label">category</p>
          <div className="btns-container">
            {categories.map((category, index) => {
              return (
                <button
                  key={index}
                  onClick={handleFilter}
                  name="type"
                  type="button"
                  className={`btn category ${
                    category === type ? "active" : ""
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        {/* brand */}
        <div className="form-control">
          <label htmlFor="brand" className="form-label">
            Brand
          </label>
          <select
            name="brand"
            id="brand"
            className="form-input"
            onChange={handleFilter}
            value={brand}
          >
            {brands.map((brand, index) => {
              return (
                <option key={index} value={brand}>
                  {brand}
                </option>
              );
            })}
          </select>
        </div>
        <button type="button" className="btn clear" onClick={handleSubmit}>
          clear filters
        </button>
      </form>
    </Wrapper>
  );
};

export default FiltersPanel;
