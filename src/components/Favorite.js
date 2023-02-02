import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromcart, emtCart, incItem, decItem } from "../redux";

const Favorite = () => {
  const favItems = useSelector((state) => state.cartReducer.carts);
  console.log(favItems);
  const dispatch = useDispatch();

  const dltFunc = (id) => {
    dispatch(removeFromcart(id));
  };
  const dltAll = () => {
    dispatch(emtCart());
  };
  const inc = (item) => {
    dispatch(incItem(item));
  };
  const dec = (item) => {
    dispatch(decItem(item));
  };
  const fItems = favItems.map((item) => item.price * item.qnty);

  let summation = fItems.reduce(
    (accumulator, currentValue) => { 
      return (accumulator + currentValue)},0
  );

  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        {favItems.length !== 0 ? (
          favItems.map((fItem) => {
            return (
              <div key={fItem.id} className="d-flex w-50 my-2">
                <img
                  src={fItem.image}
                  alt=""
                  style={{ height: "300px", width: "300px" }}
                  className="rounded-2 mx-auto"
                />

                <div className="mx-3">
                  <h3 className="text-center ny-2">Item Detail</h3>
                  <div className="mt-5">
                    <h3 className=" my-2">Name : {fItem.title}</h3>
                    <h3 className=" my-2">
                      Price : {fItem.price}
                      <span className="fs-5 my-5"> (price for 1 item)</span>
                    </h3>

                    <div className="my-3 ms-1">
                      Quantity :
                      <button
                        onClick={() => dec(fItem)}
                        className="btn btn-secondary"
                      >
                        -
                      </button>
                      <span className="mx-2">{fItem.qnty}</span>
                      <button
                        onClick={() => inc(fItem)}
                        className="btn btn-secondary"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => dltFunc(fItem.id)}
                    className="btn btn-secondary"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="text-center">Please add some items in Favourite</h1>
        )}
        {favItems.length !== 0 && (
          <>
            <h1 className="mt-5">Total Amount : {summation}</h1>
            <button className="mt-3 btn btn-secondary" onClick={() => dltAll()}>
              Empty List
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Favorite;
