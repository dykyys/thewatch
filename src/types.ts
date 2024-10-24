export type CartItem = {
  product: Product;
  size: string;
  quantity: number;
};

export type Cart = CartItem[];

export type User = {
  name: string;
};

export interface Product {
  id: string;
  name: string;
  images: Image[];
  description: string;
  model: string;
  features: string[];
  reviews: Review[];
  price: number;
  sizes: string[];
}

export type Image = {
  url: string;
  title?: string;
  alt: string;
};

export type Review = {
  id: number;
  rating: number;
  date: number;
  text?: string;
};
