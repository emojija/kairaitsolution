import React from 'react';
import img from "../assets/ServicesImage/img.jpg";
import img2 from "../assets/ServicesImage/img2.jpg";
import img3 from "../assets/ServicesImage/img3.png";

function DigitalMarketing() {
    return (
        <div className="bg-gray-100 p-4 mt-10 md:p-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row bg-white py-4 px-4 md:px-8 rounded-lg shadow-md">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={img} alt="Digital Marketing" className="w-full md:w-3/4 h-auto object-cover rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-2xl text-center md:text-left font-bold mt-4 md:mt-0 mb-4">Digital Marketing Services</h1>
                    <p className="text-gray-600">
                        Digital marketing services encompass a range of strategies including SEO, social media marketing,
                        content creation, email marketing, and paid advertising, all aimed at engaging target audiences.
                    </p>
                    <ul className="list-disc text-gray-600 pl-5 mt-4 space-y-2">
                        <li><strong>Brand Awareness</strong> – Increase brand visibility across the globe.</li>
                        <li><strong>Cost-Effective</strong> – More affordable than traditional marketing with better ROI.</li>
                        <li><strong>Targeted Advertising</strong> – Precise audience targeting based on demographics and behavior.</li>
                        <li><strong>Higher Engagement</strong> – Direct interaction with customers through multiple platforms.</li>
                        <li><strong>Higher Conversion Rates</strong> – Optimized strategies leading to more sales and leads.</li>
                    </ul>
                    <div className="text-center mt-20 mb-5">
                        <button className="rounded-full bg-blue-600  text-white py-3 px-6 hover:scale-105 transition">Let's Start</button>
                    </div>
                    
                </div>
            </div>
            
            {/* Benefits Section */}
            <div className="flex flex-col md:flex-row mt-10 bg-white py-6 px-4 md:px-8 rounded-lg shadow-md">
                <div className="w-full md:w-1/2 flex-col justify-center">
                    <h1 className="text-xl font-bold text-center md:text-left mb-4">Benefits of Digital Marketing</h1>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li><strong>Global & Local Reach</strong> – Target specific locations or worldwide audiences.</li>
                        <li><strong>Cost-Effective Marketing</strong> – Maximize outreach with minimal investment.</li>
                        <li><strong>Real-Time Customer Feedback</strong> – Quick adaptation to consumer needs.</li>
                        <li><strong>Better Brand Awareness</strong> – Increased visibility and customer engagement.</li>
                        <li><strong>Highly Targeted</strong> – Specific demographics and behavioral targeting.</li>
                        <li><strong>Better ROI</strong> – Track and optimize for better returns.</li>
                        <li><strong>Improved Conversions</strong> – Enhanced customer actions and lead generation.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <img src={img2} alt="Benefits of Digital Marketing" className="w-full md:w-3/4 h-auto object-cover rounded-lg" />
                </div>
            </div>
            
            
            {/* Types of Type of Digital Marketing */}
             <div className="flex flex-col md:flex-row bg-white mt-10 py-4 px-4 md:px-8 rounded-lg shadow-md">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={img3} alt="Type of Digital Marketing" className="h-90 w-full object-cover rounded-lg  " />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-2xl text-center md:text-left font-bold mt-4 md:mt-0 mb-4">Types of Digital Marketing</h1>
                    <ul className="list-disc text-gray-600 pl-5 mt-4 space-y-2">
                       <li><strong>Search Engine Optimization (SEO)</strong> – Improving website ranking on search engines.</li>
                    <li><strong>Content Marketing</strong> – Creating and sharing valuable content.</li>
                    <li><strong>Social Media Marketing (SMM)</strong> – Promoting on platforms like Facebook, Instagram, LinkedIn.</li>
                    <li><strong>Pay-Per-Click (PPC) Advertising</strong> – Paid ads on Google, social media, etc.</li>
                    <li><strong>Email Marketing</strong> – Sending targeted emails to potential customers.</li>
                    <li><strong>Affiliate Marketing</strong> – Earning commissions by promoting others’ products.</li>
                    <li><strong>Influencer Marketing</strong> – Partnering with influencers for brand promotion.</li>
                    <li><strong>Video Marketing</strong> – Using videos on YouTube, Instagram, etc., for marketing.</li>
                    <li><strong>Mobile Marketing</strong> – Promotions via SMS, apps, or mobile-friendly ads.</li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}
export default DigitalMarketing;
