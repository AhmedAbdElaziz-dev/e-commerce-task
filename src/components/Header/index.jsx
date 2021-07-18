import * as classes from "./style.module.css";

const Header = () => {
  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <img className={classes.userIcon} src="./user.jpeg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
