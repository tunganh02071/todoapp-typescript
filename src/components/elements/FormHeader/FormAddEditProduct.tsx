/* eslint-disable no-empty-pattern */
import { useState } from "react";
import { IProduct } from "src/types";
import { makeid } from "src/utils/randomId";
import "./Component.scss";

export interface FormAddEditProductProps {
  addProduct: (value: IProduct) => void;
}
function FormAddEditProduct({ addProduct }: FormAddEditProductProps) {
  const [valueProduct, setValueProduct] = useState("");
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      const value = {
        id: makeid(4),
        name: valueProduct,
        isComplete: false,
        price: Math.random(),
      };
      addProduct(value);
      setValueProduct("");
    }
  };
  return (
    <div>
      <input
        type="text"
        name="product"
        value={valueProduct}
        onChange={(e) => setValueProduct(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
}

export default FormAddEditProduct;
