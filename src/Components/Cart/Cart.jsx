import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CloseImg from "../../assets/close.svg";
import {
  updateQuantity as cartUpdateQuantity,
  removeItem,
} from "../../features/cartSlice.js";
import Header from "../Header/Header.jsx";
import "./Cart.css";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  if (!window.location.href.includes("cart")) window.scrollTo(0, 0);
  let cartTotal = 0;
  cartItems.forEach((item) => (cartTotal += item.price * item.quantity));

  function updateQuantity(item) {
    const quantity = document.getElementById(
      `${item.title}-cart-quantity`
    ).value;
    dispatch(cartUpdateQuantity({ itemId: item.id, quantity }));
  }

  function removeFromCart(item) {
    dispatch(removeItem(item.id));
  }

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
              return (
                <div key={item.id} className="cart-item-row">
                  <div
                    className="cart-item-image"
                    style={{ backgroundImage: `url(${item.thumbnail})` }}
                  />
                  <div className="cart-item-info">
                    <div className="name-and-price">
                      <div className="cart-item-name">{`${item.title}`}</div>
                      <div className="cart-item-price">{`$${item.price}`}</div>
                    </div>
                    <div className="cart-item-quantity-section">
                      <div>Qty:</div>
                      <input
                        id={`${item.title}-cart-quantity`}
                        type="number"
                        max="5"
                        min="1"
                        defaultValue={item.quantity}
                      ></input>
                      <button onClick={() => updateQuantity(item)}>
                        Update
                      </button>
                      <button
                        className="remove-from-cart-button"
                        style={{ backgroundImage: `url(${CloseImg})` }}
                        onClick={() => removeFromCart(item)}
                      ></button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
