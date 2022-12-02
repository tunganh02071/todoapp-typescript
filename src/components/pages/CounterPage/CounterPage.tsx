/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable no-empty-pattern */

// libarary
import bind from "classnames/bind";
import { memo } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PageLayout from "src/components/layouts/PageLayout/PageLayout";

// types

// component
import { RootState } from "src/store";
import { decrement, increment, setCount } from "src/store/slices/counterSlice";

// styles
import styles from "./CounterPage.module.scss";

const cx = bind.bind(styles);

const PageCounter = memo(() => {
  const count = useSelector((state: RootState) => {
    return state.counter.count;
  });
  const dispatch = useDispatch();
  return (
    <PageLayout
      headerElement={<h2 className={cx("title")}>Count: {count}</h2>}
      bodyElement={
        <>
          <Button
            aria-label="Increment count"
            onClick={() => dispatch(increment())}
          >
            Increment
          </Button>

          <Button
            aria-label="Decrement count"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
          <input
            type="number"
            value={count ?? ""}
            onChange={(e) => {
              const parsedValue = parseInt(e.target.value, 10);
              if (Number.isNaN(parsedValue)) {
                dispatch(setCount(null));
              } else {
                dispatch(setCount(parsedValue));
              }
            }}
          />
        </>
      }
    />
  );
});

export default PageCounter;
