import { combineReducers } from "redux";
import { cartReducer } from "./Cart/CartReducer";
import { productData } from "./Cart/productReducer";

const rootReducer = combineReducers({
  cartReducer,
  productData,
});

export default rootReducer;
