import React from "react";
import Wrapper from "../assets/wrappers/FiltersPanel";
import { BsGrid3X2GapFill, BsList } from "react-icons/bs";

const FiltersPanel = () => {
  return (
    <Wrapper>
      <div className="filters-container">
        <div>
          {/* total found */}
          <p className="total">11 products found</p>
          <div className="display-filter">
            <button className="btn icon">
              <BsGrid3X2GapFill />
            </button>
            <button className="btn icon">
              <BsList />
            </button>
          </div>
          {/* sort */}
          <form className="form">
            <label htmlFor="sort" className="form-label">
              sort by
            </label>
            <select name="sort" id="sort" className="form-input">
              <option value="price-lowest">price (lowest)</option>
              <option value="price-highest">price (highest)</option>
              <option value="name-a">name (a-z)</option>
              <option value="name-z">name (z-a)</option>
            </select>
          </form>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            {/* search */}
            <div className="form-control search">
              <label htmlFor="search" className="form-label">
                search
              </label>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search"
                className="form-input"
              />
            </div>
          </form>
        </div>
        <form className="form">
          <div className="form-control">
            <p className="form-label">category</p>
            <div className="btns-container">
              <button name="category" type="button" className="btn category">
                toys
              </button>
              <button name="category" type="button" className="btn category">
                feeders
              </button>
              <button name="category" type="button" className="btn category">
                clothes
              </button>
            </div>
          </div>
          {/* brand */}
          <div className="form-control">
            <label htmlFor="sort" className="form-label">
              Brand
            </label>
            <select name="sort" id="sort" className="form-input">
              <option value="luckyPaws">lucky paws</option>
              <option value="coco">coco</option>
              <option value="chanel">chanel</option>
              <option value="paw paw">paw paw</option>
            </select>
          </div>
        </form>
        <button type="button" className="btn clear">
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

export default FiltersPanel;
