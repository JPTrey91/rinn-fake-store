import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartLogo from "../../assets/cart.png";
import CartPreviewItem from "./CartPreviewItem";

export default function CartPreview() {
  const [CartVisible, setCartVisible] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  let cartTotal = 0;
  cartItems.forEach(
    (item) => (cartTotal = cartTotal + item.price * item.quantity),
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
                <CartPreviewItem item={item} />
              ))}
            </div>
            <div id="mini-cart-total">
              <div>Total:</div>
              <div>{`$${cartTotal}`}</div>
            </div>
            <div id="mini-cart-buttons">
              <Link to="/cart">
                <button id="left-mini-cart-button">To Cart</button>
              </Link>
              <Link to="/checkout">
                <button id="right-mini-cart-button">To Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
