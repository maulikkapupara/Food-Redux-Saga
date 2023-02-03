/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Items from "./Items";
import { productList } from "../redux/Cart/productAction";

const Home = () => {
  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.productData);
  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <>
      {data1.length === 0 && (
        <h1 className="text-center my-2">Data Not Found!!!</h1>
      )}
      <Items data={data1} />
    </>
  );
};

export default Home;
