/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable no-empty-pattern */

// libarary
import bind from "classnames/bind";
import { memo } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// types

// component
import { RootState } from "src/store";
import { decrement, increment } from "src/store/slices/couterSlice";

// styles
import styles from "./PageCouter.module.scss";

const cx = bind.bind(styles);

const PageCounter = memo(() => {
  const count = useSelector((state: RootState) => {
    return state.counter.value;
  });
  const dispatch = useDispatch();
  return (
    <div className={cx("page-couter")}>
      <Button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <span className={cx("page-couter__count")}>{count}</span>
      <Button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </div>
  );
});

export default PageCounter;
