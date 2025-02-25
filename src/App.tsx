import { Product } from './components/Product';
import { products } from './components/data/products';

function App() {
    //const [count, setCount] = useState(0);
    // return <h1>Hi</h1>;
    // return React.createElement('h1', {}, 'Hello From JS');
    return (
        <div className="container  px-4 p-3">
            <Product product={products[0]} />
        </div>
    );
}

export default App;
