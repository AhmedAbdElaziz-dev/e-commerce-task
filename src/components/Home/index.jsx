import { useEffect, useState } from "react";
import Cards from "../Cards";
import { getAllProducts } from "../../store/products/actions";
import { connect } from "react-redux";
import * as classes from "./style.module.css";

const Home = (props) => {
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { products } = props;

  useEffect(() => {
    if (!localStorage.getItem("shoppingCartList")) {
      localStorage.setItem("shoppingCartList", JSON.stringify([]));
    }
    props.getProducts();
  }, []);
  useEffect(() => {
    setCards(products);
  }, [products]);
  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="album py-5 bg-light ">
      <input
        className={classes["input"]}
        type="text"
        placeholder="...search"
        value={searchValue}
        onChange={onSearch}
      />
      <Cards cards={cards} search={searchValue} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getAllProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
