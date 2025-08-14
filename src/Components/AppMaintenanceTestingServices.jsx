import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import maintenanceImage from "../assets/ServicesImage/Appmaintains.jpg";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is App Maintenance & Testing?",
        answer:
            "App maintenance and testing ensure that applications remain functional, secure, and up-to-date by fixing bugs, optimizing performance, and updating features.",
    },
    {
        question: "Why is regular app maintenance important?",
        answer:
            "Regular maintenance enhances app performance, ensures security, improves user experience, and keeps the application compatible with the latest OS updates.",
    },
    {
        question: "What types of testing are crucial for an app?",
        answer:
            "Key testing types include functional testing, security testing, performance testing, usability testing, and compatibility testing.",
    },
];

const AppMaintenanceTestingServices = () => {
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
                    <img src={maintenanceImage} alt="App Maintenance & Testing" className="w-full h-auto object-cover" />
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="Uiimg flex flex-col justify-center mt-10 p-6"
                >
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">App Maintenance & Testing Services</h1>
                    <p className="text-gray-600 mb-4">
                        App maintenance and testing services focus on ensuring seamless performance, fixing bugs, optimizing security, and adapting to new updates. Proper testing helps eliminate crashes and enhances user satisfaction.
                    </p>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Key Aspects of App Maintenance & Testing</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Bug Fixing & Error Resolution</li>
                        <li>Performance Monitoring & Optimization</li>
                        <li>Security Updates & Vulnerability Patching</li>
                        <li>UI/UX Enhancements & Accessibility Improvements</li>
                        <li>Database Maintenance & Backup Solutions</li>
                        <li>Cross-Device & OS Compatibility Testing</li>
                        <li>Regression Testing & Automated Testing</li>
                        <li>User Feedback Analysis & Updates</li>
                    </ul>
                    <div className="text-center mt-20 mb-5">
                        <Link to="/contact" className="px-10 py-3 text-white bg-blue-600 rounded-full">Get Started</Link>
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white px-5 py-1"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">App Maintenance & Testing Process</h1>
                <ul className="list-disc pl-5 md:pl-10 text-gray-700 space-y-2">
                    <li>Comprehensive App Analysis & Health Check</li>
                    <li>Bug Tracking & Resolution</li>
                    <li>Performance Benchmarking & Load Testing</li>
                    <li>Security Testing & Threat Mitigation</li>
                    <li>Functionality & Usability Testing</li>
                    <li>Regular Updates & Feature Enhancements</li>
                    <li>Post-Deployment Support & Optimization</li>
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

export default AppMaintenanceTestingServices;
