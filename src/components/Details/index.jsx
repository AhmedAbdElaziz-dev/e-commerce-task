import CardDetails from "../CardDetails";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const Details = (props) => {
  const [product, setpProduct] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
    id: "",
    category: "",
  });
  useEffect(() => {
    const newProduct = props.products.find(
      (element) => element.id === JSON.parse(props.match.params.id)
    );
    setpProduct(newProduct);
  }, []);
  return <CardDetails card={product} />;
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Details);
