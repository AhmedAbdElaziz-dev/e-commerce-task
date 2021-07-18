import "./style.css";
import { Fragment} from "react";
import Header from "../Header";
import Footer from "../Footer";
import UserForm from "../UserForm";
import Home from "../Home";
import Details from "../Details";
import  OrderReview  from "../OrderReview";
import { Route } from "react-router";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/details/:id"  component={Details} />
      <Route path="/review-order" component={OrderReview} />
      <Route path="/user-info" component={UserForm} /> 
      <Footer />
    </Fragment>
  );
};

export default App;
