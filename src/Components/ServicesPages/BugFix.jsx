import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import bugFixImage from "../../assets/ServicesImage/BugFiximg.jpg";

const faqs = [
    {
        question: "Why is bug fixing important?",
        answer:
            "Bug fixing ensures smooth website performance, prevents crashes, and enhances user experience.",
    },
    {
        question: "What does bug fixing include?",
        answer:
            "It includes fixing broken links, resolving UI issues, debugging code, and enhancing website security.",
    },
    {
        question: "How often should a website be checked for bugs?",
        answer: "Regular testing and maintenance should be done at least once a month to ensure a bug-free experience.",
    },
];

const BugFix = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleContent = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100  py-2">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
                <div className=" mt-10 w-full">
                    <img src={bugFixImage} alt="Bug Fixing" className="w-full h-auto object-cover" />
                </div>
                <div className="Uiimg flex flex-col justify-center p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">Bug Fixing</h1>
                    <p className="text-gray-600 mb-10">
                        Identifying and fixing bugs is crucial to maintaining a functional and efficient website. Regular bug fixing helps improve user experience and security.
                    </p>
                    <strong><h2 className="text-gray-700">used Bug Fixes in Websites</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Fixing broken links and missing pages.</li>
                        <li>Resolving UI/UX glitches for a smoother experience.</li>
                        <li>Debugging JavaScript, CSS, and backend code errors.</li>
                        <li>Fixing performance issues like slow page loading.</li>
                        <li>Enhancing security by fixing vulnerabilities.</li>
                    </ul>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Key Benefits of Bug Fixing</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Smoother Performance – Enhances website speed and functionality.</li>
                        <li>Better User Experience – Fixes glitches and improves interaction.</li>
                        <li>Improved Security – Protects from malware and vulnerabilities.</li>
                        <li>Higher SEO Ranking – A bug-free website ranks better on search engines.</li>
                        <li>Reduced Downtime – Ensures a reliable and stable website.</li>
                    </ul>
                    <div className="text-center mt-10 mb-5">
                        <Link to="Contact" className="px-10 py-3 text-white bg-blue-600 rounded-full ">Let's Start</Link>
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

export default BugFix;
