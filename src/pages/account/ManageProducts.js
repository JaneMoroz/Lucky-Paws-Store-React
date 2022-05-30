import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/product/productSlice";
import { Loader, ManageItems } from "../../components";

const ManageProducts = () => {
  const { isLoading, products } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (products.length === 0) {
    return (
      <div>
        <h2>Manage Products</h2>
        <div className="container">
          <p className="empty">There are no products yet.</p>
          <button className="btn btn--outlined">Add new product</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Manage Products</h2>
      <div className="container">
        <button className="btn btn--outlined">Add new product</button>
        <ManageItems items={products} type="products" />
      </div>
    </div>
  );
};

export default ManageProducts;
