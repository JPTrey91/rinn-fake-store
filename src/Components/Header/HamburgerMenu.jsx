import { useState } from "react";
import MenuLogo from "../../assets/hamburger.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HamburgerMenu() {
  const [MenuVisible, setMenuVisible] = useState(false);
  const cartItemCount = useSelector((state) => state.cart.itemCount);

  function toggleMenuVisibility() {
    if (MenuVisible === false) setMenuVisible(true);
    else setMenuVisible(false);
  }

  return (
    <>
      <img src={MenuLogo} onClick={() => toggleMenuVisibility()} />
      {MenuVisible && (
        <div id="menu-container" onMouseLeave={() => setMenuVisible(false)}>
          <div id="menu">
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/cart">Cart</Link>
            {cartItemCount > 0 && <Link to="/checkout">Checkout</Link>}
          </div>
        </div>
      )}
    </>
  );
}
