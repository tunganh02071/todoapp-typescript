/* eslint-disable no-empty-pattern */
import { memo } from "react";
import { Link } from "react-router-dom";
import { LayoutProps } from "src/types";

const Layout = memo(({}: LayoutProps) => {
  return (
    <div>
      <Link to="/product">Product</Link>
      <br />
      <Link to="/">Layout</Link>
      <br />
      <Link to="/home">Home</Link>
    </div>
  );
});

export default Layout;
