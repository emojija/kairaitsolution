import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Uiimg from "../../assets/ServicesImage/UI Image.jpg";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is a UI and UX design service?",
    answer:
      "UI and UX encompass distinct aspects of the digital experience. UI predominantly concerns itself with the aesthetic elements of design, ensuring visually appealing, pixel-perfect digital solutions.",
  },
  {
    question: "Are UI and UX part of service design?",
    answer:
      "Service design is a superset of UX design services. It plans and organizes the business's resources - people, processes, and props - to deliver a superior customer experience.",
  },
  {
    question: "How will UI & UX consulting services help my product/service?",
    answer:
      "UI & UX consulting services help optimize your product by enhancing user interaction and creating seamless experiences.",
  },
];

const OurTeam = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleContent = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className=" bg-gray-100 py-10 mt-10 px-5">
      <div className=" bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="Uiimg mt-30">
          <img src={Uiimg} alt="SEO Friendly UI" className="w-full h-auto object-cover" />
        </div>
        <div className="Uiimg flex flex-col justify-center p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-5">UI/UX Design</h1>
          <p className="text-gray-600 mb-4">
            UI (User Interface) refers to the visual and interactive elements of a website or application that allow users to navigate and interact with it. It includes buttons, menus, icons, typography, color schemes, and overall layout. A well-designed UI ensures a seamless and engaging experience for users.
          </p>
          <strong><h2 className="mt-4 mb-2 ">UI Design Tools</h2></strong>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Figma – Cloud-based tool for UI/UX design and prototyping.</li>
            <li>Adobe XD – Vector-based design tool for wireframing and prototyping.</li>
            <li>Sketch – Popular for Mac users, ideal for UI/UX design.</li>
            <li>Canva – Simple tool for creating UI components and visuals.</li>
          </ul>
          <strong><h2 className="mt-4 mb-2 text-gray-800">Key Benefits of UI Design</h2></strong>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Better User Experience (UI/UX) – Smooth navigation and ease of use enhance satisfaction.</li>
            <li>Higher Engagement – Visually appealing and interactive designs keep users interested.</li>
            <li>Improved Conversions – Well-placed CTAs and intuitive layouts boost actions like sign-ups and purchases.</li>
            <li>Stronger Brand Identity – Consistent colors, typography, and design build brand trust.</li>
            <li>Mobile Responsiveness – Ensures seamless experience across all devices.</li>
            <li>Lower Development Costs – A well-structured UI reduces future fixes and maintenance.</li>
            <li>Accessibility – Makes digital platforms usable for all, including people with disabilities.</li>
          </ul>
          <div className="text-center mt-5">
            <Link to="Contact" className="px-5 py-3 text-white bg-blue-600 hover:scale-110 transition-transform rounded-full">Let's Start</Link>
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

export default OurTeam;
