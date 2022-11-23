/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { IProduct, ProductListPageProps } from "src/types";
import bind from "classnames/bind";
import styles from "./TableList.module.scss";

const cx = bind.bind(styles);

function TableList({
  products,
  removeProduct,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateProduct,
  handleOpenEditModal,
}: ProductListPageProps) {
  return (
    <div>
      {products.map((product: IProduct) => {
        return (
          <div className={cx("product__item")} key={product.id}>
            <div className={cx("product__item--active")}>
              <h3>Name: {product.name}</h3>
              <p>Price: {product.price}</p>
            </div>
            <div className={cx("product__item--change")}>
              <span className={cx("icon", "icon-delete")}>
                <RiCloseCircleLine
                  color="white"
                  onClick={() => removeProduct(product.id)}
                />
              </span>
              <span className={cx("icon", "icon-update")}>
                <TiEdit
                  color="white"
                  onClick={() => {
                    handleOpenEditModal();
                  }}
                />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TableList;
