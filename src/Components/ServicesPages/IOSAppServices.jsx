import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import iosImage from "../../assets/ServicesImage/Appmaintains.jpg";
import { motion } from 'framer-motion';

const faqs = [
    {
        question: "What is iOS App Development?",
        answer:
            "iOS app development is the process of creating mobile applications for Apple devices using languages like Swift and Objective-C, along with frameworks like SwiftUI and UIKit.",
    },
    {
        question: "What are the benefits of iOS App Development?",
        answer:
            "iOS apps offer high security, better performance, seamless user experience, and access to a premium user base.",
    },
    {
        question: "Which industries benefit from iOS apps?",
        answer:
            "Industries like finance, healthcare, e-commerce, entertainment, and education leverage iOS apps for superior user engagement and business growth.",
    },
];

const IOSAppServices = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleContent = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="bg-gray-100"
        >
            <div className="bg-white shadow-lg p-6 rounded-2xl overflow-hidden flex flex-col md:flex-row">
                <motion.div 
                    initial={{ x: -100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                    className="mt-30 mb-20 w-full"
                >
                    <img src={iosImage} alt="iOS App Development" className="w-full h-auto object-cover" />
                </motion.div>
                <motion.div 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                    className="Uiimg flex flex-col justify-center mt-10 p-6"
                >
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">iOS App Development Services</h1>
                    <p className="text-gray-600 mb-4">
                        iOS app development focuses on designing, building, and optimizing apps for Apple devices. It ensures high performance, robust security, and an excellent user experience for businesses and customers.
                    </p>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Key Features of iOS App Development</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Custom iOS App Development</li>
                        <li>High-Performance UI/UX Design</li>
                        <li>Secure & Scalable Architecture</li>
                        <li>Cross-Device Compatibility</li>
                        <li>App Store Deployment Assistance</li>
                        <li>Ongoing Maintenance & Support</li>
                    </ul>
                    <div className="text-center mt-20 mb-5">
                        <Link to="/contact" className="px-10 py-3 text-white bg-blue-600 rounded-full">Let's Start</Link>
                    </div>
                </motion.div>
            </div>
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className="bg-white px-5 py-1"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">iOS App Development Process</h1>
                <ul className="list-disc pl-5 md:pl-10 text-gray-700 space-y-2">
                    <li>Requirement Gathering</li>
                    <li>UI/UX Wireframing & Design</li>
                    <li>App Development & Coding</li>
                    <li>Testing & Quality Assurance</li>
                    <li>Deployment to App Store</li>
                    <li>Post-Launch Updates & Support</li>
                </ul>
            </motion.div>
            <h1 className="text-3xl text-center font-bold text-gray-800 mt-10 mb-5">FAQ</h1>
            <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-4 rounded-lg shadow-md"
                    >
                        <button
                            className="w-full flex justify-between items-center text-left text-gray-800 text-lg font-semibold"
                            onClick={() => toggleContent(index)}
                        >
                            {faq.question}
                            {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        {expandedIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default IOSAppServices;
