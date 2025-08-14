import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import frontend from "../../assets/ServicesImage/frontend.avif";
import { Link } from "react-router-dom";

const faqs = [
    {
        question: "What is Frontend Development?",
        answer:
            "Frontend development refers to the part of a website or web application that users directly interact with. It involves technologies like HTML, CSS, JavaScript, and various frameworks (React, Angular, Vue.js).",
    },
    {
        question: " What is the Role of a Frontend Developer?",
        answer:
            "A frontend developer is responsible for creating visually appealing and user-friendly interfaces, implementing UI/UX designs, and ensuring responsive layouts.",
    },
    {
        question: "What is Responsive Design?",
        answer: "Responsive design ensures that a website looks good and functions well on different screen sizes (mobile, tablet, desktop). This is achieved using CSS Media Queries and frameworks like Bootstrap and taildwind CSS.",
    },


];

const FrontEnd = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleContent = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className=" bg-gray-100 py-10 mt-10 px-5">
            <div className=" bg-white shadow-lg rounded-2xl  overflow-hidden flex flex-col md:flex-row">
                <div className="Uiimg mt-30 w-full" >
                    <img src={frontend} alt="SEO Friendly UI" className="w-full h-auto object-cover" />
                </div>
                <div className="Uiimg flex flex-col  justify-center p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-5">Front-End Development</h1>
                    <p className="text-gray-600 mb-4">
                        Frontend services refer to the development, optimization, and maintenance of the user interface (UI) and user experience (UX) of web applications, websites, and mobile apps. These services ensure that applications are visually appealing, responsive, and interactive for users..
                    </p>
                    <strong><h2 className="mt-4 mb-2 text-gray-700 ">Technologies Used in Frontend </h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Languages: HTML, CSS, JavaScript</li>
                        <li> Frameworks: React, Angular, Vue.js, Svelte</li>
                        <li>CSS Libraries: Bootstrap, Tailwind CSS, Material UI</li>
                        <li>Build Tools: Webpack, Vite, Parcel</li>
                        <li>API Handling – Axios, Fetch API, GraphQL</li>
                        <li>Testing Tools – Jest, Cypress, Selenium</li>
                    </ul>
                    <strong><h2 className="mt-4 mb-2 text-gray-700">Key of Benefits </h2></strong>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Better User Experience – Attractive, smooth, and easy-to-use UI increases user engagement.</li>
                        <li>Faster Loading Speed – Optimized CSS/JS, lazy loading, and caching improve performance</li>
                        <li>Mobile Responsive – Works perfectly on all devices; Google prefers mobile-first indexing.</li>
                        <li>Higher SEO Ranking – Proper HTML structure, meta tags, and internal linking boost visibility.</li>
                        <li>Cross-Browser Compatibility – Ensures smooth performance on Chrome, Firefox, Safari, etc.</li>
                        <li>Better Engagement & Conversions – Interactive UI leads to more leads & sales.</li>
                        <li>Scalability & Easy Maintenance – Component-based development (React, Vue, Angular) makes scaling easy.</li>
                        <li>Improved Security – HTTPS, secure authentication, and CSP protect from cyber threats.</li>
                    </ul>
                    <div className="text-center mt-10 mb-5 ">
                        <Link to="Contact" className="px-10 py-3 text-white bg-blue-600  rounded-full">Let's Start</Link>
                    </div>
                </div>
            </div>
            <div className="bg-white px-5 py-10">
                
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">
                        Types of Frontend Services
                    </h1>
                    <ul className="list-disc pl-5 md:pl-10 text-gray-700 space-y-2">
                        <li>Custom Web Development – Building custom UI for websites & web apps</li>
                        <li>Single Page Applications (SPAs) – Using frameworks like React, Angular</li>
                        <li>Progressive Web Apps (PWAs) – Web apps with offline capabilities</li>
                        <li>UI/UX Consulting – Improving user experience through design & usability testing</li>
                        <li>Migration & Modernization – Upgrading legacy frontend to modern frameworks</li>
                        <li>Frontend Maintenance & Support – Regular updates, bug fixes, and improvements</li>
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

export default FrontEnd;
