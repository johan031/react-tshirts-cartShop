import React from "react";
import Item from "./Item";
import { useGlobalContext } from "../context/context";

const ItemsLIst = () => {
  const { cart, total } = useGlobalContext();

  return (
    <section className="items__container">
      <div className="items__list">
        {cart.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
      <div className="items__total-box">
        <h4 className="items__total">total: {total}$</h4>
      </div>
    </section>
  );
};

export default ItemsLIst;
