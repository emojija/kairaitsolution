import React from 'react';
import { motion } from 'framer-motion';
import SoftwareMaintainsImage from '../assets/ServicesImage/SoftwareMaintainsImage.jpg';
import SoftwareMaintainsimg from '../assets/ServicesImage/SoftwareMaintainsimg.jpg';
import CrmImage from '../assets/ServicesImage/CrmImage.jpg';
import AccountingImage from '../assets/ServicesImage/AccountingImage.jpg';
import SoftwareTestingimg from '../assets/ServicesImage/SoftwareTestingimg.jpg';
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
        Software Services 
        </h2>
        <p className="text-base text-gray-600 mt-2">
          We provide these below services and more.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mx-auto max-w-4*6 mt-8">
        {[
            
            
            { img: SoftwareMaintainsImage, title: "Customized Software", desc: "We develop tailored software solutions to meet unique business needs. From automation to workflow optimization, our custom-built applications ensure efficiency, scalability, and seamless integration with existing systems..", list: [], navigate:"UIPage" },




           { img: AccountingImage, title: "Accounting Software", desc:"Our accounting software solutions help businesses manage financial transactions, invoicing, tax calculations, and reporting with accuracy. We provide user-friendly, secure, and regulatory-compliant platforms", list: [], navigate:"AccountingSoftPage" },



          { img: CrmImage, title: "ERP/CRM Software", desc: "We design robust ERP and CRM systems to streamline business operations, enhance customer relationship management, and improve productivity. Our solutions integrate sales, inventory, HR, and analytics for data-driven decision-making.", list: [] , navigate:"Crmpage"},



           { img: SoftwareMaintainsimg, title: "Software Maintenance", desc: "We offer continuous software maintenance services, including regular updates, performance optimizations, security patches, and bug fixes. Our support ensures software longevity, reliability, and smooth functionality.", list: [], navigate:"SoftwareMaintainsPage" },


           { img: SoftwareTestingimg, title: "Software Testing ", desc: "We provied all type of sofware testing service and fix all type of bug's. Software testing ensures the quality, functionality, and security of applications before deployment, helping businesses deliver robust software solutions.", list: [], navigate:"SoftwareTestingPage" },
           
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
