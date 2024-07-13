import { Items } from "./Item";

export interface Product {
  page: number;
  size: number;
  total: number;
  debug: null;
  previous_page: string;
  next_page: string;
  items: Items[];
}
