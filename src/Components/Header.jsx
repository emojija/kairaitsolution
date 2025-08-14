import React, { useEffect, useRef, useState, } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo/Logo.png"
import { Link } from "react-router-dom";
import company from "../Components/CompanyVision";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [WebdesignDropdownOpen, setWebdesignDropdownOpen] = useState(false);
  const [webDropdownOpen, setWebDropdownOpen] = useState(false);
  const [webdevDropdownOpen, setWebdevDropdownOpen] = useState(false)
  const [WebmaintainsDropdownOpen, setWebmaintainsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [SoftwareDropdownOpen, setSoftwareDropdownOpen] = useState(false);
  const [customDropdownOpen, setCustomDropdownOpen] = useState(false)
  const [appdevDropdownOpen, setAppdevDropdownOpen] = useState(false)
  // const[ digitalDropdownOpen, setDigitalDropdownOpen] = useState(false)
  const [ShowNavbarItem, setShowNavbarItem] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const profileDropdownRef = useRef(null)


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setShowNavbarItem(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <header className="fixed top-0 w-full backdrop-blur-3xl shadow-md z-50  ">
      <div className="container mx-auto flex items-center justify-between ">
        <Link to="#" className="flex items-center space-x-2">
          <div className="flex items-center ">
            {/* First Logo */}
            <motion.img
              src={Logo}
              alt="Logo not found"
              className="h-20 w-40 transition-transform duration-200 hover:scale-120  border:none"
            />
          </div>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 relative">
          <Link to="/" className="nav-link cursor-pointer">Home</Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <Link to="/about" className="nav-link cursor-pointer "> About us</Link>
            <AnimatePresence>
              {aboutDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 bg-blue-100 shadow-lg rounded-lg w-40 py-2"
                >
                  <div
                    className="relative"
                    onMouseEnter={() => setCompanyDropdownOpen(true)}
                    onMouseLeave={() => setCompanyDropdownOpen(false)}
                  >
                    <Link to="our-vision" className="dropdown-link cursor-pointer">Our Vision</Link>
                    <AnimatePresence>
                      {companyDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-40 top-0 mt-2 bg-blue-200 shadow-lg rounded-lg w-40 py-2"
                        >
                          <Link to="our-vision" className="dropdown-link">Company vision</Link>
                          <Link to="Our-vision-for-student" className="dropdown-link">Vision for student</Link>

                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <Link to="/ourblog" className="dropdown-link">Our Blog</Link>
                  <Link to="Carrer" className="dropdown-link cursor-pointer">Career</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
          >
            <span className="nav-link cursor-pointer" onClick={() => setShowNavbarItem(!ShowNavbarItem)} ref={profileDropdownRef}>
              <Link to="OurWorks" className="nav-link cursor-pointer ">Our Services</Link></span>
            <AnimatePresence>`
              {ShowNavbarItem && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 bg-blue-100 shadow-lg rounded-lg w-40 py-2"
                >


                  {/* //   Web Development dropdown// */}
                  <div
                    className="relative"
                    onMouseEnter={() => setWebdesignDropdownOpen(true)}
                    onMouseLeave={() => setWebdesignDropdownOpen(false)}
                  >
                    <Link to="#" className="dropdown-link cursor-pointer">Web Development services</Link>
                    <AnimatePresence>
                      {WebdesignDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-40 top-0 mt-2 bg-blue-200 shadow-lg rounded-lg w-40 py-2"
                        >
                          <div
                            className="relative"
                            onMouseEnter={() => setWebDropdownOpen(true)}
                            onMouseLeave={() => setWebDropdownOpen(false)}
                          >
                            <Link to="#" className="dropdown-link cursor-pointer">Website Design</Link>
                            <AnimatePresence>
                              {webDropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute left-40 top-0 mt-2 bg-blue-100 shadow-lg rounded-lg w-40 py-2"
                                >
                                  <Link to="UIPage" className="dropdown-link">UI/UX Design</Link>

                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <div
                            className="relative"
                            onMouseEnter={() => setWebdevDropdownOpen(true)}
                            onMouseLeave={() => setWebdevDropdownOpen(false)}
                          >
                            <Link to="#" className="dropdown-link cursor-pointer">Web Application Development</Link>
                            <AnimatePresence>
                              {webdevDropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }} dev
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute left-40 top-0 mt-2 bg-blue-100 shadow-lg rounded-lg w-40 py-2"
                                >
                                  <Link to="front" className="dropdown-link">Frontend Development</Link>
                                  <Link to="Back" className="dropdown-link">Backend Development</Link>
                                  <Link to="FullStack" className="dropdown-link"> Full stack Development</Link>
                                  <Link to="CmsPage" className="dropdown-link">CMS Solutions</Link>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <div
                            className="relative"
                            onMouseEnter={() => setWebmaintainsDropdownOpen(true)}
                            onMouseLeave={() => setWebmaintainsDropdownOpen(false)}
                          >
                            <Link to="#" className="dropdown-link cursor-pointer">Website Maintenance & Support</Link>
                            <AnimatePresence>
                              {WebmaintainsDropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute left-40 top-0 mt-2 bg-blue-100 shadow-lg rounded-lg w-40 py-2"
                                >
                                  <Link to="Regularupdate" className="dropdown-link">Regular Updates</Link>
                                  <Link to="BugFix" className="dropdown-link">Bug Fixes</Link>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>



                  {/* //     Software nav  // */}

                  <div
                    className="relative"
                    onMouseEnter={() => setSoftwareDropdownOpen(true)}
                    onMouseLeave={() => setSoftwareDropdownOpen(false)}
                  >

                    <Link to="#appdev" className="dropdown-link cursor-pointer">Software Development</Link>
                    <AnimatePresence>
                      {SoftwareDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-40 top-0 mt-2 bg-blue-100 shadow-lg rounded-lg w-40 py-2"
                        >

                          <div
                            className="relative"
                            onMouseEnter={() => setCustomDropdownOpen(true)}
                            onMouseLeave={() => setCustomDropdownOpen(false)}
                          >
                            <Link to="#Update" className="dropdown-link">Custom Software Development</Link>
                            <AnimatePresence>
                              {customDropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute left-40 top-0 mt-2 bg-blue-100 shadow-lg rounded-lg w-40 py-2"
                                >
                                  <Link to="Crmpage" className="dropdown-link"> CRM systems software</Link>
                                  <Link to="ERPPages" className="dropdown-link">ERP software</Link>
                                  <Link to="AccountingSoftPage" className="dropdown-link">Accounting Software </Link>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <Link to="SoftwareTestingPage" className="dropdown-link">Software Testing</Link>
                          <Link to="SoftwareMaintainsPage" className="dropdown-link">Software Maintains</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div
                    className="relative"
                    onMouseEnter={() => setAppdevDropdownOpen(true)}
                    onMouseLeave={() => setAppdevDropdownOpen(false)}
                  >
                    <Link to="#" className="dropdown-link cursor-pointer">App Development</Link>
                    <AnimatePresence>
                      {appdevDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-40 top-0 mt-2 bg-blue-100 shadow-lg rounded-lg w-40 py-2"
                        >
                          <Link to="AndroidAppDevPage" className="dropdown-link"> Android App Development </Link>
                          <Link to="IosAppDevPage" className="dropdown-link">IOS App Development</Link>
                          <Link to="AppmaintancePage" className="dropdown-link">Mobile App Maintenance & Testing</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>



                  <Link to="DigitalMarketingPage" className="dropdown-link cursor-pointer">Digital Marketing</Link>


                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="Ourteam" className="nav-link cursor-pointer">Our team</Link>
          <Link to="Contact" className="nav-link cursor-pointer">Contact</Link>

        </nav>

        {/* Mobile Menu Toggle */}
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl text-gray-700 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <CiMenuBurger />
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50 py-4"
            >
              <div className="flex flex-col space-y-3 px-6">
                <Link to="/" className="mobile-link border-gray-500  border-b-1 " onClick={() => setMobileMenuOpen(false)}>Home</Link>
                {/* const [ AboutOpen, setAboutOpen] = usestate(false); */}


                <button
                  className="mobile-link flex justify-between border-b-1 items-center"
                  onClick={() => setAboutOpen(!aboutOpen)}
                >
                  About Us
                  <span>{aboutOpen ? "-" : "+"}</span>
                </button>


                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col space-y-2 pl-4"
                    >
                      <Link to="CompanyVision" className="mobile-link border-b-1 border-gray-500 inline-block w-fit" onClick={() => setMobileMenuOpen(false)}>Our Vision</Link>
                      <Link to="Our-vision-for-student" className="mobile-link border-b-1 border-gray-500 inline-block w-fit" onClick={() => setMobileMenuOpen(false)}>Vision for student</Link>
                      <Link to="AppServicesPage" className="mobile-link border-b-1 border-gray-500 inline-block w-fit" onClick={() => setMobileMenuOpen(false)}>Our Blog</Link>
                      <Link to="Carrer" className="mobile-link border-b-1 border-gray-500 inline-block w-fit" onClick={() => setMobileMenuOpen(false)}>Career</Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  className="mobile-link flex justify-between border-b-1 items-center"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Our Services
                  <span>{servicesOpen ? "-" : "+"}</span>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col space-y-2 pl-4"
                    >
                      <Link to="WebservicesPage" className="mobile-link border-b-1 border-gray-500 inline-block w-fit" onClick={() => setMobileMenuOpen(false)}>Web Services</Link>
                      <Link to="SoftwareServicespage" className="mobile-link border-b-1 border-gray-500 inline-block w-fit" onClick={() => setMobileMenuOpen(false)}>Software Services</Link>
                      <Link to="AppServicesPage" className="mobile-link border-b-1 border-gray-500 inline-block w-fit" onClick={() => setMobileMenuOpen(false)}>App Services</Link>
                      <Link to="DigitalMarketingPage" className="mobile-link border-b-1 border-gray-500 inline-block w-fit" onClick={() => setMobileMenuOpen(false)}>Digital Marketing</Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link to="/Ourteam" className="mobile-link border-gray-500 border-b-1 inline-block" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
                <Link to="/contact" className="mobile-link border-gray-500 border-b-1 inline-block" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          to="#about"
          className="hidden lg:block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="Contact"> Get Started</Link>
        </motion.div>
      </div>

      {/* CSS Styling for Underline */}
      <style>
        {`
          /* Main Navigation Underline */
          .nav-link {
            position: relative;
            color:  black;
            font-weight: 500;
            text-decoration: none;
            padding-bottom: 4px;
          }

          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 5px;
            background-color: blue;
            transform: scaleX(0);
            transition: transform 0.3s ease-in-out;
          }

          .nav-link:hover::after {
            transform: scaleX(1);
          }

          /* Dropdown Navigation Underline */
          .dropdown-link {
            display: block;
            position: relative;
            padding: 8px 16px;
            color: #4a4a4a;
            text-decoration: none;
            transition: background 0.3s;
          }

          .dropdown-link::after {
            content: "";
            position: absolute;
            left: 16px;
            bottom: 4px;
            width: 80%;
            height: 2px;
            background-color: blue;
            transform: scaleX(0);
            transition: transform 0.3s ease-in-out;
          }

          .dropdown-link:hover::after {
            transform: scaleX(1);
          }

          .dropdown-link:hover {
            background-color: #b3d9ff;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
