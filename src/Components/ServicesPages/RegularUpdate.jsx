import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import updatesImage from "../../assets/ServicesImage/RegularUpdateImage.png";

const faqs = [
    {
        question: "Why are regular updates important?",
        answer:
            "Regular updates ensure security patches, performance improvements, and compatibility with new technologies.",
    },
    {
        question: "What does a website update include?",
        answer:
            "Updates may include security enhancements, bug fixes, content updates, UI improvements, and framework upgrades.",
    },
    {
        question: "How often should I update my website?",
        answer: "Websites should be updated regularly, at least once a month, to ensure smooth functionality and security.",
    },
];

const RegularUpdates = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleContent = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100  mt-0 px-2">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
                <div className="Uiimg mt-30 w-full">
                    <img src={updatesImage} alt="Regular Updates" className="w-full h-auto object-cover" />
                </div>
                <div className="Uiimg flex flex-col justify-center p-6 pt-20">
                    <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">Regular Updates</h1>
                    <p className="text-gray-600 mb-10">
                        Regular updates are crucial for maintaining website security, performance, and user engagement. Keeping your website up to date ensures optimal functionality.
                    </p>
                    <strong><h2 className="text-gray-700">Uses of Regular update.</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li> Security Fixes – Protects against hacking & vulnerabilities.</li>
                        <li>Bug Fixes – Improves speed & removes errors.</li>
                        <li>SEO Boost – Higher rankings with fresh content & fast loading.</li>
                        <li>New Features – Adds better UI, chatbots, forms, etc.</li>
                        <li> Content Updates – Keeps info fresh & relevant.</li>
                    </ul>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Key Benefits of Regular Updates</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Enhanced Security – Protects from vulnerabilities and cyber threats.</li>
                        <li>Better Performance – Optimized loading speed and functionality.</li>
                        <li>Improved User Experience – Keeps content fresh and relevant.</li>
                        <li>SEO Boost – Regular updates improve search engine ranking.</li>
                        <li>Bug Fixes – Ensures smooth functionality without glitches.</li>
                        <li>Compatibility – Keeps the website aligned with new technologies.</li>
                    </ul>
                    <div className="text-center mt-10 mb-5">
                        <Link to="Contact" className="px-10 py-3 text-white bg-blue-600 rounded-full">Let's Start</Link>
                    </div>
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

export default RegularUpdates;
