import React from "react";
import { IoMdCart } from "react-icons/io";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { amount } = useGlobalContext();

  return (
    <nav className="nav">
      <h2 className="nav__logo">dev t-shirts</h2>
      <div className="nav__cart-box">
        <IoMdCart />
        {amount}
      </div>
    </nav>
  );
};

export default Navbar;
