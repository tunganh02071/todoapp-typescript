/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

// librarys
import bind from "classnames/bind";
import { memo, useState } from "react";
import { Button } from "react-bootstrap";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

// types
import {
  DialogMode,
  IProduct,
  IProductFormData,
  ProductListPageProps,
} from "src/types";

// style
import styles from "./ProductTable.module.scss";

const cx = bind.bind(styles);

const ProductTable = memo(
  ({
    products,
    deleteProduct,
    setProductFormData,
    setDialogMode,
  }: ProductListPageProps) => {
    const openEditProductDialog = (product: IProduct) => {
      setProductFormData({ ...product });
      setDialogMode(DialogMode.Edit);
    };

    return (
      <>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>NTH</th>
              <th>Name</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={`product-${product.id}`}>
                  <th>{index + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => {
                        openEditProductDialog(product);
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        deleteProduct(product.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  },
);

export default ProductTable;
