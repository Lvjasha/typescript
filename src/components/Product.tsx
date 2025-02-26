import { useState } from 'react';
import { IProduct } from '../models';
import { Button, Flex } from 'antd';

interface ProductProps {
    product: IProduct;
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false);
    // const btnType = details ? 'primary' : '';
    return (
        <div className="container">
            <div className="row border p-2 mb-3 rounded flex flex-col text-center bg-light">
                <div className="col-md-1 col-bg-2 fs-4 fw-bold">
                    <img
                        src={product.image}
                        className="rounded img-fluid float-start pb-2"
                        alt={product.title}
                    />
                    {product.price}
                </div>
                <div className="col-md-8 text-start">
                    <p className=" fs-5 fw-bold  ps-5">{product.title}</p>
                    {details && (
                        <div>
                            <p className=" ps-5">{product.description}</p>
                        </div>
                    )}
                </div>
                <div className="col-md-3 my-auto justify-content-center">
                    <Flex gap="small" wrap>
                        <Button
                            // type={btnType}
                            onClick={() => setDetails((prev) => !prev)}
                        >
                            {details ? 'Hide Details' : 'Show Details'}
                        </Button>
                    </Flex>
                </div>
            </div>
        </div>
    );
}
