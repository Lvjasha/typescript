import './Modal.module.css';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import ModalProps from './Product';
// import CreateProduct from './CreateProduct';

interface ModalProps {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
}

function ModalWindow({ children, title, onClose }: ModalProps) {
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
            <div className="" onClick={onClose}>
                <Button type="primary" onClick={setModal(true)}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <h1>{title}</h1>
                    {children}
                </Modal>
            </div>
        </>
    );
}

export default ModalWindow;
