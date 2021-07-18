import * as classes from "./style.module.css";
import Item from "./Item";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const ShoppingCartList = ({ shoppingCartList, history, toggleShoppingCart }) => {
  const onReviewOrder = () => {
    toggleShoppingCart();
    history.push("/review-order");
  };
  return (
    <div className={classes.container}>
      {shoppingCartList.map((item, index) => (
        <Item item={item} key={index} />
      ))}
      <div className={classes["review-button"]} onClick={onReviewOrder}>
        Review Order
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shoppingCartList: state.shoppingCartList,
  };
};

export default withRouter(connect(mapStateToProps)(ShoppingCartList));
