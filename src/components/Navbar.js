import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { productSearch } from "../redux/Cart/productAction";

const Navbar = () => {
  let location = useLocation();
  let path = location.pathname;
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.cartReducer.carts);
  const searchData = (e) => {
    e.preventDefault();
    dispatch(productSearch(input));
  };
  return (
    <div className="d-flex justify-content-center bg-secondary rounded-3 m-3 ">
      <Link className="item m-3 text-white text-decoration-none" to="/">
        Home
      </Link>
      {path === "/" && (
        <div className="mx-5">
          <form
            onSubmit={searchData}
          >
            <input
              className="rounded my-3  "
              type="text"
              value={input}
              placeholder="Enter Your Dish Name"
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="rounded ms-2">
              Search
            </button>
          </form>
        </div>
      )}
      <Link className="item m-3 text-white text-decoration-none" to="/favorite">
        Favorite
        <span className="position-absolute translate-middle badge rounded-pill bg-white text-secondary">
          {arr.length}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
