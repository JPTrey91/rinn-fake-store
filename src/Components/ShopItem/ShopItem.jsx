import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateQuantity } from "../../features/cartSlice";
import { showModal } from "../../features/shopSlice";

const ShopItem = ({ item }) => {
  const quantityRef = useRef(1);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  function addToCart() {
    const quantity = quantityRef.current.value;
    const cartItem = { ...item, quantity };
    const existingItem = cartItems.find(
      (match) => match.title === cartItem.title
    );
    if (!existingItem) dispatch(addItem(cartItem));
    else {
      if (+existingItem.quantity + +cartItem.quantity > 5) {
        dispatch(showModal());
      } else {
        dispatch(
          updateQuantity({
            itemId: existingItem.id,
            quantity: `${+existingItem.quantity + +cartItem.quantity}`,
          })
        );
      }
    }
  }

  const existingItem = cartItems.find((ci) => ci.title === item.title);
  const addButtonLabel = existingItem ? "Add More" : "Add to Cart";

  return (
    <div key={item.id} className="store-item-card">
      <div
        className="store-item-image"
        style={{ backgroundImage: `url(${item.thumbnail})` }}
      />
      <div className="store-item-info">
        <h4>
          {`${item.title}`}{" "}
          {existingItem && (
            <span className="existing-item-quantity">
              ({existingItem.quantity}x in Cart)
            </span>
          )}
        </h4>
        <p>{`${item.description}`}</p>
        <div className="add-to-cart-section">
          <div>Quantity:</div>
          <input
            id={`${item.title}-input`}
            type="number"
            max={existingItem ? 5 - existingItem.quantity : 5}
            min="1"
            defaultValue="1"
            ref={quantityRef}
          ></input>
          <button onClick={() => addToCart()}>{addButtonLabel}</button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
