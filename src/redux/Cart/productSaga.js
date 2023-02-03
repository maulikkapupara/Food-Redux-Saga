import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./CartType";

function* getProducts() {
  let data = yield fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&number=100`
  );
  data = yield data.json();
  data = yield data.results;

  data.forEach((element) => {
    element.price = Math.floor(Math.random() * 100 + 10);
  });
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
  let result = yield fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&query=${data.query}&number=30`
  );
  result = yield result.json();
  result = yield result.results;
  result.forEach((element) => {
    element.price = Math.floor(Math.random() * 100 + 10);
  });
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
