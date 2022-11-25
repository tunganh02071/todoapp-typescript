/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable no-empty-pattern */

// libarary
import bind from "classnames/bind";
import { memo } from "react";

// types
import { PageLayoutProps } from "src/types";

// component

// styles
import styles from "./Component.module.scss";

const cx = bind.bind(styles);

const PageLayout = memo(({ headerElement, bodyElement }: PageLayoutProps) => {
  return (
    <div className="container">
      <div className={cx("page-layout")}>
        <div className={cx("page-layout__header")}>{headerElement}</div>
        <div className={cx("page-layout__body")}>{bodyElement}</div>
      </div>
    </div>
  );
});

export default PageLayout;
