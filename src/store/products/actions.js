import {
  GET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INC_ITEM_QNT,
  DEC_ITEM_QNT,
  SUBMIT_ORDER,
} from "./constants";
import { getProducts } from "../../apis/product";

export const getAllProducts = () => {
  return async (dispatch) => {
    const { data: products } = await getProducts();
    console.log("data", products);
    dispatch(getAllProductsResult(products));
  };
};

const getAllProductsResult = (products) => ({ type: GET_PRODUCTS, products });

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const increaseItemQnt = (id) => ({ type: INC_ITEM_QNT, id });
export const decreaseItemQnt = (id) => ({ type: DEC_ITEM_QNT, id });
export const submitOrder = () => ({ type: SUBMIT_ORDER });
