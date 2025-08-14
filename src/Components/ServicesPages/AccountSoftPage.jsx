import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import accountingImage from "../../assets/ServicesImage/AccountingImage.jpg";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is Accounting Software?",
        answer:
            "Accounting software is a digital solution that helps businesses manage their financial transactions, bookkeeping, and reporting efficiently.",
    },
    {
        question: "What are the key benefits of Accounting Software?",
        answer:
            "Accounting software automates financial tasks, reduces human errors, provides real-time financial insights, and simplifies tax compliance.",
    },
    {
        question: "How does Accounting Software improve financial management?",
        answer:
            "By automating invoicing, payroll, and tax calculations, accounting software ensures accuracy and efficiency in financial management.",
    },
];

const AccountSoftPage = () => {
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
                    <img src={accountingImage} alt="Accounting Software" className="w-full h-auto object-cover" />
                </motion.div>
                <motion.div 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                    className="Uiimg flex flex-col justify-center p-6"
                >
                    <h1 className="text-3xl font-bold text-gray-800 mb-5">Accounting Software Services</h1>
                    <p className="text-gray-600 mb-4">
                        Accounting software streamlines financial processes, automates bookkeeping, and provides valuable insights to enhance business decision-making.
                    </p>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Core Features of Accounting Software</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Invoicing & Billing – Generate and manage invoices seamlessly.</li>
                        <li>Expense Tracking – Monitor and categorize business expenses.</li>
                        <li>Payroll Management – Automate salary calculations and tax deductions.</li>
                        <li>Tax Compliance – Ensure accurate tax calculations and filing.</li>
                        <li>Financial Reporting – Generate real-time financial statements.</li>
                        <li>Bank Reconciliation – Match financial records with bank statements.</li>
                    </ul>
                    <div className="text-center mt-20 mb-5">
                        <Link to="/contact" className="px-10 py-3  text-white bg-blue-600 rounded-full">Let's Start</Link>
                    </div>
                </motion.div>
            </div>
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className="bg-white px-5 py-1"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">Types of Accounting Software</h1>
                <ul className="list-disc pl-5 md:pl-10 text-gray-700 space-y-2">
                    <li>Cloud Accounting – Access accounting data from anywhere.</li>
                    <li>Small Business Accounting – Affordable solutions for SMEs.</li>
                    <li>Enterprise Accounting – Advanced features for large businesses.</li>
                    <li>Payroll Accounting – Specialized software for payroll management.</li>
                    <li>Tax Accounting – Focused on tax calculations and compliance.</li>
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

export default AccountSoftPage;