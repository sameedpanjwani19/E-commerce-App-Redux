import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const selector = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <div className="d-flex">
        <h1>Product App</h1>
        {/* Link to the Cart page */}
        <Link to="/cart">
          <button>Cart {selector.length}</button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
