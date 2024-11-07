import AddToCartButton from "./AddToCartButton"

const ShopItem = ({ item }) => {
  return (
    <div className="shop-item">
      <img className="shop-item-img" src={item.img} alt={item.name} />
      <h2 className="shop-item-name">{item.name}</h2>
      <span className="shop-item-color">{item.color}</span>
      <span className="shop-item-price">${item.price}</span>
      <AddToCartButton />
    </div>
  );
}

export default ShopItem;