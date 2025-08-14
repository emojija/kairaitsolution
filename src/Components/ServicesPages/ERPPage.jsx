import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import erpImage from "../../assets/ServicesImage/ERPImage.jpg";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is ERP Software?",
        answer:
            "ERP (Enterprise Resource Planning) software integrates core business processes such as finance, HR, manufacturing, supply chain, and more into a unified system for efficiency.",
    },
    {
        question: "What are the key benefits of ERP?",
        answer:
            "ERP enhances operational efficiency, automates workflows, improves data accuracy, and provides real-time insights for better decision-making.",
    },
    {
        question: "How does ERP improve business productivity?",
        answer:
            "By streamlining operations, reducing manual tasks, and improving collaboration across departments, ERP systems help businesses enhance productivity and scalability.",
    },
];

const ERPPage = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleContent = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="bg-gray-100  mt-15 px-5"
        >
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden  flex flex-col md:flex-row">
                <motion.div 
                    initial={{ x: -100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                    className="Uiimg mt-10 w-full"
                >
                    <img src={erpImage} alt="ERP Software" className="w-full h-auto object-cover" />
                </motion.div>
                <motion.div 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                    className="Uiimg flex flex-col justify-center p-6"
                >
                    <h1 className="text-3xl font-bold text-gray-800 mb-5">ERP Software Services</h1>
                    <p className="text-gray-600 mb-4">
                        ERP software solutions streamline business operations, improve workflow automation, and enhance data management to help organizations achieve efficiency and growth.
                    </p>
                    <strong><h2 className="mt-4 mb-2 text-gray-700"> Features of ERP Software</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Finance & Accounting – Automates financial transactions, reporting, and compliance.</li>
                        <li>Inventory Management – Tracks stock levels, procurement, and supply chain processes.</li>
                        <li>HR & Payroll – Manages employee data, payroll, and performance evaluation.</li>
                        <li>CRM – Improves customer relationship management and sales tracking.</li>
                        <li>Manufacturing – Streamlines production planning and resource allocation.</li>
                        <li>Business Intelligence – Provides analytics and real-time insights for decision-making.</li>
                    </ul>
                    <div className="text-center mt-10 mb-5">
                        <Link to="/contact" className="px-10 py-3 text-white bg-blue-600 rounded-full">Let's Start</Link>
                    </div>
                </motion.div>
            </div>
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="bg-white px-5 py-10"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">Types of ERP Services</h1>
                <ul className="list-disc pl-5 md:pl-10 text-gray-700 space-y-2">
                    <li>Cloud ERP – Accessible anywhere with cloud hosting.</li>
                    <li>On-Premise ERP – Installed locally for full control.</li>
                    <li>Open-Source ERP – Customizable and cost-effective.</li>
                    <li>Industry-Specific ERP – Tailored for healthcare, retail, manufacturing, etc.</li>
                    <li>Small Business ERP – Affordable solutions for startups & SMEs.</li>
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

export default ERPPage;
