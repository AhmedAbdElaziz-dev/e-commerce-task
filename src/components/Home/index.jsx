import { useEffect, useState } from "react";
import Cards from "../Cards";
import { getAllProducts } from "../../store/products/actions";
import { connect } from "react-redux";

const Home = (props) => {
  const [cards, setCards] = useState([]);
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
  return (
    <div className="album py-5 bg-light">
      <Cards cards={cards} />
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
