/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable no-empty-pattern */
import TableList from "src/components/elements/ProductTable/ProductTable";
import { IProduct } from "src/types/data";
import { useState } from "react";
import ModalAddEditProduct from "src/components/ModalAddEditProduct";
import bind from "classnames/bind";
import styles from "./Component.module.scss";

const cx = bind.bind(styles);

function ProductListPage() {
  const [listProduct, setListProducts] = useState<IProduct[]>([]);
  const [isOpenModalAddEdit, setIsOpenModalAddEdit] = useState(false);
  const [isEditProduct, setIsEditProduct] = useState(false);

  const addProduct = (product: IProduct) => {
    const currentListProducts = [...listProduct, product];
    setListProducts(currentListProducts);
  };

  const updateProduct = (updateProduct: IProduct) => {
    const currentListProducts = listProduct.map((product) => {
      if (product.id === updateProduct.id) {
        return updateProduct;
      }
      return product;
    });
    setListProducts(currentListProducts);
  };

  const removeProduct = (productId: string) => {
    const newListProducts = listProduct.filter(
      (product) => product.id !== productId,
    );
    setListProducts(newListProducts);
  };

  return (
    <div className="wrapper">
      <div className={cx("wrapper__page")}>
        <div className={cx("wrapper__page--total")}>
          <h2>Products Manager</h2>
          <button
            onClick={() => setIsOpenModalAddEdit(true)}
            className={cx(isOpenModalAddEdit ? "btn-none" : "btn-add")}
          >
            Add Product
          </button>
        </div>

        <TableList
          products={listProduct}
          removeProduct={removeProduct}
          updateProduct={updateProduct}
          handleOpenEditModal={() => {
            setIsOpenModalAddEdit(true);
            setIsEditProduct(true);
          }}
        />
      </div>
      <div className={cx("open__modal")}>
        {isOpenModalAddEdit && (
          <div
            className={cx("open__modal--active")}
            style={{ display: `${isOpenModalAddEdit ? "flex" : "none"}` }}
          >
            <ModalAddEditProduct
              addProduct={addProduct}
              handleCloseModal={() => setIsOpenModalAddEdit(false)}
              isEditProduct={isEditProduct}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductListPage;
