import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import androidImage from "../../assets/ServicesImage/AndroidAppImage.jpg";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is Android App Development?",
        answer:
            "Android app development is the process of creating mobile applications for devices running the Android operating system using languages like Java, Kotlin, and frameworks like Flutter and React Native.",
    },
    {
        question: "What are the benefits of Android App Development?",
        answer:
            "Android apps provide a wide reach, cost-effectiveness, scalability, and access to various Google services for enhanced functionality.",
    },
    {
        question: "Which industries benefit from Android apps?",
        answer:
            "Industries like e-commerce, healthcare, finance, education, and entertainment leverage Android apps to improve customer engagement and operations.",
    },
];

const AndroidAppServices = () => {
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
            <div className="bg-white shadow-lg p-6 rounded-2xl overflow-hidden flex flex-col md:flex-row">
                <motion.div 
                    initial={{ x: -100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                    className=" mt-30 mb-20 w-full "
                >
                    <img src={androidImage} alt="Android App Development" className="w-full h-auto object-cover" />
                </motion.div>
                <motion.div 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                    className="Uiimg flex flex-col justify-center mt-10 p-6"
                >
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">Android App Development Services</h1>
                    <p className="text-gray-600 mb-4">
                    Android app development involves designing, building, and maintaining mobile applications for Android devices. It focuses on creating scalable, high-performance, and user-friendly apps that enhance business operations and customer engagement.
                    </p>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Key Features of Android App Development</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Custom Android App Development</li>
                        <li>Cross-Platform Compatibility</li>
                        <li>UI/UX Design for Android Apps</li>
                        <li>Performance Optimization</li>
                        <li>Security & Compliance</li>
                        <li>Ongoing Support & Maintenance</li>
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
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">Android App Development Process</h1>
                <ul className="list-disc pl-5 md:pl-10 text-gray-700 space-y-2">
                    <li>Requirement Analysis</li>
                    <li>Wireframing & UI/UX Design</li>
                    <li>App Development & Coding</li>
                    <li>Testing & Quality Assurance</li>
                    <li>Deployment & Launch</li>
                    <li>Post-Launch Support & Updates</li>
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

export default AndroidAppServices;
