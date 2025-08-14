"use client"

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Contact from './Components/Contact';
import OurVision from './Components/CompanyVision'; 
import Student from './Components/Student';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Services from './Components/Services';
import OurTeam from './Components/Ourteam';
import UIpage from './Components/ServicesPages/UiPage';
import FrontEnd from './Components/ServicesPages/FrontEnd';
import BackendDev from './Components/ServicesPages/BackendDev';
import CMSPage from './Components/ServicesPages/CmsPage';
import FullstackPage from './Components/ServicesPages/FullstackPage';
import RegularUpdates from './Components/ServicesPages/RegularUpdate';
import BugFix from './Components/ServicesPages/BugFix';
import CrmServices from './Components/ServicesPages/CrmServices';
import ERPPage from './Components/ServicesPages/ERPPage';
import AccountSoftPage from './Components/ServicesPages/AccountSoftPage';
import SoftwareTestingPage from './Components/ServicesPages/SoftwareTestingPage';
import SoftwareMaintenancePage from './Components/ServicesPages/SoftwareMaintainsPage';
import AndroidAppServices from './Components/ServicesPages/AndroidAppServices';
import IOSAppServices from './Components/ServicesPages/IOSAppServices';
import AppMaintenanceTestingServices from './Components/AppMaintenanceTestingServices';
import About from './Components/About';
import OurWorks from './Components/OurWorks';
import ScrollToTop from './Components/ScrollToTop'
import Webservices from './Components/WebServices';
import SoftwareServices from './Components/SoftwareServices';
import AppServices from './Components/AppServices'
import DigitalMarketing from './Components/DigitalMarketing';
import TermsAndConditions from './Components/TermsAndConditions';
import Privacypolicy from './Components/Privacypolicy'
import CarrerPage from '../src/Components/ServicesPages/CarrerPage';
import { Toaster } from 'react-hot-toast';
import ScrollToTopButton from './Components/ScrollToTopButton';
import ChatBox from './Components/ChatBox';
import OurGallery from './Components/OurGallery';
import OurBlog from './Components/OurBlog';

const webServiceRoutes = [
  { path: "UIPage", element: <UIpage /> },
  { path: "front", element: <FrontEnd /> },
  { path: "Back", element: <BackendDev /> },
  { path: "CmsPage", element: <CMSPage /> },
  { path: "Contact", element: <Contact /> },
];

function App() {
 
  return (
    <>
    
    <Router> 
      <Header/>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="our-vision" element={<OurVision/>}/>
        <Route path="Our-vision-for-student" element={<Student/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="Ourteam" element={<OurTeam/>}/>
        <Route path="Contact" element={<Contact/>} />
        <Route path="UIPage" element={<UIpage/>}/> 
         <Route path="OurWorks" element={<OurWorks />} />
        <Route path="UIPage/Contact" element={<Contact/>} />
        <Route path="front" element={<FrontEnd/>}/>
        <Route path="Front/Contact" element={<Contact/>} />
        <Route path="Back" element={<BackendDev/>}/>
        <Route path="Back/Contact" element={<Contact/>} />
        <Route path="FullStack" element={<FullstackPage/>}/>
        <Route path="FullStack/Contact" element={<Contact/>}/>
        <Route path='CmsPage' element={<CMSPage/>}/>
        <Route path="CmsPage/Contact" element={<Contact/>}/>
        <Route path="Regularupdate" element={<RegularUpdates/>}/>
        <Route path="Regularupdate/Contact" element={<Contact/>} />
        <Route path="BugFix" element={<BugFix/>}/>
        <Route path="Crmpage" element={<CrmServices/>}/>
        <Route path="Crmpage/Contact" element={<Contact/>}/>
        <Route path="ERPPages" element={<ERPPage/>}/>
        <Route path="AccountingSoftPage"  element={<AccountSoftPage/>}/>
        <Route path="SoftwareTestingPage" element={<SoftwareTestingPage/>}/>
        <Route path="SoftwareMaintainsPage" element={<SoftwareMaintenancePage/>}/>
        <Route path="AndroidAppDevPage"  element ={<AndroidAppServices/>}/>
        <Route path="IosAppDevPage" element={<IOSAppServices/>}/>
        <Route path="AppmaintancePage" element={<AppMaintenanceTestingServices/>}/>
        <Route path='WebservicesPage' element={<Webservices/>}/>
        < Route path='SoftwareServicespage' element={<SoftwareServices/>}/>
        <Route path='AppServicesPage' element={<AppServices/>}/>
        <Route path='DigitalMarketingPage' element={<DigitalMarketing/>}/>
        <Route path='TermsAnd-Conditions' element={<TermsAndConditions/>}/>
        <Route path='Privacy-policy' element={<Privacypolicy/>}/>
        <Route path='Carrer' element={<CarrerPage/>}/>
        <Route path='ourgallery' element={<OurGallery/>}/>
        <Route path='ourblog' element={<OurBlog/>}/>
      </Routes>
      
      <Footer/>
      <ScrollToTop/>
      <ChatBox/>
         <ScrollToTopButton />
    </Router>
    </>
  );
}

export default App;
