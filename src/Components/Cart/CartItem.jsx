import { useRef } from "react";
import { useDispatch } from "react-redux";
import CloseImg from "../../assets/close.svg";
import { removeItem, updateQuantity } from "../../features/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const quantityRef = useRef(item.quantity);

  function handleUpdateQuantity() {
    const quantity = quantityRef.current.value;
    dispatch(updateQuantity({ itemId: item.id, quantity }));
  }

  function removeFromCart() {
    dispatch(removeItem(item.id));
  }

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
            ref={quantityRef}
            onChange={handleUpdateQuantity}
          ></input>
          <button
            className="remove-from-cart-button"
            style={{ backgroundImage: `url(${CloseImg})` }}
            onClick={removeFromCart}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
