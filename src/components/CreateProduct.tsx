import { Button } from 'antd';
function CreateProduct() {
    return (
        <>
            <form>
                <input
                    type="text"
                    className="border py-2 px-4 mb-2"
                    placeholder="Enter product title..."
                />
                <Button className="ms-2">Click me</Button>
            </form>
        </>
    );
}

export default CreateProduct;
