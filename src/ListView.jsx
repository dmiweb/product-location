import ShopItem from "./ShopItem";

const ListView = ({ items }) => {
  return (
    <div className="item-view">
      {items.map((item, index) => <ShopItem key={index} item={item}/>)}
    </div>
  );
}

export default ListView;