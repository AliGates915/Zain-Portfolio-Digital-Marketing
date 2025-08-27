// src/components/WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = '+923154026023';

    const handleClick = () => {
        window.open(
            `https://wa.me/${phoneNumber}`,
            '_blank',
            'noopener,noreferrer'
        );
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label="Chat on WhatsApp"
            className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition"
            style={{ zIndex: 1000 }}
        >
            <FaWhatsapp size={32} />
        </button>
    );
};

export default WhatsAppButton;
