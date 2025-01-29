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
            <div className="flex items-center space-x-2">
                <MdOutlineLocationOn size={25} />
                <p className="font-semibold">Address: London Oxford Street, 012 United Kingdom.</p>
            </div>
            <div className="flex items-center space-x-2">
                <FiPhone size={20} />
                <p>Phone : (+032) 3456 7890</p>
            </div>
            <div className="flex items-center space-x-2">
                <TfiEmail size={20} />
                <p>Email: Botanicalstore@gmail.com</p>
            </div>
            <div className="flex items-center">
                <h2 className="font-bold mr-4">Follow us:</h2>
                <div className="flex items-center space-x-4 text-xl">
                    <FaFacebookF className="cursor-pointer hover:text-blue-600" />
                    <IoLogoTwitter className="cursor-pointer hover:text-blue-400" />
                    <FaPinterest className="cursor-pointer hover:text-red-600" />
                    <FaGooglePlusG className="cursor-pointer hover:text-red-500" />
                </div>
            </div>
        </div>
    );
};

export default ContactInfo