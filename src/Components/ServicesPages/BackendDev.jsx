import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Backend from "../../assets/ServicesImage/BackEnd.png"

const faqs = [
    {
        question: "What is Backend Development?",
        answer:
            "Backend development refers to the server-side logic, database management, and API handling that power a web application. It involves technologies like Node.js, Express, Django, and databases like MySQL and MongoDB.",
    },
    {
        question: "What is the Role of a Backend Developer?",
        answer:
            "A backend developer is responsible for server-side logic, database interactions, API integrations, and ensuring secure and scalable application performance.",
    },
    {
        question: "What is REST API?",
        answer: "REST API (Representational State Transfer) is a set of rules that allows communication between the frontend and backend using HTTP methods like GET, POST, PUT, and DELETE.",
    },
];

const BackendDev = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleContent = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className=" bg-gray-100 py-10 mt-10 px-5">
            <div className=" bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
                 <div className="Uiimg mt-30 w-full" >
                                    <img src={Backend} alt="SEO Friendly UI" className="w-full h-auto object-cover" />
                                </div>
                <div className="Uiimg flex flex-col justify-center p-6">
    
                    <h1 className="text-3xl font-bold text-gray-800 mb-5">Backend Development</h1>
                    <p className="text-gray-600 mb-4">
                        Backend services manage the logic, database, and server-side operations of web applications. These services ensure that data is processed securely and efficiently.
                    </p>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Technologies Used in Backend</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Languages: Node.js, Python, Java, PHP</li>
                        <li>Frameworks: Express.js, Django, Spring Boot, Laravel</li>
                        <li>Databases: MySQL, PostgreSQL, MongoDB, Firebase</li>
                        <li>API Handling: REST API, GraphQL</li>
                        <li>Authentication: JWT, OAuth, Passport.js</li>
                        <li>Cloud Services: AWS, Firebase, Azure</li>
                    </ul>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Key Benefits</h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Scalability – Supports large user bases with optimized performance.</li>
                        <li>Security – Secure authentication and data encryption.</li>
                        <li>Database Management – Efficient storage and retrieval of data.</li>
                        <li>API Integration – Enables communication between different applications.</li>
                        <li>Performance Optimization – Ensures fast processing and low latency.</li>
                        <li>Cloud Deployment – Deployable on AWS, Azure, and other cloud platforms.</li>
                    </ul>
                    <div className="text-center mt-10 mb-5">
                        <Link to="Contact" className="px-10 py-3 text-white bg-blue-600 rounded-full">Let's Start</Link>
                    </div>
                </div>
            </div>
            <div className="bg-white px-5 py-10">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5 ml-6">Types of Backend Services</h1>
                    <ul className="list-disc pl-5 md:pl-10 text-gray-700 space-y-2">
                        <li>Custom Backend Development – Tailor-made server-side solutions</li>
                        <li>API Development – Creating RESTful and GraphQL APIs</li>
                        <li>Database Management – Structuring and optimizing databases</li>
                        <li>Cloud Computing – Hosting backend services on AWS, Firebase, Azure</li>
                        <li>Security & Authentication – Implementing JWT, OAuth, encryption</li>
                        <li>Server Management – Handling infrastructure and deployments</li>
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

export default BackendDev;
