import React from "react";
import web from "../assets/OurWorks/web.png"
import app from "../assets/OurWorks/app.png"
import software from "../assets/OurWorks/software.jpg"
import digitall from "../assets/OurWorks/digitall.png"
import { Link } from "react-router-dom";

import W from "../assets/OurWorks/W.jpg"
import A from "../assets/OurWorks/A.jpg"
import Sa from "../assets/OurWorks/Sa.jpg"


const OurServices = () => (
  <section className="min-h-screen px-6 py-12 bg-slate-50">
    {/* <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">Our Services</h1> */}
    <section className="pt-8 px-2  bg-slate-50">  {/* Added pt-24 */}
  <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">Our Services</h1>
    <p className="text-xl text-center mb-10 text-blue-500" >"We blend code and creativity to craft stunning websites, smart apps, powerful software, and bold digital campaigns that make an impact. Your one-stop solution for web, software, app development, and digital marketing that delivers real results."</p>
</section>
    {/* 1️⃣ Web Design & Development  (text left, image right) */}
    <div className="grid md:grid-cols-2 items-center gap-10 mb-24">
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-center">Web Development Services</h2>
        <p className="text-gray-600 text-lg">
          We blend code and creativity to craft stunning websites, smart apps, powerful software, and bold digital campaigns that make an impact.
        </p>
        <ul>
            <li>✅ Responsive Design – 📱💻 Looks great on all devices (mobile, tablet, desktop).</li>
            <li>⚛️ Modern Front-End – 💡 Built with HTML, CSS, JavaScript, and React.</li>
            <li>🛠️ Backend Development – 🔗 APIs, databases, and server integration.</li>
            <li>🔍 SEO Friendly – 📈 Optimized for search engine visibility.</li>
            <li>🤝 Maintenance & Support – 🔧 Continued help post-launch.</li>
        </ul>
        <div className="flex justify-center">
        <Link to="/WebservicesPage" className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"> Explore Web Services </Link>
        </div>
      </div>
    <div>
        <img src={W} alt="Web Development" className="w-120 rounded-xl shadow-md h-90" />
      </div>
    </div>

    {/* 2️⃣ App  (image left, text right) */}
    <div className="grid md:grid-cols-2 items-center gap-10 mb-24">
      <div className="md:order-last">
        <h2 className="text-3xl font-semibold mb-4 text-center">App Developmnt Services</h2>
        <p className="text-gray-600 text-lg">
          We build fast, user-friendly mobile apps for Android and iOS — designed for performance, security, and a seamless user experience from start to finish.
        </p>
        <ul>
            <li>📱 Cross-Platform Apps – Built with React Native or Flutter for Android & iOS.</li>
            <li>⚡ High Performance – Fast, responsive, and optimized code.</li>
            <li>🔗 Seamless Integration – Connect to APIs, databases, and services.</li>
            <li>🛡️ Secure & Scalable – Built for safety and long-term growth.</li>
            <li>🔧 Maintenance & Support – Continuous updates and improvements.</li>
        </ul>
         <div className="flex justify-center">
            <Link to="/AppServicesPage" className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"> Explore App Services </Link>
         </div>
        
      </div>
      <div className="md:order-first">
        <img src={A} alt="UI UX" className="w-140 rounded-xl shadow-md" />
      </div>
    </div>

    {/* 3️⃣ Software  (text left, image right) */}
    <div className="grid md:grid-cols-2 items-center gap-10 mb-24">
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-center">Software Development Services</h2>
        <p className="text-gray-600 text-lg">
          We develop secure, scalable software tailored to your business goals — built for performance and growth.
        </p>
        <ul>
            <li>🧠 Custom Software – Built from scratch to fit your specific needs.</li>
            <li>☁️ Cloud-Ready – Integrated with AWS, Azure, or Google Cloud.</li>
            <li>🔒 Secure & Compliant – Follows top security and industry standards.</li>
            <li>🚀 Agile Delivery – Fast, flexible, and iterative development.</li>
            <li>🔧 Reliable Support – Post-launch maintenance and enhancements.</li>
        </ul>
         <div className="flex justify-center">
            <Link to="/SoftwareServicespage" className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"> Explore Software Services </Link>
         </div>
      </div>
      <div>
        <img src={Sa} alt="Full-Stack" className="w-140 h-80 rounded-xl shadow-md" />
      </div>
    </div>

    {/* 4️⃣ Digital Marketing  (image left, text right) */}
    <div className="grid md:grid-cols-2 items-center gap-10">
      <div className="md:order-last">
        <h2 className="text-3xl font-semibold mb-4 text-center">Digital Marketing Services</h2>
        <p className="text-gray-600 text-lg">We boost your online presence with SEO, social media, content, and ads — all focused on driving traffic and results.
        </p>
        <ul>
            <li>🔍 SEO Boost – Improve rankings and online visibility.</li>
            <li>📱 Social Marketing – Engage audiences on major platforms.</li>
            <li>📝 Content Creation – Blogs and copy that convert.</li>
            <li> 🚀 Paid Ads – High-ROI Google & Meta campaigns.</li>
            <li>🧠 Brand Strategy – Clear, consistent brand positioning.</li>
        </ul>
        <div className="flex justify-center">
            <Link to="/DigitalMarketingPage" className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"> Explore Digital Marketing </Link>
        </div>
      </div>
      <div className="md:order-first">
        <img src={digitall} alt="DevOps" className="w-full rounded-xl shadow-md" />
      </div>
    </div>
  </section>
);

export default OurServices;
