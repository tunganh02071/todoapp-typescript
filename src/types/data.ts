export interface IProduct {
  id: string;
  name: string;
  price: number;
}

export interface IProductFormData {
  id: string | null;
  name: string | null;
  price: number | null;
}
