import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/product/productSlice";
import { Loader, ManageItems, FormRow } from "../../components";

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
    setProductsData({ ...productsData, products });
  }, []);

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
      <div>
        <h2>Manage Products</h2>
        <div className="container">
          <button className="btn btn--outlined">Add new product</button>
          <FormRow
            type="text"
            name="search"
            value={productsData.search}
            handleChange={handleChange}
          />
          <p className="empty">There are no products yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Manage Products</h2>
      <div className="container">
        <button className="btn btn--outlined">Add new product</button>
        <FormRow
          type="text"
          name="search"
          value={productsData.search}
          handleChange={handleChange}
        />
        <ManageItems items={productsData.products} type="products" />
      </div>
    </div>
  );
};

export default ManageProducts;
