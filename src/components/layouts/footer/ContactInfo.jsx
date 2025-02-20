import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";


const ContactInfo = () => {
    return (
        <div className="space-y-4 lg:col-span-2 col-span-1">
            <h1 className="uppercase font-bold">Contact Us</h1>
            <div className="flex-center justify-start space-x-2 text-sm">
                <MdOutlineLocationOn size={20}/>
                <p className="font-semibold">Address: London Oxford Street, 012 United Kingdom.</p>
            </div>
            <div className="flex-center justify-start space-x-2 text-sm">
                <FiPhone size={15} />
                <p>Phone : (+032) 3456 7890</p>
            </div>
            <div className="flex-center justify-start space-x-2 text-sm">
                <TfiEmail size={15} />
                <p>Email: Botanicalstore@gmail.com</p>
            </div>
            <div className="flex-center justify-start">
                <h2 className="font-bold mr-4 text-sm">Follow us:</h2>
                <div className="flex-center justify-start space-x-4 text-xl">
                    <FaFacebookF size={15} className="cursor-pointer hover:text-blue-600 animate" />
                    <IoLogoTwitter size={15} className="cursor-pointer hover:text-blue-400 animate" />
                    <FaPinterest size={15} className="cursor-pointer hover:text-red-600 animate" />
                    <FaGooglePlusG size={20} className="cursor-pointer hover:text-red-500 animate" />
                </div>
            </div>
        </div>
    );
};

export default ContactInfo