/* eslint-disable react/button-has-type */
/* eslint-disable no-empty-pattern */
import TableList from "src/components/elements/TableList/TableList";
import { IProduct } from "src/types/data";
import "./Component.scss";
import { useState } from "react";
import ModalAddEditProduct from "src/components/ModalAddEditProduct";

function ProductListPage() {
  const [listProduct, setListProducts] = useState<IProduct[]>([]);
  const [isOpenModalAddEdit, setIsOpenModalAddEdit] = useState(false);
  const [isEditProduct, setIsEditProduct] = useState(false);

  const addProduct = (product: IProduct) => {
    console.log(product);
    const currentListProducts = [...listProduct];

    const existProduct = currentListProducts.find(
      (item: IProduct) => item.id === product.id,
    );
    if (!existProduct) currentListProducts.push(product);
    setListProducts(currentListProducts);
  };

  const changeStatusProductItem = (productId: string) => {
    const currentListProducts = [...listProduct];

    const newLisProducts = currentListProducts.map((product) => {
      const resultItem = { ...product };
      if (product.id === productId) resultItem.isComplete = !product.isComplete;
      return {
        ...product,
      };
    });
    setListProducts(newLisProducts);
  };

  const updateProduct = (productId: string, newValue: string) => {
    if (!newValue || /^\s*s/.test(newValue)) {
      return;
    }
    const currentListProducts = [...listProduct];

    const newLisProducts = currentListProducts.map((product) => {
      const resultItem = { ...product };
      if (product.id === productId) resultItem.name = newValue;
      return {
        ...product,
      };
    });
    setListProducts(newLisProducts);
  };

  const removeProduct = (productId: string) => {
    const currentListProducts = [...listProduct];

    const newListProducts = currentListProducts.filter(
      (product) => product.id !== productId,
    );

    setListProducts(newListProducts);
  };

  return (
    <div className="wrapper">
      <div
        style={{
          width: 500,
          height: 600,
          background: "#fff",
          borderRadius: 20,
          margin: "0 auto",
          overflowY: "scroll",
          padding: 24,
          position: "relative",
        }}
      >
        <div
          style={{
            padding: "16px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Products Manager</h2>
          <button
            onClick={() => setIsOpenModalAddEdit(true)}
            className={isOpenModalAddEdit ? "btn-none" : "btn-add"}
            style={{
              border: "none",
              color: "#fff",
            }}
          >
            Add Product
          </button>
        </div>

        <TableList
          products={listProduct}
          changeStatusProductItem={changeStatusProductItem}
          removeProduct={removeProduct}
          updateProduct={updateProduct}
          handleOpenEditModal={() => {
            setIsOpenModalAddEdit(true);
            setIsEditProduct(true);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isOpenModalAddEdit && (
          <div
            style={{
              position: "relative",
              width: 400,
              height: 250,
              background: "red",
              display: `${isOpenModalAddEdit ? "flex" : "none"}`,
              border: "1px solid #d1d1d1",
              boxShadow: "rgba(0,0,0,0.5)",
            }}
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
