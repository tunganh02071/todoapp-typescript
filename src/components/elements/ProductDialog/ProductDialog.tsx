/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable no-empty-pattern */

// libarary
import { yupResolver } from "@hookform/resolvers/yup";
import bind from "classnames/bind";
import { memo, useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";
// types
import {
  DialogMode,
  IProduct,
  IProductFormData,
  ProductDialogProp,
} from "src/types";
import { DEFAULT_PRODUCT_FORM_DATA } from "src/consts/product";
// component

// styles
import styles from "./ProductDialog.module.scss";

const cx = bind.bind(styles);

const schema = yup.object({
  name: yup.string().required("The name is requirte"),
  price: yup.number().positive().integer().required("The name is requirte"),
});
const ProductDialog = memo(
  ({
    dialogMode,
    productFormData,
    addProduct,
    updateProduct,
    setDialogMode,
  }: ProductDialogProp) => {
    const {
      register,
      reset,
      formState: { errors },
      handleSubmit,
    } = useForm({
      defaultValues: DEFAULT_PRODUCT_FORM_DATA,
      resolver: yupResolver(schema),
    });

    const show = dialogMode !== DialogMode.None;
    const title = useMemo(() => {
      switch (dialogMode) {
        case DialogMode.Create:
          return "Create Product";
        case DialogMode.Edit:
          return "Edit Product";
        default:
          return "";
      }
    }, [dialogMode]);

    const handleClose = () => setDialogMode(DialogMode.None);
    const handleSave = (data: IProductFormData) => {
      if (dialogMode === DialogMode.Create) {
        const newProductId = uuidv4();
        const newProduct = { ...data, id: newProductId } as IProduct;
        addProduct(newProduct);
      } else if (dialogMode === DialogMode.Edit) {
        const updatedProduct = { ...data } as IProduct;
        updateProduct(updatedProduct);
      }
      handleClose();
    };
    useEffect(() => {
      reset({ ...productFormData });
    }, [productFormData]);
    return (
      <div className={cx("dialog-product")}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit(handleSave)}>
            <Modal.Body>
              <Form.Group
                className="mb-3"
                controlId="productForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" {...register("name")} />
                <p>{errors.name?.message}</p>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="productForm.ControlInput2"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" {...register("price")} />
                <p>{errors.price?.message}</p>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Save
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  },
);

export default ProductDialog;
