import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import testingImage from "../../assets/ServicesImage/SoftwareTestingimg.jpg";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is Software Testing?",
        answer:
            "Software testing is the process of evaluating and verifying that a software application meets the required standards and is free from defects.",
    },
    {
        question: "What are the key benefits of Software Testing?",
        answer:
            "Software testing helps improve product quality, enhances security, reduces development costs, and ensures a smooth user experience.",
    },
    {
        question: "How does Software Testing ensure product reliability?",
        answer:
            "By identifying and fixing bugs early in the development process, software testing ensures reliability, performance, and customer satisfaction.",
    },
];

const SoftwareTestingPage = () => {
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
                    <img src={testingImage} alt="Software Testing" className="w-full h-auto object-cover" />
                </motion.div>
                <motion.div 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                    className="Uiimg flex flex-col justify-center p-6"
                >
                    <h1 className="mt-20 text-3xl font-bold text-gray-800 mb-5">Software Testing Services</h1>
                    <p className="text-gray-600 mb-4">
                        Software testing ensures the quality, functionality, and security of applications before deployment, helping businesses deliver robust software solutions.
                    </p>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Types of Software Testing</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Unit Testing – Validates individual components of the software.</li>
                        <li>Integration Testing – Ensures proper communication between different modules.</li>
                        <li>System Testing – Tests the entire system’s functionality and performance.</li>
                        <li>Regression Testing – Verifies that new changes don’t break existing features.</li>
                        <li>Performance Testing – Evaluates speed, stability, and scalability.</li>
                        <li>Security Testing – Identifies vulnerabilities and ensures data protection.</li>
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
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">Software Testing Strategies</h1>
                <ul className="list-disc pl-5 md:pl-10 text-gray-700 space-y-2">
                    <li>Manual Testing – Performed by human testers without automation.</li>
                    <li>Automated Testing – Uses scripts and tools for efficient testing.</li>
                    <li>Functional Testing – Validates business requirements and functionalities.</li>
                    <li>Non-Functional Testing – Focuses on performance, usability, and reliability.</li>
                    <li>Exploratory Testing – Conducted without predefined test cases.</li>
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

export default SoftwareTestingPage;
