/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { makeid } from "src/utils/randomId";
import "./style.scss";

type Inputs = {
  name: string;
  price: string;
};

export interface IModalAddEditProductProps {
  addProduct: any;
  handleCloseModal: any;
  isEditProduct: boolean;
}

export default function ModalAddEditProduct({
  addProduct,
  handleCloseModal,
  isEditProduct,
}: IModalAddEditProductProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const value = {
      id: makeid(4),
      name: data.name,
      isComplete: false,
      price: data.price,
    };
    addProduct(value);
    handleCloseModal();
  };
  return (
    <div style={{ textAlign: "center", width: "100%", position: "relative" }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 24,
          alignItems: "center",
          // position: "absolute",
        }}
      >
        <h1>{isEditProduct ? "Edit" : "Add"}</h1>
        <input
          type="text"
          {...register("name", { required: true })}
          className="input-name"
        />

        <input
          type="number"
          {...register("price", { required: true })}
          className="input-number"
        />

        {(errors.name || errors.price) && <span>This field is required</span>}

        <div style={{ display: "flex", width: "92%" }}>
          <button type="submit" className="btn-submit">
            {isEditProduct ? "Update Product" : "Add new Product"}
          </button>

          <button className="btn-cancel" type="reset">
            Canncel
          </button>
        </div>
      </form>
    </div>
  );
}
