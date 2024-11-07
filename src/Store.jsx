import { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

const Store = ({ products }) => {
  let [view, setView] = useState("view_list");

  const onSwitch = (typeView) => {
    if (typeView === "view_list") {
      setView("view_module");
    } else {
      setView("view_list");
    }
  }

  return (
    <>
      <IconSwitch icon={view} onSwitch={onSwitch} />

      {view === "view_list" ? <CardsView cards={products} /> : <ListView items={products} />}
    </>

  );
}

export default Store;