import { Container, Footer, Header, Images, ProductInfo } from './components';
import { useCart } from './hooks/useCard';
import { TISSOT_SEASSTAR as product, SCROOGE as user } from './data';

function App() {
  const [cart, addToCart] = useCart();
  return (
    <>
      <Header cart={cart} user={user} />
      <main className="flex-grow">
        <Container classNames="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-2">
          <Images images={product.images} />
          <ProductInfo product={product} addToCart={addToCart} />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
