import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartLogo from "../../assets/cart.png";
import CartPreviewItem from "./CartPreviewItem";

export default function CartPreview() {
  const [CartVisible, setCartVisible] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  let cartTotal = 0;
  cartItems.forEach(
    (item) => (cartTotal = cartTotal + item.price * item.quantity)
  );

  let cartLength = 0;
  cartItems.forEach((item) => (cartLength = cartLength + +item.quantity));

  function toggleCartVisibility() {
    if (CartVisible === false) setCartVisible(true);
    else setCartVisible(false);
  }

  return (
    <>
      <img src={CartLogo} onClick={() => toggleCartVisibility()} />
      {cartItems.length > 0 && <div id="cart-counter">{`${cartLength}`}</div>}
      {CartVisible && (
        <div
          id="cart-preview-container"
          onMouseLeave={() => setCartVisible(false)}
        >
          <div id="cart-preview">
            <div id="mini-cart-banner">In Your Cart:</div>
            <div id="mini-cart">
              {cartItems.length === 0 && (
                <div>
                  <em>There are no items in your cart.</em>
                </div>
              )}
              {cartItems.map((item) => (
                <CartPreviewItem key={item.title} item={item} />
              ))}
            </div>
            <div id="mini-cart-total">
              <div>Total:</div>
              <div>{`$${cartTotal}`}</div>
            </div>
            <div id="mini-cart-buttons">
              <button
                id="left-mini-cart-button"
                onClick={() => navigate("/cart")}
              >
                To Cart
              </button>
              <button
                id="right-mini-cart-button"
                onClick={() => navigate("/checkout")}
                disabled={cartItems.length < 1}
              >
                To Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
