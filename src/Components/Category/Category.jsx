import { capitalize } from "../../functions";
import ShopItem from "../ShopItem/ShopItem";

const Category = ({ categoryName, categoryItems }) => {
  return (
    <div className="store-section-container" key={`${categoryName}`}>
      <div className="store-section-header" id={categoryName}>{`${capitalize(
        categoryName
      )}`}</div>
      <div className="store-section">
        {categoryItems.map((item) => (
          <ShopItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
