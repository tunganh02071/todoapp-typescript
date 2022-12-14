/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

// librarys
import bind from "classnames/bind";
import { memo } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

// types
import { DialogMode, IProduct, ProductListPageProps } from "src/types";

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
      <Table className="table" striped bordered hover>
        <thead className="thead-dark">
          <tr className={cx("table-header")}>
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
              <tr key={`product-${product.id}`} className={cx("table-body")}>
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
      </Table>
    );
  },
);

export default ProductTable;
