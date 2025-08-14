import React from 'react';
import { motion } from 'framer-motion';
import IosDevServiceImage from '../assets/ServicesImage/IosDevServiceImage.jpg'
import CrmImage from '../assets/ServicesImage/CrmImage.jpg';
import AndroidAppImage from '../assets/ServicesImage/AndroidAppImage.jpg'
import  Appmaintains from '../assets/ServicesImage/Appmaintains.jpg'
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


const SoftwareServices = () => {

    const navigate = useNavigate()
    
const handleClick =(service) => {
    navigate(`/${service}`) 
  }


  return (
    <section id="values" className="values section py-8 ">
      <div className="container mx-auto text-center  mt-13 ">
        <h2 className="text-2xl font-semibold text-blue-800">
        App Development services 
        </h2>
        <p className="text-base text-gray-600 mt-2">
          We provide these below services and more.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mx-auto max-w-4*6 mt-8">
        {[
            
            
            { img: IosDevServiceImage, title: "IOS App Development Services ", desc: "We create high-quality, scalable, and user-friendly iOS applications tailored to meet business needs. Our team specializes in Swift and Objective-C to build robust apps for iPhones, iPads, and Apple Watches", list: [], navigate:"IosAppDevPage" },




           { img: AndroidAppImage, title: "Android App Development Services", desc:"Our Android app development services ensure a seamless user experience with intuitive UI and high performance. We develop custom Android apps using Kotlin and Java, optimized for various devices.", list: [], navigate:"AndroidAppDevPage" },



          { img: Appmaintains, title: "App Testing & Maintenance Services", desc: "We offer end-to-end app testing and maintenance services to ensure bug-free and smooth performance. Our services include functional testing, security enhancements, performance optimization, and regular updates.", list: [] , navigate:"AppmaintancePage"},



           
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

export default SoftwareServices;
