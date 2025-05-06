import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const adminNumber = "+97337736840";
    const message = "Hi, I need some more information about Product"; 

    const whatsappLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp size={28} />
        </Link>
    );
};

export default WhatsAppButton;
