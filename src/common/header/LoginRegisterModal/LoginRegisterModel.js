import React, { useState } from 'react';
import Modal from 'react-modal';

const LoginRegisterModal = (props) => {
    const {isModalOpen, closeModal} = props;
    
    return <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        
    >
        
    </Modal>
}