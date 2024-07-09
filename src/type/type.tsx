export interface Product {
  id: number;
  brandName: string;
  brandInfo: string;
  price: string;
  image: string;
  quantity: number;
}

export type Products = Product[];
