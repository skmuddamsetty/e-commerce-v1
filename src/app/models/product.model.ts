export interface Product {
  productName?: string;
  price?: string;
  rating?: string;
  category?: string;
}
export interface ProductId extends Product {
  id: string;
}
