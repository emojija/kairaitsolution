import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import CMSImage from '../../assets/ServicesImage/CMSImage.png'
import Contact from "../Contact";

const faqs = [
    {
        question: "What is a CMS?",
        answer:
            "A Content Management System (CMS) is software that helps users create, manage, and modify digital content on a website without requiring technical knowledge.",
    },
    {
        question: "What are the Benefits of a CMS?",
        answer:
            "A CMS simplifies content management, offers customizable templates, supports SEO, allows multi-user collaboration, and requires little to no coding knowledge.",
    },
    {
        question: "Which are the Popular CMS Platforms?",
        answer: "Some of the most popular CMS platforms include WordPress, Joomla, Drupal, Shopify, and Magento.",
    },
];

const CMSPage = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleContent = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100 py-10 mt-10 px-5">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
                <div className="Uiimg mt-30 w-full">
                    <img src={CMSImage} alt="CMS Solutions" className="w-full h-auto object-cover" />
                </div>
                <div className="Uiimg flex flex-col justify-center p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-5">CMS Solutions</h1>
                    <p className="text-gray-600 mb-4">
                        CMS solutions help businesses and individuals create, manage, and optimize website content efficiently. They provide user-friendly interfaces, customization options, and powerful SEO tools.
                    </p>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Technologies Used in CMS</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>CMS Platforms: WordPress, Joomla, Drupal, Shopify</li>
                        <li>Backend: PHP, Node.js, Python</li>
                        <li>Databases: MySQL, PostgreSQL, Firebase</li>
                        <li>SEO Optimization: Yoast SEO, Rank Math</li>
                        <li>Security: SSL, Two-Factor Authentication, Firewalls</li>
                    </ul>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Key Benefits</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Easy Content Management – Update pages and blogs without coding.</li>
                        <li>SEO-Friendly – Built-in SEO tools for better search engine ranking.</li>
                        <li>Customization – Themes, templates, and plugins support.</li>
                        <li>Multi-User Access – Allows different roles like editors, admins, and authors.</li>
                        <li>Security – Regular updates and security patches ensure data protection.</li>
                    </ul>
                    <div className="text-center mt-10 mb-5">
                        <Link to="Contact"className="px-10 py-3 text-white bg-blue-600 rounded-full">Let's Start</Link>
                    </div>
                </div>
            </div>
            <div className="bg-white px-5 py-10">
                <div className="">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5 ml-6">Types of CMS Solutions</h1>
                    <ul className="list-disc pl-5 md:pl-10 text-gray-700 space-y-2">
                        <li>Custom CMS Development – Tailored solutions for specific business needs</li>
                        <li>E-commerce CMS – Shopify, Magento for online stores</li>
                        <li>Enterprise CMS – Scalable solutions for large businesses</li>
                        <li>Headless CMS – API-driven content management</li>
                        <li>SEO & Performance Optimization – Tools for better search engine rankings</li>
                        <li>Security & Maintenance – Regular updates, security patches, and backups</li>
                    </ul>
                </div>
            </div>
            <h1 className="text-3xl text-center font-bold text-gray-800 mt-10 mb-5">FAQ</h1>
            <div className="max-w-4xl mx-auto space-y-4">
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
            </div>
        </div>
    );
};

export default CMSPage;