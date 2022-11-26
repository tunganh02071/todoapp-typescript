import { ReactNode } from "react";
import { IProduct, IProductFormData } from "./data";
import { DialogMode } from "./enum";

export interface LayoutProps {}
export interface ProductTableProps {
  products: any;
  completeProduct: any;
  removeProduct: any;
  updateProduct: any;
}
export interface IModalAddEditProductProps {
  addProduct: any;
  handleCloseModal: any;
  isEditProduct: boolean;
}
export interface ProductListPageProps {
  products: IProduct[];
  deleteProduct: (productID: string) => void;
  setProductFormData: (newProductFormData: IProductFormData) => void;
  setDialogMode: (newDialogMode: DialogMode) => void;
}

export interface PageLayoutProps {
  headerElement: ReactNode;
  bodyElement: ReactNode;
}

export interface ProductDialogProp {
  dialogMode: DialogMode;
  productFormData: IProductFormData;
  addProduct: (newProduct: IProduct) => void;
  updateProduct: (updatedProduct: IProduct) => void;
  setDialogMode: (newDialogMode: DialogMode) => void;
}
