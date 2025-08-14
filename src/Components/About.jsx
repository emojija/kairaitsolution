import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import about from '../assets/about.jpg';
import navambhawImg from '../assets/projects/navambhaw.png';
import kairaImg from '../assets/projects/kairajeweller.png';
import terretImg from '../assets/projects/terret.png';

const projects = [
  {
    title: "Kaira Jewellers",
    description: "Kaira Jewellers is a trusted offline jewelry store providing exquisite gold, silver, and diamond collections with personalized customer service.",
    image: kairaImg,
    link: "https://www.kairajewellers.com/",
  },
  {
    title: "Navambhaw",
    description: "Navambhaw is an online astrology service platform offering personalized consultations, remedies, and guidance based on traditional Vedic principles.",
    image: navambhawImg,
    link: "https://navambhaw.com/",
  },
  {
    title: "Terret Jewellery Billing Software",
    description: "Terret is a jewelry billing software that simplifies invoicing, inventory tracking, and customer data management for offline retail stores.",
    image: terretImg,
    link: "https://www.terret.in/index.php",
  }
];

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about section py-20 px-4 md:px-8 lg:px-16">
      
      <div className="container mx-auto" data-aos="fade-up">
        {/* Who We Are Section */}
        <div className="flex flex-col md:flex-row items-center py-6 gap-8">
          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="content text-center md:text-left">
              <h3 className="text-xl font-semibold text-blue-900">Who We Are</h3>
              <h2 className="text-3xl font-bold my-4 text-blue-900">
                At Kaira IT Solutions, we specialize in delivering innovative IT solutions that drive business success.
              </h2>
              <ul className="list-disc pl-5 text-lg text-gray-600 mb-4">
                <li><strong>Integrity</strong>: Upholding honesty and transparency in all our dealings.</li>
                <li><strong>Innovation</strong>: Continuously seeking creative solutions to complex problems.</li>
                <li><strong>Customer-Centricity</strong>: Prioritizing our clients' needs and delivering exceptional service.</li>
                <li><strong>Excellence</strong>: Striving for superior quality in all our endeavors.</li>
              </ul>
              {showMore && (
                <div className="extra-content mt-4">
                  <h3 className="text-xl font-semibold text-blue-900">Our Mission</h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Our mission is to empower businesses with cutting-edge IT solutions, ensuring seamless operations and sustainable growth. We believe in fostering long-term partnerships based on trust, innovation, and excellence.
                  </p>
                  <h3 className="text-xl font-semibold text-blue-900">Why Choose Us?</h3>
                  <ul className="list-disc pl-5 text-lg text-gray-600 mb-4">
                    <li><strong>Expert Team:</strong> Our professionals bring years of experience and technical expertise.</li>
                    <li><strong>Client-Focused Approach:</strong> We tailor solutions to meet unique business needs.</li>
                    <li><strong>Cutting-Edge Technology:</strong> Staying ahead with the latest advancements.</li>
                    <li><strong>Reliable Support:</strong> 24/7 customer support to ensure smooth operations.</li>
                  </ul>
                </div>
              )}
              <div className="text-center md:text-left">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="btn-read-more inline-flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  <span>{showMore ? 'Read Less' : 'Read More'}</span>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            
            <img src={about} className="w-full max-w-sm object-cover rounded-lg shadow-lg opacity-80" alt="About Us" />

          </motion.div>
        </div>
        {/* Leading services */}


        <div className="mt-16 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">
            Leading IT Services in Greater Noida — Website Development, Software Development, App Development & Digital Marketing
          </h2>
          <p className="text-sm sm:text-base max-w-3xl mx-auto text-gray-700">
            <strong>Kaira IT Solutions</strong> stands out as a reliable leader in
            <a href="/WebservicesPage" className="text-blue-600 underline hover:text-blue-800 transition"> Website Development</a>,
            <a href="/SoftwareServicespage" className="text-blue-600 underline hover:text-blue-800 transition"> Software Development</a>,
            <a href="/AppServicesPage" className="text-blue-600 underline hover:text-blue-800 transition"> App Development</a>, and
            <a href="/DigitalMarketingPage" className="text-blue-600 underline hover:text-blue-800 transition"> Digital Marketing</a>.
            We specialize in delivering cost-effective and high-quality solutions tailored to meet your business needs. From creative website design and development to powerful software solutions and result-driven marketing strategies, <strong>Kaira IT Solutions</strong> helps turn your vision into a successful and recognizable brand.
          </p>
        </div>


        {/* Latest Projects Section with Swiper */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Our Latest Projects</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="max-w-1xl mx-auto"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div
                  className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg w-full h-auto md:h-[400px]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto max-h-[300px] object-cover rounded-lg"
                    />
                  </div>

                  {/* Right - Content */}
                  <div className="w-full md:w-1/2 h-full p-6 flex flex-col justify-center text-left">
                    <h3 className="text-2xl font-bold text-blue-800 mb-2">{project.title}</h3>
                    <p className="text-lg text-gray-700 mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-lg font-medium"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;