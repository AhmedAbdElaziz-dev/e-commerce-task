import { connect } from "react-redux";
import * as classes from "./style.module.css";
import OrderList from "../OrderList";
import { Link } from "react-router-dom";

const OrderReview = ({ shoppingListCart }) => {
  const orderList = shoppingListCart.map((item) => {
    item.totlePrice = item.price * item.quantity;
    return item;
  });
  return (
    <div>
      <OrderList orderList={orderList} />
      <div className={classes["order-button"]}>
        <Link
          to="/user-info"
          style={{ textDecoration: "none", color: "white" }}
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

const mapStateToPorps = (state) => {
  return {
    shoppingListCart: state.shoppingCartList,
  };
};

export default connect(mapStateToPorps)(OrderReview);
