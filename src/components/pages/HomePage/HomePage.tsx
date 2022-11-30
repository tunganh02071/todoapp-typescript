/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable no-empty-pattern */

// libarary
import bind from "classnames/bind";
import { memo } from "react";
import { Link } from "react-router-dom";

// types

// component

// styles
import styles from "./HomePage.module.scss";

const cx = bind.bind(styles);

const HomePage = memo(() => {
  return (
    <div className={cx("home-page")}>
      <Link to="/product" className={cx("product-page")}>
        Product List Page
      </Link>
      <Link to="/counter" className={cx("counter-page")}>
        Couter Page
      </Link>
    </div>
  );
});

export default HomePage;
