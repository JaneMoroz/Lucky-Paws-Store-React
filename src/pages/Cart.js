import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/Cart";
import { useSelector, useDispatch } from "react-redux";
import { FormRow, PageHero } from "../components";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  updateCartItemQuantity,
  removeCartItem,
  calculateTotals,
  updateMyCart,
} from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, subtotal, taxes, shippingPrice, total, isLoading } =
    useSelector((store) => store.cart);
  const { user } = useSelector((store) => store.user);

  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [cartItemsUpdated, setCartItemsUpdated] = useState(false);

  useEffect(() => {
    if (cartItemsUpdated && user) {
      dispatch(updateMyCart(cartItems));
      setCartItemsUpdated(false);
    }
  }, [cartItemsUpdated]);

  const handleQuantity = (id, style, color, num) => {
    if (num !== 0) {
      dispatch(updateCartItemQuantity({ id, quantity: num, style, color }));
    } else {
      dispatch(removeCartItem({ id, style, color }));
    }
    if (!user) {
      dispatch(calculateTotals());
    } else {
      setCartItemsUpdated(true);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { address, city, postalCode, country } = shippingAddress;
    if (!address || !city || !postalCode || !country) {
      toast.error("Please fill out all address fields!");
      return;
    }
  };

  if (cartItems.length === 0) {
    return (
      <Wrapper className="container--max">
        <PageHero page={"cart"} />
        <div className="cart-container">
          <p className="empty">You cart is empty.</p>
          <Link to="/all" className="btn btn--outlined">
            Go back to store
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="container--max">
      <PageHero page={"cart"} />
      <div className="cart-container">
        {cartItems.map((cartItem, index) => {
          const { id, name, primaryImage } = cartItem.product;
          const { purchasePrice, quantity, style, color } = cartItem;
          return (
            <div key={index} className="cart-item">
              <img src={primaryImage} alt={name} />
              <div className="text">
                <h3>{name}</h3>
                {style && <span className="option">style: {style}</span>}
                {color && <span className="option">color: {color}</span>}
              </div>
              <div className="quantity">
                <button
                  onClick={() =>
                    handleQuantity(id, style && style, color && color, 1)
                  }
                  disabled={isLoading}
                  className="btn icon"
                >
                  <HiChevronUp />
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() =>
                    handleQuantity(
                      id,
                      style && style,
                      color && color,
                      quantity > 1 ? -1 : 0
                    )
                  }
                  disabled={isLoading}
                  className="btn icon"
                >
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
          {user && (
            <div className="line">
              <span>Taxes:</span>
              <span>${taxes}</span>
            </div>
          )}
          {user && (
            <div className="line">
              <span>Shipping Price:</span>
              <span>${shippingPrice}</span>
            </div>
          )}
          {user && (
            <div className="line total">
              <span>Total:</span>
              <span>${total}</span>
            </div>
          )}
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
          {!user && (
            <Link to="/account/" className="btn btn--outlined">
              log in
            </Link>
          )}
          {user && (
            <button type="submit" className="btn btn--outlined">
              Pay
            </button>
          )}
        </form>
        <Link to="/all" className="btn btn--outlined">
          back to store
        </Link>
      </div>
    </Wrapper>
  );
};

export default Cart;
