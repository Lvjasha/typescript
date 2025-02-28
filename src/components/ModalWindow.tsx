import './Modal.module.css';
import { Button, Modal } from 'antd';
import { useState, useContext } from 'react';
// import ModalProps from './Product';
// import CreateProduct from './CreateProduct';
import { ModalContext } from '../conext/ModalContext';

interface ModalProps {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
}

function ModalWindow({ children, title, onClose }: ModalProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { modal, open, close } = useContext(ModalContext);

    return (
        <>
            <div className="" onClick={onClose}>
                <Button type="primary" onClick={open}>
                    Open Modal
                </Button>
                <Modal title="Basic Modal" onOk={close}>
                    <h1>{title}</h1>
                    {children}
                </Modal>
            </div>
        </>
    );
}

export default ModalWindow;
