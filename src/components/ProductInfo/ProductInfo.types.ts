export interface IProductInfo {
  product: Product;
  addToCart: (item: CartItem) => void;
}
