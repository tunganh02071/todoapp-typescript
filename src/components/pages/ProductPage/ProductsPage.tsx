/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable no-empty-pattern */

// libarary
import bind from "classnames/bind";
import { memo, useState } from "react";
import { Button } from "react-bootstrap";

// types
import { DialogMode, IProduct, IProductFormData } from "src/types";
import { DEFAULT_PRODUCT_FORM_DATA } from "src/const/const";

// component
import ProductTable from "src/components/elements/ProductTable/ProductTable";
import ProductDialog from "src/components/elements/ProductDialog/ProductDialog";
import PageLayout from "src/components/layouts/PageLayout/PageLayout";

// styles
import styles from "./Component.module.scss";

const cx = bind.bind(styles);

const ProductListPage = memo(() => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [dialogMode, setDialogMode] = useState<DialogMode>(DialogMode.None);
  const [productFormData, setProductFormData] = useState<IProductFormData>(
    DEFAULT_PRODUCT_FORM_DATA,
  );

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
      headerElement={
        <h1 className={cx("header-element")}>This is list product</h1>
      }
      bodyElement={
        <>
          <Button
            className={cx("btn-primary")}
            variant="primary"
            onClick={() => {
              setDialogMode(DialogMode.Create);
              setProductFormData(DEFAULT_PRODUCT_FORM_DATA);
            }}
          >
            Add
          </Button>
          <ProductTable
            products={products}
            deleteProduct={deleteProduct}
            setProductFormData={setProductFormData}
            setDialogMode={setDialogMode}
          />
          <ProductDialog
            dialogMode={dialogMode}
            setProductFormData={setProductFormData}
            productFormData={productFormData}
            addProduct={addProduct}
            updateProduct={updateProduct}
            setDialogMode={setDialogMode}
          />
        </>
      }
    />
  );
});

export default ProductListPage;
