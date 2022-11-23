import { IProduct } from "./data";

export interface LayoutProps {}
export interface TableListProps {
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
  removeProduct: any;
  updateProduct: any;
  handleOpenEditModal: any;
}
