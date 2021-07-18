import {
  GET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INC_ITEM_QNT,
  DEC_ITEM_QNT,
  SUBMIT_ORDER,
} from "./constants";

const initialState = {
  products: [],
  shoppingCartList: localStorage.getItem("shoppingCartList")
    ? JSON.parse(localStorage.getItem("shoppingCartList"))
    : [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      const products = action.products;
      return {
        ...state,
        products,
      };
    }
    case ADD_TO_CART: {
      const items = JSON.parse(localStorage.getItem("shoppingCartList"));
      const newItem = { ...action.item, quantity: 1 };
      items.push(newItem);
      localStorage.setItem("shoppingCartList", JSON.stringify(items));
      return {
        ...state,
        shoppingCartList: items,
      };
    }
    case REMOVE_FROM_CART: {
      const items = JSON.parse(localStorage.getItem("shoppingCartList"));
      const newItems = items.filter((element) => element.id !== action.id);
      localStorage.setItem("shoppingCartList", JSON.stringify(newItems));
      return {
        ...state,
        shoppingCartList: newItems,
      };
    }
    case INC_ITEM_QNT: {
      const items = JSON.parse(localStorage.getItem("shoppingCartList"));
      const index = items.findIndex((element) => element.id === action.id);
      items[index].quantity = items[index].quantity + 1;
      localStorage.setItem("shoppingCartList", JSON.stringify(items));
      return {
        ...state,
        shoppingCartList: items,
      };
    }
    case DEC_ITEM_QNT: {
      const items = JSON.parse(localStorage.getItem("shoppingCartList"));
      const index = items.findIndex((element) => element.id === action.id);
      items[index].quantity = items[index].quantity - 1;
      localStorage.setItem("shoppingCartList", JSON.stringify(items));
      return {
        ...state,
        shoppingCartList: items,
      };
    }
    case SUBMIT_ORDER: {
      localStorage.setItem("shoppingCartList", JSON.stringify([]));
      return {
        ...state,
        shoppingCartList: [],
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
