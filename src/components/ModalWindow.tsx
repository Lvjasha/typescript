import './Modal.module.css';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import CreateProduct from './CreateProduct';

function ModalWindow() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <CreateProduct />
            </Modal>
        </>
    );
}

export default ModalWindow;
