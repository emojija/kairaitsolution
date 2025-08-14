import React from 'react';
import img from "../assets/vision/images.jpg";



const OurVision = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      {/* Our Vision Section */}
      <div className="  bg-white rounded-lg ">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Our Vision
        </h1>
        <p className="text-2xl  text-gray-600 mb-6 text-center">"To lead the digital revolution by empowering businesses with innovative, intelligent, and impactful IT solutions that shape the future."</p>
        <p className="text-gray-600 leading-relaxed mb-6">At <span className='font-semibold text-blue-800'>Kaira IT Solutions</span>, we envision a world where technology is not just a tool, but a transformative force — redefining how businesses grow, connect, and succeed. Our vision is to become a global benchmark in IT excellence by building a tech-driven ecosystem where businesses of all sizes can thrive with confidence, creativity, and agility.</p>
    
<div className="flex flex-col md:flex-row items-start md:items-center gap-8">
  {/* LEFT – text content */}
  <div className="flex-1 text-gray-600 leading-relaxed">
    <p className="mb-4 font-semibold text-lg">We are committed to:</p>

    <ul className="space-y-4">
      <li>
        <span className="font-semibold">✅ Innovation Without Limits:</span>
        <p>
          We embrace bold ideas and emerging technologies—from AI and machine
          learning to cloud‑native architectures—to build cutting‑edge,
          future‑ready solutions.
        </p>
      </li>

      <li>
        <span className="font-semibold">👥 Human‑Centered Technology:</span>
        <p>
          At the heart of our innovation is people—their needs, their growth, and
          their success. Every solution we create is designed with empathy,
          usability, and long‑term value.
        </p>
      </li>

      <li>
        <span className="font-semibold">🌎 Global Standards, Local Commitment:</span>
        <p>
          We merge world‑class technical expertise with a deep understanding of
          regional markets to deliver localized yet globally competitive
          solutions.
        </p>
      </li>

      <li>
        <span className="font-semibold">🔐 Trust &amp; Transparency:</span>
        <p>
          Trust is the foundation of every great partnership. We uphold the
          highest standards of integrity, security, and transparency in every
          project we undertake.
        </p>
      </li>

      <li>
        <span className="font-semibold">🚀 Scalable Success:</span>
        <p>
          Whether you're a startup or an enterprise, our solutions are built to
          scale with your vision—from MVPs to enterprise platforms, from India to
          the world.
        </p>
      </li>
    </ul>
  </div>

  {/* RIGHT – image */}
  <div className="w-full md:w-1/2 lg:w-5/12">
    <img
      src={img}   
      alt="Team brainstorming at Kaira IT Solution"
      className="rounded-lg shadow-md w-full h-auto object-cover"
    />
  </div>
</div>

       
        {/* Services Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Web Services */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:scale-108">
              <h3 className="text-xl font-semibold text-blue-800 mb-3 ">
                Website Development Services
              </h3>
              <p className="text-gray-600 ">
                Crafting responsive, user-friendly, and high-performance websites tailored to your business needs.
              </p>
            </div>

            {/* App Development Services */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:scale-108">
              <h3 className="text-xl font-semibold text-blue-800 mb-3 ">
                App Development Services
              </h3>
              <p className="text-gray-600 ">
                Building cutting-edge mobile and web applications that enhance user engagement and productivity.
              </p>
            </div>

            {/* Digital Marketing Services */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:scale-108">
              <h3 className="text-xl font-semibold text-blue-800 mb-3 ">
                Digital Marketing Services
              </h3>
              <p className="text-gray-600 ">
                Driving brand visibility and growth through SEO, social media marketing, and data-driven strategies.
              </p>
            </div>

            {/* Software Services */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:scale-108">
              <h3 className="text-xl font-semibold text-blue-800 mb-3 ">
                Software Development 
              </h3>
              <p className="text-gray-600 ">
                Developing custom software solutions to streamline operations and improve business outcomes.
              </p>
            </div>

            {/* Technology Maintenance Services */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:scale-108">
              <h3 className="text-xl font-semibold text-blue-800 mb-3 ">
              Maintenance Services
              </h3>
              <p className="text-gray-600 ">
                Offering comprehensive Technology maintenance and support to ensure your systems run smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;