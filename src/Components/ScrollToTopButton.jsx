import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNavbar = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    isVisible && (
      <div className="fixed bottom-6 right-6 z-50 group">
 <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
    Scroll to Top
  </span>

        {/* Button */}
        <button
        onClick={scrollToNavbar}
        className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg  hover:bg-blue-700 hover:scale-105 transform transition-all duration-300"
  >
        ↑
        </button>
      </div>
    )
  );
};
export default ScrollToTopButton;

