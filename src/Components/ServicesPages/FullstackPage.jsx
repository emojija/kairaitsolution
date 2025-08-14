import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import FullStack from "../../assets/ServicesImage/FullStackImg.png";

const faqs = [
    {
        question: "What is Full Stack Development?",
        answer:
            "Full Stack Development refers to the practice of working on both the frontend (client-side) and backend (server-side) of web applications. It involves using technologies like React, Node.js, Express, and databases like MySQL and MongoDB.",
    },
    {
        question: "What is the Role of a Full Stack Developer?",
        answer:
            "A Full Stack Developer is responsible for designing, developing, and maintaining both the frontend and backend components of a web application, ensuring seamless integration and performance.",
    },
    {
        question: "What are the benefits of Full Stack Development?",
        answer: "Full Stack Development allows for faster development cycles, better project flexibility, and a comprehensive understanding of both frontend and backend operations, making it a highly efficient approach.",
    },
];

const FullstackPage = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleContent = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100 py-10  px-5">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
                <div className="Uiimg mt-20  w-full h-2/3">
                    <img src={FullStack} alt="Full Stack Development" className="w-full h-full object-cover" />
                </div>
                <div className="Uiimg flex flex-col justify-center p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-5 text-center">Full Stack Development</h1>
                    <p className="text-gray-600 mb-4">
                        Full Stack services cover both frontend and backend development, ensuring a complete and efficient web application development process.
                    </p>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Technologies Used in Full Stack</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Frontend: HTML, CSS, JavaScript, React, Angular</li>
                        <li>Backend: Node.js, Express, Django, Spring Boot</li>
                        <li>Databases: MySQL, PostgreSQL, MongoDB, Firebase</li>
                        <li>API Handling: REST API, GraphQL</li>
                        <li>Version Control: Git, GitHub</li>
                        <li>Cloud Services: AWS, Firebase, Azure</li>
                    </ul>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Key Benefits</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Faster Development – Streamlined process from UI to database.</li>
                        <li>Cost-Effective – Reduces dependency on multiple specialists.</li>
                        <li>Better Performance – Optimized frontend and backend integration.</li>
                        <li>Scalability – Easy to upgrade and maintain applications.</li>
                        <li>Security – Secure authentication and data protection.</li>
                    </ul>
                    <div className="text-center mt-10 mb-5">
                        <Link to="Contact" className="px-10 py-3 text-white bg-blue-600 rounded-full">Let's Start</Link>
                    </div>
                </div>
            </div>
            <div className="bg-white px-5 py-10">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5 ml-6">Types of Full Stack Services</h1>
                <ul className="list-disc pl-5 md:pl-10 text-gray-700 space-y-2">
                    <li>Custom Full Stack Development – Tailor-made web applications</li>
                    <li>API Development – Creating RESTful and GraphQL APIs</li>
                    <li>Database Management – Designing and optimizing databases</li>
                    <li>Cloud Integration – Deploying apps on AWS, Firebase, Azure</li>
                    <li>Security & Authentication – Implementing JWT, OAuth</li>
                    <li>DevOps & CI/CD – Continuous integration and deployment</li>
                </ul>
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

export default FullstackPage;
