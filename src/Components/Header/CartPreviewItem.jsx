const CartPreviewItem = ({ item }) => {
  return (
    <div key={item.id} className="mini-cart-item">
      <img src={item.thumbnail} />
      <div className="mini-cart-item-name">{`${item.title} (${item.quantity})`}</div>
      <div className="mini-cart-item-total">{`$${
        item.price * item.quantity
      }`}</div>
    </div>
  );
};

export default CartPreviewItem;
