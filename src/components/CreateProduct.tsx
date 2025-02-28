import { Button } from 'antd';
import { useState } from 'react';
import { IProduct } from '../models';
import axios from 'axios';
import { ErrorMessage } from './ErrorMessage';

const productData: IProduct = {
    title: '',
    price: 0.1,
    description: 'string',
    category: 'string',
    image: 'http://example.com',
    rating: {
        rate: 42,
        count: 10,
    },
};

interface CreateProductProps {
    onCreate: (product: IProduct) => void;
}

function CreateProduct({ onCreate }: CreateProductProps) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        if (value.trim().length === 0) {
            setError('Please enter valid title.');
            return;
        }

        productData.title = value;

        const response = await axios.post<IProduct>(
            'https://fakestoreapi.com/products',
            productData
        );
        onCreate(response.data);
    };

    const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    className="border py-2 px-4 mb-2"
                    placeholder="Enter product title..."
                    value={value}
                    onChange={changeHandler}
                />
                {error && <ErrorMessage error={error} />}
                <Button htmlType="submit" className="ms-2">
                    Click me
                </Button>
            </form>
        </>
    );
}

export default CreateProduct;
