import ModalWindow from './components/ModalWindow';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';

function App() {
    const { loading, error, products } = useProducts();
    return (
        <div className="container  px-4 p-3">
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {products.map((product) => (
                <Product product={product} key={product.id} />
            ))}
            <ModalWindow />
        </div>
    );
}

export default App;
