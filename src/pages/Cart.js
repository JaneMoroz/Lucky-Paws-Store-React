import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/Cart";
import { useSelector, useDispatch } from "react-redux";
import { PageHero } from "../components";
import { HiChevronUp, HiChevronDown } from "../utils/icons";
import { Link } from "react-router-dom";
import {
  updateCartItemQuantity,
  removeCartItem,
  calculateTotals,
  updateMyCart,
  toggleCartItemsAreUpdated,
  clearCart,
} from "../features/cart/cartSlice";
import { getCheckoutSession } from "../features/order/orderSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const {
    cartId,
    cartItems,
    subtotal,
    taxes,
    shippingPrice,
    total,
    isLoading,
    cartItemsUpdated,
  } = useSelector((store) => store.cart);
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    if (cartItemsUpdated && user) {
      dispatch(updateMyCart(cartItems));
      dispatch(toggleCartItemsAreUpdated());
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
      dispatch(toggleCartItemsAreUpdated());
    }
  };

  const goToCheckout = () => {
    toast.success("You'll be redirected to the payment page shortly!");
    dispatch(clearCart());
    dispatch(getCheckoutSession(cartId));
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
            <article key={index} className="cart-item">
              <img src={primaryImage} alt={name} />
              <div className="text">
                <h3>{name}</h3>
                {style && <span className="option">style: {style}</span>}
                {color && <span className="option">color: {color}</span>}
              </div>
              <div className="quantity">
                <button
                  onClick={() => handleQuantity(id, style, color, 1)}
                  disabled={isLoading}
                  className="btn icon"
                  aria-label="increase quantity"
                >
                  <HiChevronUp />
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() =>
                    handleQuantity(id, style, color, quantity > 1 ? -1 : 0)
                  }
                  disabled={isLoading}
                  className="btn icon"
                  aria-label="decrease quantity"
                >
                  <HiChevronDown />
                </button>
              </div>
              <span className="price">${purchasePrice}</span>
            </article>
          );
        })}
        {/* totals */}
        <div className="cart-total">
          <div className="line">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          {user && (
            <>
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
            </>
          )}
        </div>
        {user && (
          <>
            <span className="test">Test card number: 4242 4242 4242 4242</span>
            <button className="btn btn--outlined" onClick={goToCheckout}>
              Pay
            </button>
          </>
        )}
        {!user && (
          <Link to="/account" className="btn btn--outlined">
            Login
          </Link>
        )}
        <Link to="/all" className="btn btn--outlined">
          back to store
        </Link>
      </div>
    </Wrapper>
  );
};

export default Cart;
