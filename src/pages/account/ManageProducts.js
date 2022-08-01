import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/product/productSlice";
import { Loader, ManageItems, FormRow } from "../../components";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const { isLoading, products } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  const [productsData, setProductsData] = useState({
    products: products || [],
    search: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductsData({ ...productsData, [name]: value });
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    if (products.length !== 0) {
      setProductsData({ ...productsData, products });
    }
  }, [products]);

  useEffect(() => {
    if (productsData.search) {
      const newProducts = products.filter((product) =>
        product.name.toLowerCase().includes(productsData.search.toLowerCase())
      );
      setProductsData({ ...productsData, products: newProducts });
    }
    if (productsData.search === "") {
      setProductsData({ ...productsData, products });
    }
  }, [productsData.search]);

  if (isLoading) {
    return <Loader />;
  }

  if (productsData.products.length === 0) {
    return (
      <section className="container--outlet">
        <h2>Manage Products</h2>
        <div className="container">
          <button className="btn btn--outlined">Add new product</button>
          <p className="empty">There are no products.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container--outlet">
      <h2>Manage Products</h2>
      <div className="container">
        <Link to="add-product" className="btn btn--outlined">
          Add new product
        </Link>
        <form>
          <FormRow
            type="text"
            name="search"
            value={productsData.search}
            handleChange={handleChange}
          />
        </form>
        <ManageItems items={productsData.products} type="products" />
      </div>
    </section>
  );
};

export default ManageProducts;
