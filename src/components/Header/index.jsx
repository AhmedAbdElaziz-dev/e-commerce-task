import * as classes from "./style.module.css";
import ShoppingCart from "../ShoppingCart";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const toggleShoppingCart = () => {
    setToggleCart(!toggleCart);
  };
  return (
    <Fragment>
      <header>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <img className={classes.userIcon} src="./user.jpeg" alt=""/>
            <FontAwesomeIcon
              icon={faCartArrowDown}
              color="white"
              size="2x"
              onClick={toggleShoppingCart}
            />
          </div>
        </div>
      </header>
      {toggleCart && <ShoppingCart toggleShoppingCart={toggleShoppingCart}/>}
    </Fragment>
  );
};
export default Header;
