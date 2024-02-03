import { useDispatch } from "react-redux";
import { removeItem } from "../../features/cartSlice";
import CloseImg from "../../assets/close.svg";

const CartPreviewItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div key={item.id} className="mini-cart-item">
      <img src={item.thumbnail} />
      <div className="mini-cart-item-name">{`${item.title} (${item.quantity})`}</div>
      <div className="mini-cart-item-total">{`$${
        item.price * item.quantity
      }`}</div>
      <button
        className="remove-from-cart-button"
        style={{ backgroundImage: `url(${CloseImg})` }}
        onClick={() => dispatch(removeItem(item.id))}
      ></button>
    </div>
  );
};

export default CartPreviewItem;
