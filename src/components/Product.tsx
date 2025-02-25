import { IProduct } from '../models';

interface ProductProps {
    product: IProduct;
}

export function Product(props: ProductProps) {
    return (
        <div className="border p-2 mb-3 rounded flex flex-col text-center bg-light">
            Product
        </div>
    );
}
