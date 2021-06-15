import React from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { useGlobalContext } from "../context/context";

const Item = ({ id, title, img, amount, price }) => {
  const { remove, increase, decrease } = useGlobalContext();

  return (
    <div className="item">
      <img src={img} alt={title} className="item__img" />
      <div className="item__info">
        <h3 className="item__title">{title}</h3>
        <p className="item__price">{price}$</p>
        <button onClick={() => remove(id)}>remove</button>
      </div>
      <div className="item__amount-box">
        <BiUpArrow onClick={() => increase(id)} />
        <span className="item__amount">{amount}</span>
        <BiDownArrow onClick={() => decrease(id)} />
      </div>
    </div>
  );
};

export default Item;
