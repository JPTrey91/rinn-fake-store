import { useDispatch, useSelector } from "react-redux";
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import {
  hideModal,
  hideSidebar,
  showSidebar,
} from "../../features/shopSlice.js";
import { capitalize } from "../../functions.js";
import Category from "../Category/Category.jsx";
import Header from "../Header/Header.jsx";
import "./Store.css";
import { MAX_QUANTITY } from "../../constants.js";
import { useFetchProductsQuery } from "../Api/productsApi.js";

function Store() {
  if (!window.location.href.includes("store")) window.scrollTo(0, 0);
  const isShowingSidebar = useSelector((state) => state.shop.isShowingSidebar);
  const isShowingModal = useSelector((state) => state.shop.isShowingModal);
  const dispatch = useDispatch();

  const { data, isLoading, error } = useFetchProductsQuery();

  if (isLoading) return <div>Loading Products...</div>;
  else if (error) return <div>Error loading products...</div>;
  else {
    const { products: shopItems } = data;
    let categories = [];
    shopItems.forEach((item) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
    });
    return (
      <>
        <Header />
        {isShowingModal && (
          <>
            <div id="modal">
              <div id="modal-message">
                <p>
                  Uh oh, you can't add more than {MAX_QUANTITY} of the same item
                  to your cart! It's just a matter of our limited stock.
                </p>
                <button onClick={() => dispatch(hideModal())}>OK</button>
              </div>
            </div>
          </>
        )}
        <div id="store-container">
          {!isShowingSidebar && (
            <img
              id="store-sidebar-open"
              src={RightArrow}
              onClick={() => dispatch(showSidebar())}
            ></img>
          )}
          {isShowingSidebar && (
            <div id="store-sidebar">
              <div id="store-sidebar-content">
                <img
                  id="store-sidebar-close"
                  src={LeftArrow}
                  onClick={() => dispatch(hideSidebar())}
                ></img>
                <h2>Categories</h2>
                {categories.map((category) => {
                  return (
                    <h3 key={category}>
                      <a href={`#${category}`}>{`${capitalize(category)}`}</a>
                    </h3>
                  );
                })}
              </div>
            </div>
          )}
          <div id="store-main">
            {categories.map((category) => {
              const categoryItems = shopItems.filter(
                (item) => item.category === category
              );
              return (
                <Category
                  key={category}
                  categoryName={category}
                  categoryItems={categoryItems}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Store;
