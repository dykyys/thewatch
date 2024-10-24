import { Footer, Header, Images, ProductInfo } from './components';
import { useCart } from './hooks/useCard';
import { TISSOT_SEASSTAR as product, SCROOGE as user } from './data';

function App() {
  const [cart, addToCart] = useCart();
  return (
    <>
      <Header cart={cart} user={user} />
      <div className="flex-grow">
        <ProductInfo />
        <Images />
        <h1 className="text-3xl font-bold">The watch</h1>
      </div>

      <Footer />
    </>
  );
}

export default App;
