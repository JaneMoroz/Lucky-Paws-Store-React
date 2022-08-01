import React, { useState } from "react";
import { FormRow, FormRowSelect } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addNewProduct } from "../../features/product/productSlice";

const AddProduct = () => {
  const { isLoading } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  const [productData, setProductData] = useState({
    name: "",
    brand: "",
    animal: "All",
    type: "Other",
    subType: "",
    price: "",
    countInStock: "",
    feature1: "",
    feature2: "",
    feature3: "",
    feature4: "",
    primaryImage: "",
    otherImage: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let {
      name,
      brand,
      animal,
      type,
      subType,
      primaryImage,
      otherImage,
      countInStock,
      price,
      feature1,
      feature2,
      feature3,
      feature4,
    } = productData;
    if (!name || !animal || !type || !primaryImage || !countInStock || !price) {
      toast.error(
        "Product Name, Animal, Type, Primary Image, Count in Stock and Price are necessary!"
      );
      return;
    }

    if (animal.toLowerCase() === "all") {
      animal = ["cat", "dog"];
    }

    if (brand === "") {
      brand = "lucky paws";
    }

    const newProduct = {
      name: name.toLowerCase(),
      brand: brand,
      animal: animal,
      type: type.toLowerCase(),
      subType: subType.toLowerCase(),
      price: price,
      countInStock: countInStock,
      features: [],
      primaryImage: primaryImage,
      otherImages: [],
    };

    [feature1, feature2, feature3, feature4].forEach((feature) => {
      if (feature !== "") {
        newProduct.features.push(feature);
      }
    });

    if (brand !== "") {
      newProduct.brand = brand.toLowerCase();
    }

    if (otherImage !== "") {
      newProduct.otherImages.push(otherImage);
    }

    dispatch(addNewProduct(newProduct));
    setProductData({
      name: "",
      brand: "",
      animal: "All",
      type: "Other",
      subType: "",
      price: "",
      countInStock: "",
      feature1: "",
      feature2: "",
      feature3: "",
      feature4: "",
      primaryImage: "",
      otherImage: "",
    });
  };

  return (
    <section>
      <h2>Add New Product</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={productData.name}
            handleChange={handleChange}
            placeholderText="Product name"
          />
          <FormRow
            type="text"
            name="brand"
            value={productData.brand}
            handleChange={handleChange}
          />
          <FormRowSelect
            labelText="Select animal"
            name="animal"
            value={productData.animal}
            handleChange={handleChange}
            list={["All", "Cat", "Dog"]}
          />
          <FormRowSelect
            labelText="Select Type"
            name="type"
            value={productData.type}
            handleChange={handleChange}
            list={["Other", "Feeders", "Toys", "Clothes", "Food", "Beds"]}
          />
          <FormRow
            type="text"
            name="subType"
            value={productData.subType}
            handleChange={handleChange}
          />
          <FormRow
            type="number"
            name="price"
            value={productData.price}
            handleChange={handleChange}
          />
          <FormRow
            type="number"
            name="countInStock"
            value={productData.countInStock}
            handleChange={handleChange}
            placeholderText="count in stock"
          />
          {/* features */}
          <FormRow
            type="text"
            name="feature1"
            value={productData.feature1}
            handleChange={handleChange}
            placeholderText="feature 1"
          />
          <FormRow
            type="text"
            name="feature2"
            value={productData.feature2}
            handleChange={handleChange}
            placeholderText="feature 2"
          />
          <FormRow
            type="text"
            name="feature3"
            value={productData.feature3}
            handleChange={handleChange}
            placeholderText="feature 3"
          />
          <FormRow
            type="text"
            name="feature4"
            value={productData.feature4}
            handleChange={handleChange}
            placeholderText="feature 4"
          />
          {/* images */}
          <FormRow
            type="text"
            name="primaryImage"
            value={productData.primaryImage}
            handleChange={handleChange}
            placeholderText="primary image url"
          />
          <FormRow
            type="text"
            name="otherImage"
            value={productData.otherImage}
            handleChange={handleChange}
            placeholderText="other image url"
          />
        </div>
        <button
          type="submit"
          className="btn btn--outlined"
          disabled={isLoading}
        >
          {isLoading ? "adding..." : "add"}
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
