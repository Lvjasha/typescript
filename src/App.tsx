import ModalWindow from './components/ModalWindow';
import CreateProduct from './components/CreateProduct';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import { useContext } from 'react';
import { IProduct } from './models';
import { ModalContext } from './conext/ModalContext';

function App() {
    const { loading, error, products, addProduct } = useProducts();
    const { modal, open, close } = useContext(ModalContext);

    const createHandler = (product: IProduct) => {
        close();
        addProduct(product);
    };

    return (
        <div className="container  px-4 p-3">
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {products.map((product) => (
                <Product product={product} key={product.id} />
            ))}

            {modal && (
                <ModalWindow title="Create new product" onClose={close}>
                    <CreateProduct onCreate={createHandler} />
                </ModalWindow>
            )}
        </div>
    );
}

export default App;
