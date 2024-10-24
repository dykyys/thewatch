import { useState } from 'react';
import { CartItem, Product } from '../../types';
import { RatingAverage } from '../RatingAverage/RatingAverage';
import { SizeToggle } from '../SizeToggle/SizeToggle';
import { InfoAccordion } from '../InfoAccordion/InfoAccordion';

export const ProductInfo = ({
  product,
  addToCart,
}: {
  product: Product;
  addToCart: (item: CartItem) => void;
}) => {
  const [size, setSize] = useState('');
  const item = { product, size: size, quantity: 1 };

  return (
    <div className="flex flex-col gap-5 p-5">
      <h2 className="flex justify-between text-3xl font-normal">
        <span className="w-2/3">{product.name}</span>
        <span>${product.price}</span>
      </h2>
      <p>{product.model}</p>
      <RatingAverage reviews={product.reviews} />

      <div className="flex justify-between items-end">
        <SizeToggle sizes={product.sizes} onChange={(s) => setSize(s)} />
        <button
          className="bg-black disabled:bg-gray-dark text-white px-5 py-2 rounded font-medium hover:bg-yellow focus:bg-yellow hover:text-softCoral focus:text-softCoral"
          disabled={!size}
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      </div>
      <InfoAccordion product={product} />
    </div>
  );
};
