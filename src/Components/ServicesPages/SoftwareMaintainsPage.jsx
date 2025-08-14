import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import maintenanceImage from "../../assets/ServicesImage/SoftwareMaintainsimg.jpg";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is Software Maintenance?",
        answer:
            "Software maintenance is the process of modifying, updating, and improving software applications to fix bugs, enhance performance, and adapt to changing requirements.",
    },
    {
        question: "Why is Software Maintenance important?",
        answer:
            "Regular software maintenance ensures stability, security, and efficiency, preventing system failures and improving user experience.",
    },
    {
        question: "What are the types of Software Maintenance?",
        answer:
            "Software maintenance includes corrective, adaptive, perfective, and preventive maintenance to keep applications running smoothly.",
    },
];

const SoftwareMaintenancePage = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleContent = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="bg-gray-100 "
        >
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
                <motion.div 
                    initial={{ x: -100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                    className=" mt-10 w-full"
                >
                    <img src={maintenanceImage} alt="Software Maintenance" className="w-full h-auto object-cover" />
                </motion.div>
                <motion.div 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                    className="Uiimg flex flex-col justify-center p-6"
                >
                    <h1 className="text-3xl font-bold text-gray-800 mb-5">Software Maintenance Services</h1>
                    <p className="text-gray-600 mb-4">
                        Software maintenance ensures the continuous and efficient performance of applications by fixing bugs, upgrading features, and improving security.
                    </p>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Types of Software Maintenance</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Corrective Maintenance – Fixing bugs and issues to restore functionality.</li>
                        <li>Adaptive Maintenance – Updating software to support new environments or technologies.</li>
                        <li>Perfective Maintenance – Enhancing software features based on user needs.</li>
                        <li>Preventive Maintenance – Proactively identifying and resolving potential issues.</li>
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
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">Software Maintenance Strategies</h1>
                <ul className="list-disc pl-5 md:pl-10 text-gray-700 space-y-2">
                    <li>Regular Updates – Keeping software up-to-date with the latest technology.</li>
                    <li>Security Patches – Fixing vulnerabilities to prevent cyber threats.</li>
                    <li>Performance Optimization – Enhancing speed and efficiency.</li>
                    <li>Backup & Recovery – Ensuring data safety and disaster recovery.</li>
                    <li>Code Refactoring – Improving code structure for long-term stability.</li>
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

export default SoftwareMaintenancePage;