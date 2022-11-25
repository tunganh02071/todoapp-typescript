/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable no-empty-pattern */

// libarary
import bind from "classnames/bind";
import { memo, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { DEFAULT_PRODUCT_FORM_DATA } from "src/consts/product";
import { ProductDialogProp } from "src/types";

// types
import { DialogMode } from "src/types";

// component

// styles
import styles from "./Component.module.scss";

const cx = bind.bind(styles);

const ProductDialog = memo(
  ({ dialogMode, setProducts, setDialogMode }: ProductDialogProp) => {
    const { register } = useForm({
      defaultValues: DEFAULT_PRODUCT_FORM_DATA,
    });

    const show = dialogMode !== DialogMode.None;
    const title = useMemo(() => {
      switch (dialogMode) {
        case DialogMode.Create:
          return "Create Product";
        case DialogMode.Create:
          return "Edit Product";
        default:
          return "";
      }
    }, [dialogMode]);

    const handleClose = () => setDialogMode(DialogMode.None);

    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="productForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" {...register("name")} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="productForm.ControlInput1"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" {...register("price")} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
);

export default ProductDialog;
