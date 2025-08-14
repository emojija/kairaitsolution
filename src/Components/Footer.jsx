import React from 'react';
import { Link } from "react-router-dom"; 

import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsImage } from "react-icons/bs";
import { SiNodedotjs, SiReact, SiDotnet, SiMysql, SiMongodb} from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">

      {/* Footer Content */}
      <div className="container mx-auto px-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div >
            <h4 className="text-xl font-semibold">Kaira IT Solutions</h4>
            <p className="mt-3">
              <strong>Address: </strong>
              <a
                href="https://www.google.com/maps/place/Galaxy+Blue+Sapphire+Plaza/@28.6072483,77.4328637,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce557777b7b45:0x69870f8fa7e1f92e!8m2!3d28.6072436!4d77.4354386!16s%2Fg%2F11c5h5383n!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
              Galaxy Blue Sapphire Plaza, Sector 4, Greater Noida, Ghaziabad, Uttar Pradesh 201309
            </a>
            </p>
            <p className="mt-3">
              <strong>Phone: </strong>
              <a href="tel:+919205803705" className="text-blue-400 hover:text-blue-600">
                +91-9205803705
              </a>
            </p>

            <p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1 mt-3">
              <strong>Email:</strong>
              <a href="mailto:info@kairaitsolution.com" className="text-blue-400 hover:text-blue-600">
              info@kairaitsolution.com
              </a>
              </div>
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold">Useful Links</h4>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600">About us</Link></li>
              <li><Link to="services" className="hover:text-blue-600">Services</Link></li>
              <li><Link to="TermsAnd-Conditions" className="hover:text-blue-600">Terms & Conditions</Link></li>
              <li><Link to="Privacy-policy" className="hover:text-blue-600">Privacy policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="mt-2 space-y-2">
              <li><Link to="WebservicesPage" className="hover:text-blue-600">Web Development services</Link></li>
              <li><Link to="SoftwareServicespage" className="hover:text-blue-600">Software Development Services</Link></li>
              <li><Link to="AppServicesPage" className="hover:text-blue-600">Application Development Services</Link></li>
              <li><Link to="DigitalMarketingPage" className="hover:text-blue-600">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
          <div>
            <h4 className="text-lg font-semibold">Follow Us :</h4>
            <p className="text-gray-400">Stay updated with our latest news and updates.</p>
            <div className="flex space-x-4 mt-4">
              <Link to="/ourgallery" className="text-white hover:text-blue-600 text-2xl">
                <BsImage />
              </Link>
              <Link to="https://www.facebook.com/people/Kaira-IT-Solution/61574036631898/" target="_blank" className="text-white hover:text-blue-600 text-2xl">
                <BsFacebook />
              </Link>
              <Link to="https://www.instagram.com/kairaitsolution?igsh=eXk5OXA0aGRhc2Nl" target="_blank" className="text-white hover:text-blue-600 text-2xl">
                <BsInstagram />
              </Link>
              <Link to="https://www.linkedin.com/uas/login" target="_blank" className="text-white hover:text-blue-600 text-2xl">
                <BsLinkedin />
              </Link>
            </div>
          </div>
          
          {/* Our technology */}
          <div className="md:col-start-4 mt-5">
            <h4 className="text-lg font-semibold">Our Technologies :</h4>
            <div className="flex space-x-4 mt-4">
              <Link to="https://nodejs.org/en" target="_blank" className="text-green-600 text-xl ">
                <SiNodedotjs />
                <p className="text-sm mt-1">Node</p>
              </Link>
              <Link to="https://react.dev/" target="_blank" className="text-blue-500 text-xl">
                <SiReact />
                <p className="text-sm mt-1">React</p>
              </Link>
              <Link to="https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet" target="_blank" className="text-purple-700 text-xl">
                <SiDotnet />
                <p className="text-sm mt-1">.Net</p>
              </Link>
              <Link to="https://www.mysql.com/" target="_blank" className="text-blue-600 text-xl">
                <SiMysql />
                <p className="text-sm mt-1">MySql</p>
              </Link>
               <Link to="https://www.mongodb.com/" target="_blank" className="text-green-600 text-xl">
                <SiMongodb />
                <p className="text-sm mt-1">MongoDB</p>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-white-400">
        <p>© Copyright <strong>KAIRA IT SOLUTIONS</strong>. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;