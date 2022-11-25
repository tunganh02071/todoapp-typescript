/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */

// librarys
import { SubmitHandler, useForm } from "react-hook-form";
import bind from "classnames/bind";

// utils
import { makeid } from "src/utils/randomId";

// components
import { IModalAddEditProductProps } from "src/types/components";

// styles
import styles from "./Component.module.scss";

const cx = bind.bind(styles);

type Inputs = {
  name: string;
  price: string;
};

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
    <div className={cx("form__total")}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cx("form__total--infor")}
      >
        <h1>{isEditProduct ? "Edit" : "Add"}</h1>
        <input
          type="text"
          {...register("name", { required: true })}
          className={cx("form__total--infor__input", "input-name")}
        />

        <input
          type="number"
          {...register("price", { required: true })}
          className={cx("form__total--infor__input", "input-number")}
        />

        {(errors.name || errors.price) && <span>This field is required</span>}

        <div
          style={{ display: "flex", width: "92%" }}
          className={cx("form__total--submit")}
        >
          <button
            type="submit"
            className={cx("form__total--submit__btn", "btn-submit")}
          >
            {isEditProduct ? "Update Product" : "Add new Product"}
          </button>

          <button
            className={cx("form__total--submit__btn", "btn-cancel")}
            type="reset"
            onClick={() => handleCloseModal()}
          >
            Canncel
          </button>
        </div>
      </form>
    </div>
  );
}
