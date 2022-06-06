import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Cart";
import { useSelector, useDispatch } from "react-redux";
import { FormRow, PageHero } from "../components";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { toast } from "react-toastify";

const Cart = () => {
  const { cartItems, subtotal, taxes, shippingPrice, total, isLoading } =
    useSelector((store) => store.cart);

  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { address, city, postalCode, country } = shippingAddress;
    if (!address || !city || !postalCode || !country) {
      toast.error("please fill out all address fields");
      return;
    }
  };

  return (
    <Wrapper className="container--max">
      <PageHero page={"cart"} />
      <div className="cart-container">
        {cartItems.map((cartItem, index) => {
          const { name, primaryImage } = cartItem.product;
          const { purchasePrice, quantity, style, color } = cartItem;
          return (
            <div key={index} className="cart-item">
              <img src={primaryImage} alt={name} />
              <div className="text">
                <h3>{name}</h3>
                {style && <span className="option">style: {style}</span>}
                {color && <span className="option">color: {color}</span>}
              </div>
              <div className="amount">
                <button className="btn icon">
                  <HiChevronUp />
                </button>
                <span>{quantity}</span>
                <button className="btn icon">
                  <HiChevronDown />
                </button>
              </div>
              <span className="price">${purchasePrice}</span>
            </div>
          );
        })}
        <div className="cart-total">
          <div className="line">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="line">
            <span>Taxes:</span>
            <span>${taxes}</span>
          </div>
          <div className="line">
            <span>Shipping Price:</span>
            <span>${shippingPrice}</span>
          </div>
          <div className="line total">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>
        <form className="address" onSubmit={handleSubmit}>
          <FormRow
            type="text"
            name="address"
            value={shippingAddress.address}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="city"
            value={shippingAddress.city}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="postalCode"
            value={shippingAddress.postalCode}
            handleChange={handleChange}
            placeholderText="postal code"
          />
          <FormRow
            type="text"
            name="country"
            value={shippingAddress.country}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn--outlined">
            Pay
          </button>
        </form>
        <button className="btn btn--outlined">back to store</button>
      </div>
    </Wrapper>
  );
};

export default Cart;
