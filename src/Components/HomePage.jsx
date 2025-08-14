// src/HomePage.js
import React from 'react';
import Header from "./Header";
import Hero from "./Hero";
import Contact from "./Contact";
import Footer from "./Footer"
import OurValue from './Services'
import Student from'./Student'
import OurVision from './CompanyVision';
import OurTeam from './Ourteam';


import CrmServices from './ServicesPages/CrmServices'
import ERPPage from '../Components/ServicesPages/ERPPage'
import AccountSoftPage from '../Components/ServicesPages/AccountSoftPage'
import SoftwareTestingPage from './ServicesPages/SoftwareTestingPage';
import SoftwareMaintenancePage from './ServicesPages/SoftwareMaintainsPage'
import AndroidAppServices from './ServicesPages/AndroidAppServices';
import Popup from '../Components/Popup';
import IOSAppServices from './ServicesPages/IOSAppServices';
import AppMaintenanceTestingServices from './AppMaintenanceTestingServices';
import About from '../Components/About'
import Webservices from "./WebServices"
import SoftwareServices from "./SoftwareServices"
import AppServices from './AppServices'
import DigitalMarketing from './DigitalMarketing';
import Privacypolicy  from '../Components/Privacypolicy';
import OurWorks from '../Components/OurWorks';



const HomePage = () => {
  return (
    <div className=' bg-gray-200'>
       
       {/* <WebServices/> */}
     <Hero/>
     <About/>  
     <OurWorks/>
     <OurTeam/>
     <Contact />  
      {/* 
     <CrmServices/>
     <ERPPage/>
     <AccountSoftPage/>
     <SoftwareTestingPage/>
     <SoftwareMaintenancePage/>
     <AndroidAppServices/> 
     <IOSAppServices/>
     
      <AppMaintenanceTestingServices/>  */}
     {/* <Popup data = "Login"/> */}

     {/* <OurValue/> */}
     {/* <Webservices/> */}
     {/* <SoftwareServices/> */}
     {/* <AppServices/> */}
     {/* <DigitalMarketing/> */}
     {/* <Privacypolicy/> */}

    </div>
  );
}

export default HomePage;