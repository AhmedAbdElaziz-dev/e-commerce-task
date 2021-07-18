import * as classes from "./style.module.css";
import ShoppingCartList from "../ShoppingCartList";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const ShoppingCart = ({ shoppingCartList }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const toggleShoppingCart = () => {
    setToggleCart(!toggleCart);
  };
  return (
    <div>
      {shoppingCartList.length && (
        <div className={classes.notification}>{shoppingCartList.length}</div>
      )}
      <FontAwesomeIcon
        icon={faCartArrowDown}
        color="white"
        size="2x"
        onClick={toggleShoppingCart}
      />
      {toggleCart && (
        <ShoppingCartList toggleShoppingCart={toggleShoppingCart} />
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    shoppingCartList: state.shoppingCartList,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
