import AddToCartButton from "./AddToCartButton"

const ShopCard = ({ card }) => {
  return (
    <div className="shop-card">
      <h2 className="shop-card-name">{card.name}</h2>
      <span className="shop-card-color">{card.color}</span>
      <img className="shop-card-img" src={card.img} alt={card.name} />
      <span className="shop-card-price">${card.price}</span>
      <AddToCartButton />
    </div>
  );
}

export default ShopCard;