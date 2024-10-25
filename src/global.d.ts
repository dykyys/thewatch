export {};
declare global {
  type Review = {
    id: number;
    rating: number;
    date: number;
    text?: string;
  };
  type CartItem = {
    product: Product;
    size: string;
    quantity: number;
  };

  type Cart = CartItem[];

  type User = {
    name: string;
  };

  interface Product {
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

  type Image = {
    url: string;
    title?: string;
    alt: string;
    id: number;
  };
}
