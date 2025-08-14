import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import CrmImage from "../../assets/ServicesImage/CrmImage.jpg";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is a CRM System?",
        answer:
            "A CRM (Customer Relationship Management) system helps businesses manage customer interactions, sales, and support efficiently.",
    },
    {
        question: "What are the key features of a CRM?",
        answer:
            "CRM features include contact management, sales tracking, automation, reporting, and customer support tools.",
    },
    {
        question: "Why is CRM important for a business?",
        answer: "CRM improves customer relationships, boosts sales, enhances communication, and streamlines business processes.",
    },
];

const CrmServices = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleContent = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <motion.div 
            className="bg-gray-100 py-10 mt-10 px-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
                <motion.div 
                    className="Uiimg mt-10 w-full"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={CrmImage} alt="CRM System" className="w-full h-auto object-cover" />
                </motion.div>
                <motion.div 
                    className="Uiimg flex flex-col justify-center p-6"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-3xl font-bold text-gray-800 mb-5 text-center">CRM System</h1>
                    <p className="text-gray-600 mb-4">
                        CRM software helps businesses efficiently manage customer interactions, sales, and data. It enhances communication, automates tasks, and improves customer retention.
                    </p>
                    <strong><h2 className="text-gray-700"> Features of CRM System</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Contact & Lead Management – Organizes customer information.</li>
                        <li>Sales Automation – Tracks deals and sales pipeline.</li>
                        <li>Task & Workflow Automation – Reduces manual efforts.</li>
                        <li>Reporting & Analytics – Provides business insights.</li>
                        <li>Multi-Channel Communication – Email, chat, calls integration.</li>
                    </ul>
                    <div className="text-center mt-10 mb-5">
                        <Link to="Contact" className="px-10 py-3 text-white bg-blue-600 rounded-full">Let's Start</Link>
                    </div>
                </motion.div>
              
            </div>
            <div className="mt-10 ">
            <strong><h2 className="text-gray-700 mt-4 mb-5 text-xl">Types of CRM Services</h2></strong>
            
<ul  className=" list-disc pl-5 text-gray-600 ">
    <li>Operational CRM – Automates sales, marketing, and customer service.</li>
    <li> Analytical CRM – Uses data analysis for better decision-making.</li>
    <li> Collaborative CRM – Enhances communication between teams and customers.</li>
    <li> Strategic CRM – Focuses on long-term customer engagement.</li>
    <li> Campaign Management CRM – Manages and optimizes marketing campaigns.</li>
    <li>Sales CRM – Streamlines sales processes and lead tracking.</li>
    <li>Customer Support CRM – Manages customer queries and service tickets.</li>
</ul>
            </div>

            <h1 className="text-3xl text-center font-bold text-gray-800 mt-10 mb-5">FAQ</h1>
            <motion.div 
                className="max-w-4xl mx-auto space-y-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <button
                            className="w-full flex justify-between items-center text-left text-gray-800 text-lg font-semibold"
                            onClick={() => toggleContent(index)}
                        >
                            {faq.question}
                            {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        {expandedIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default CrmServices;
