/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable no-empty-pattern */

// libarary
import bind from "classnames/bind";
import { memo, useState } from "react";

// types
import { DialogMode, IProduct, IProductFormData } from "src/types";

// component
import ProductTable from "src/components/elements/ProductTable/ProductTable";
import ModalAddEditProduct from "src/components/ModalAddEditProduct";

// styles
import styles from "./Component.module.scss";
import PageLayout from "src/components/layouts/PageLayout/PageLayout";
import ProductDialog from "src/components/elements/ProductDialog/ProductDialog";

const cx = bind.bind(styles);

const ProductListPage = memo(() => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [dialogMode, setDialogMode] = useState<DialogMode>(DialogMode.None);
  const [productFormData, setProductFormData] = useState<IProductFormData>();

  const addProduct = (product: IProduct) => {
    const currentProducts = [...products, product];
    setProducts(currentProducts);
  };

  const updateProduct = (updateProduct: IProduct) => {
    const currentProducts = products.map((product) => {
      if (product.id === updateProduct.id) {
        return updateProduct;
      }
      return product;
    });
    setProducts(currentProducts);
  };

  const deleteProduct = (productId: string) => {
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  };
  return (
    <PageLayout
      headerElement={<h1>danh sach san pham</h1>}
      bodyElement={
        <>
          <ProductTable
            products={products}
            deleteProduct={deleteProduct}
            setProductFormData={setProductFormData}
            setDialogMode={setDialogMode}
          />
          <ProductDialog
            dialogMode={dialogMode}
            setProducts={function (newProduct: IProduct): void {
              throw new Error("Function not implemented.");
            }}
            setDialogMode={function (newDialogMode: DialogMode): void {
              throw new Error("Function not implemented.");
            }}
          />
        </>
      }
    />
  );
});

export default ProductListPage;
