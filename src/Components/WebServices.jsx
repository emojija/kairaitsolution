import React from 'react';
import { motion } from 'framer-motion';
import UI from '../assets/ServicesImage/UI Image.jpg';
import frontend from '../assets/ServicesImage/frontend.avif';
import BackEnd from '../assets/ServicesImage/BackEnd.png';
import FullStackImg from '../assets/ServicesImage/FullStackImg.png';
import CMSImage from '../assets/ServicesImage/CMSImage.png';
import { useNavigate } from 'react-router-dom';


// Animation Variants (Left se Drop Effect)
const cardVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.3, type: 'spring', stiffness: 100 }
  })
};


const Webservices = () => {

    const navigate = useNavigate()
    
const handleClick =(service) => {
    navigate(`/${service}`) 
  }


  return (
    <section id="values" className="values section py-8 ">
      <div className="container mx-auto text-center  mt-13 ">
        <h2 className="text-2xl font-semibold text-blue-800">
          Web Development Services
        </h2>
        <p className="text-base text-gray-600 mt-2">
          We provide these below services and more.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mx-auto max-w-4*6 mt-8">
        {[{ img: UI, title: "UI/UX Design", desc: " We create user-friendly and visually appealing designs that ensure an excellent user experience. By crafting wireframes, prototypes, and interactive designs, we provide seamless and intuitive interface designs.", list: [], navigate:"UIPage" },
           { img: FullStackImg, title: "Full-Stack Development services", desc:"We provide end-to-end full-stack development services, integrating front-end, back-end, and database management seamlessly.", list: [], navigate:"FullStack" },
          { img: BackEnd, title: "Back-End Development", desc: "Our backend solutions ensure scalability, security, and efficiency by leveraging technologies like Node.js, Django, and Laravel.", list: [] , navigate:"Back"},
           { img: frontend, title: "Front-End Development ", desc: "We build high-performance, responsive, and interactive front-end applications using modern frameworks like React, Angular, and Vue.js.", list: [], navigate:"front" },
           { img: CMSImage, title: "CMS Solution", desc: "We offer custom CMS solutions tailored to business needs, ensuring easy content management and scalability.", list: [], navigate:"CmsPage" },
           
        ].map((service, index) => (
          <motion.div
            key={index}
            className="shadow-md p-4 hover:scale-110 border border-gray-300 w-64 rounded-lg flex flex-col items-center text-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            onClick={() => handleClick(service.navigate)}
          >
            <img src={service.img} alt={service.title} className="w-50 h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-3 text-blue-700">
              {service.title}
            </h3>
            <p className="mt-2 text-sm">{service.desc}</p>
            <ul className="list-disc pl-5 text-sm text-left mt-3">
              {service.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Webservices;
