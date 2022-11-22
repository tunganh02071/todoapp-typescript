/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import { useState, ChangeEvent } from "react";
import "./TableList.scss";

// // eslint-disable-next-line no-empty-pattern
// function TableList({
//   products,
//   changeStatusProductItem,
//   removeProduct,
// }: ProductListPageProps) {
//   const [input, setInput] = useState("");

//   const handelSubmit = (e: ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     props.onSubmit({
//       id: Math.floor(Math.random() * 1000000),
//       text: input,
//     });

//     setInput("");
//   };

//   const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//   };
//   return (
//     <div className="list-product" style={{ textAlign: "center" }}>
//       <form className="list-form" onSubmit={handelSubmit}>
//         <input
//           type="text"
//           placeholder={props.edit ? `Update item` : "Add product"}
//           value={input}
//           className="name-input"
//           onChange={handelChange}
//         />
//         <button className={`type-button edit`} type="submit">
//           {props.edit ? "Update product " : "Add product"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default TableList;
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { IProduct } from "src/types";

export interface ProductListPageProps {
  products: IProduct[];
  changeStatusProductItem: any;
  removeProduct: any;
  updateProduct: any;
  handleOpenEditModal: any;
}

function TableList({
  products,
  changeStatusProductItem,
  removeProduct,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateProduct,
  handleOpenEditModal,
}: ProductListPageProps) {
  // const [isEditProduct, setIsEditProduct] = useState(false);
  return (
    <div>
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <table style={{ width: "50%", textAlign: "center" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>
                <RiCloseCircleLine />
              </th>
              <th>
                <TiEdit />
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: IProduct) => (
              <tr>
                <td>{product.id}</td>
                <td onClick={() => changeStatusProductItem(product.id)}>
                  {product.name}
                </td>
                <td onClick={() => changeStatusProductItem(product.id)}>
                  {product.price}
                </td>
                <td>
                  <RiCloseCircleLine
                    onClick={() => removeProduct(product.id)}
                  />
                </td>
                <td>
                  <TiEdit
                    onClick={() => {
                      handleOpenEditModal();
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {products.map((product: IProduct) => {
        return (
          <div
            style={{
              padding: 16,
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #d1d1d1",
              borderRadius: 12,
            }}
            key={product.id}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h3 onClick={() => changeStatusProductItem(product.id)}>
                {product.name}
              </h3>
              <p onClick={() => changeStatusProductItem(product.id)}>
                {product.price}
              </p>
            </div>
            <div
              style={{
                width: 80,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="icon icon-delete">
                <RiCloseCircleLine
                  color="white"
                  onClick={() => removeProduct(product.id)}
                />
              </span>
              <span className="icon icon-update">
                <TiEdit
                  color="white"
                  onClick={() => {
                    handleOpenEditModal();
                  }}
                />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TableList;
