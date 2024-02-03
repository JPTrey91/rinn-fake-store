import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Header/Header.jsx";
import "./Cart.css";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  if (!window.location.href.includes("cart")) window.scrollTo(0, 0);
  let cartTotal = 0;
  cartItems.forEach((item) => (cartTotal += item.price * item.quantity));

  return (
    <>
      <Header />
      <div id="cart-container">
        <div id="cart-main">
          <div id="cart-header">
            <p>Your Cart</p>
            <div id="cart-total">
              <p>{`Total: $${cartTotal}`}</p>
              <Link to="/checkout">
                <button>Checkout</button>
              </Link>
            </div>
          </div>
          <div id="cart-contents">
            {cartItems.length === 0 && (
              <p style={{ textAlign: "center" }}>Nothing in the cart!</p>
            )}
            {cartItems.map((item) => {
              return <CartItem key={item.title} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
