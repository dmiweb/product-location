import ShopCard from "./ShopCard";

const CardsView = ({ cards }) => {
  return (
    <div className="card-view">
      {cards.map((card, index) => <ShopCard key={index} card={card}/>)}
    </div>
  );
}

export default CardsView;