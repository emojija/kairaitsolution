// import React from 'react';
// import { Link } from "react-router-dom";


// const PrivacyPolicyKaira = () => {
//     return (
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-gray-800">
//             <h1 className="text-4xl font-bold text-center text-blue-700 mb-8 drop-shadow mt-12">Privacy Policy</h1>

//             <section className="space-y-2">
//                 <p><strong>Effective Date:</strong> January 1, 2025</p>
//                 <p><strong>Last Updated:</strong> June 20, 2025</p>
//                 <p>At <strong>Kaira IT Solution</strong>, we are committed to protecting your personal information. This summary explains what we collect, how we use it, and your privacy rights.</p>
//             </section>

//             <section className="space-y-2">
//                 <h2 className="text-2xl font-semibold text-gray-800">What We Collect</h2>
//                 <ul className="list-disc list-inside space-y-1">
//                     <li>Personal details like your name, contact information, and account details</li>
//                     <li>Device information, IP address, and browser activity</li>
//                     <li>Publicly available data from educational and government platforms</li>
//                 </ul>
//             </section>

//             <section className="space-y-2">
//                 <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
//                 <ul className="list-disc list-inside space-y-1">
//                     <li>To provide, improve, and secure our learning platform</li>
//                     <li>To process transactions and manage user accounts</li>
//                     <li>For platform troubleshooting, analytics, and support</li>
//                 </ul>
//             </section>

//             <section className="space-y-2">
//                 <h2 className="text-2xl font-semibold text-gray-800">Sharing Information</h2>
//                 <ul className="list-disc list-inside space-y-1">
//                     <li>With educational partners for learning services</li>
//                     <li>With service providers like hosting and analytics tools</li>
//                     <li>We do not sell your personal information</li>
//                     <li>Publicly available educational content may be shared</li>
//                 </ul>
//             </section>

//             <section className="space-y-2">
//                 <h2 className="text-2xl font-semibold text-gray-800">Your Privacy Rights</h2>
//                 <ul className="list-disc list-inside space-y-1">
//                     <li>Right to access your personal information</li>
//                     <li>Right to request deletion of your data</li>
//                     <li>Right to opt out of data sharing for marketing</li>
//                     <li>Right to non-discrimination when exercising privacy rights</li>
//                 </ul>
//             </section>

//             <section className="space-y-2">
//                 <h2 className="text-2xl font-semibold text-gray-800">Cookies & Tracking</h2>
//                 <p>We use cookies, Google Analytics, and social media pixels (like Facebook and LinkedIn) to improve your experience and offer relevant content. You can manage cookies via your browser settings or opt-out <a href="https://optout.aboutads.info/?c=2&lang=EN" target='_blank' className="text-blue-700 underline">here</a>.</p>
//             </section>

//             <section className="space-y-2">
//                 <h2 className="text-2xl font-semibold text-gray-800">Data Security</h2>
//                 <p>We follow strict security standards to protect your information. You are responsible for keeping your login credentials safe and secure.</p>
//             </section>

//             <section className="space-y-2">
//                 <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
//                 <ul className="list-inside space-y-1">
//                     <li><strong>Phone:</strong> +91-9205803705</li>
//                     <li><strong>Email:</strong> info@kairaitsolution.com</li>
//                     <li><strong>Address:</strong> Kaira IT Solution, Greater Noida U.P.</li>
//                     <li><strong>Contact Form:</strong>  <Link
//                         to="/contact"
//                         className="text-blue-600 underline font-medium"
//                         onClick={() => setIsOpen(false)}
//                     >
//                         Contact
//                     </Link>{" "}</li>
//                 </ul>
//             </section>

//             <section className="space-y-2">
//                 <h2 className="text-2xl font-semibold text-gray-800">Policy Updates</h2>
//                 <p>We may update this policy periodically. Please check our website for the latest version. Continued use of our platform indicates your acceptance of the latest terms.</p>
//             </section>
//         </div>
//     );
// };

// export default PrivacyPolicyKaira;


// import React from "react";
// import { ShieldCheck, FileText, UserCheck, Eye, Lock, Globe, Phone } from "lucide-react";
// import { Link } from "react-router-dom";

// const PrivacyPolicyKaira = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8 pt-24">
//       {/* Hero Section */}
//       <div className="text-center mb-16">
//         <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-lg animate-fade-in">
//           Privacy Policy
//         </h1>
//         <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
//           Learn how Kaira IT Solution protects your privacy and uses your data responsibly.
//         </p>
//       </div>

//       {/* Privacy Policy Sections */}
//       <div className="bg-white shadow-2xl p-8 sm:p-12 rounded-3xl space-y-12 text-gray-700 leading-relaxed transition-all duration-300 animate-slide-up">

//         {/* Effective Date */}
//         <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
//           <div className="flex items-center space-x-4">
//             <ShieldCheck className="text-blue-600 w-8 h-8" />
//             <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">Effective Date</h2>
//           </div>
//           <p><strong>Effective Date:</strong> January 1, 2025</p>
//           <p><strong>Last Updated:</strong> June 20, 2025</p>
//           <p>
//             At <strong className="text-blue-700">Kaira IT Solution</strong>, we prioritize the security and privacy of your information. This policy explains what we collect, how we use it, and your rights.
//           </p>
//         </div>

//         {/* What We Collect */}
//         <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
//           <div className="flex items-center space-x-4">
//             <FileText className="text-blue-600 w-8 h-8" />
//             <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">What We Collect</h2>
//           </div>
//           <ul className="list-disc list-inside space-y-1">
//             <li>Personal details like your name, contact number, and account details</li>
//             <li>Device information, IP address, and browser activity</li>
//             <li>Publicly available data from educational and government platforms</li>
//           </ul>
//         </div>

//         {/* How We Use Information */}
//         <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
//           <div className="flex items-center space-x-4">
//             <UserCheck className="text-blue-600 w-8 h-8" />
//             <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">How We Use Your Information</h2>
//           </div>
//           <ul className="list-disc list-inside space-y-1">
//             <li>To provide, improve, and secure our services</li>
//             <li>To process payments and manage user accounts</li>
//             <li>For troubleshooting, analytics, and customer support</li>
//           </ul>
//         </div>

//         {/* Sharing Information */}
//         <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
//           <div className="flex items-center space-x-4">
//             <Eye className="text-blue-600 w-8 h-8" />
//             <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">Sharing Information</h2>
//           </div>
//           <ul className="list-disc list-inside space-y-1">
//             <li>With educational partners for learning services</li>
//             <li>With trusted service providers for hosting and analytics</li>
//             <li>We do not sell your personal information</li>
//             <li>Publicly available educational content may be shared</li>
//           </ul>
//         </div>

//         {/* Your Privacy Rights */}
//         <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
//           <div className="flex items-center space-x-4">
//             <ShieldCheck className="text-blue-600 w-8 h-8" />
//             <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">Your Privacy Rights</h2>
//           </div>
//           <ul className="list-disc list-inside space-y-1">
//             <li>Right to access your personal information</li>
//             <li>Right to request deletion of your data</li>
//             <li>Right to opt out of marketing data sharing</li>
//             <li>Right to non-discrimination when exercising privacy rights</li>
//           </ul>
//         </div>

//         {/* Cookies & Tracking */}
//         <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
//           <div className="flex items-center space-x-4">
//             <Globe className="text-blue-600 w-8 h-8" />
//             <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">Cookies & Tracking</h2>
//           </div>
//           <p>
//             We use cookies, Google Analytics, and social media pixels to enhance user experience and provide relevant content.
//             You can manage cookies via your browser settings or opt-out{" "}
//             <a href="https://optout.aboutads.info/?c=2&lang=EN" target="_blank" className="text-blue-700 underline">here</a>.
//           </p>
//         </div>

//         {/* Data Security */}
//         <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
//           <div className="flex items-center space-x-4">
//             <Lock className="text-blue-600 w-8 h-8" />
//             <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">Data Security</h2>
//           </div>
//           <p>
//             We use strong security measures to protect your data. However, you are responsible for keeping your login credentials safe.
//           </p>
//         </div>

//         {/* Contact Us */}
//         <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
//           <div className="flex items-center space-x-4">
//             <Phone className="text-blue-600 w-8 h-8" />
//             <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">Contact Us</h2>
//           </div>
//           <ul className="list-inside space-y-1">
//             <li><strong>Phone:</strong> +91-9205803705</li>
//             <li><strong>Email:</strong> info@kairaitsolution.com</li>
//             <li><strong>Address:</strong> Kaira IT Solution, Greater Noida U.P.</li>
//             <li>
//               <strong>Contact Form:</strong>{" "}
//               <Link
//                 to="/contact"
//                 className="text-blue-600 underline font-medium"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Policy Updates */}
//         <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
//           <div className="flex items-center space-x-4">
//             <FileText className="text-blue-600 w-8 h-8" />
//             <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">Policy Updates</h2>
//           </div>
//           <p>
//             We may update this policy periodically. Please review our website regularly for the latest version. Continued use of our services indicates your acceptance of the latest terms.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicyKaira;


import React from "react";
import { ShieldCheck, FileText, UserCheck, Eye, Lock, Globe, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicyKaira = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8 pt-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-lg animate-fade-in">
          Privacy Policy
        </h1>
        <p className="mt-4 text-gray-600 text-xl max-w-2xl mx-auto">
          Detailed explanation of how Kaira IT Solutions collects, uses, and protects your personal information.
        </p>
      </div>

      {/* Privacy Policy Sections */}
      <div className="bg-white shadow-2xl p-8 sm:p-12 rounded-3xl space-y-12 text-gray-700 leading-relaxed transition-all duration-300 animate-slide-up text-lg">

        {/* Effective Date */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <ShieldCheck className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">Effective Date</h2>
          </div>
          <p><strong>Effective Date:</strong> January 1, 2025</p>
          <p><strong>Last Updated:</strong> June 20, 2025</p>
          <p>
            This Privacy Policy governs the manner in which Kaira IT Solutions collects, uses, maintains, and discloses information collected from users of our website and services. It is designed to ensure the highest level of transparency and user trust.
          </p>
        </div>

        {/* What We Collect */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <FileText className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">What We Collect</h2>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Personal Information</h3>
            <p>We collect personal details such as your full name, contact number, email address, residential and office addresses, job titles, and company details. This information is necessary to create your user profile, process your requests, and provide tailored communication related to our services.</p>

            <h3 className="text-2xl font-semibold">Device and Technical Data</h3>
            <p>We gather technical data from the devices you use to access our platform. This includes your IP address, browser type, device model, operating system, and session logs. This helps us ensure security, monitor potential threats, and optimize the user interface for various devices.</p>

            <h3 className="text-2xl font-semibold">Location Data</h3>
            <p>When permitted, we collect real-time location information to offer location-specific content and services. This enhances your user experience by providing regionally relevant features and support.</p>

            <h3 className="text-2xl font-semibold">Educational Background</h3>
            <p>We may access publicly available educational records to personalize your experience and connect you with the most suitable learning materials or services. This information helps us deliver better learning solutions tailored to your profile.</p>

            <h3 className="text-2xl font-semibold">Payment Information</h3>
            <p>We securely collect transaction data such as payment method details, billing addresses, payment confirmations, and receipts. This ensures accurate processing of your transactions and provides you with reliable service history.</p>

            <h3 className="text-2xl font-semibold">Browsing Behavior</h3>
            <p>We monitor your interaction with our website, including pages visited, time spent on each page, links clicked, and navigation patterns. This data is used to analyze trends, track user movements, and continuously improve our website’s functionality and content.</p>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <UserCheck className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">How We Use Your Information</h2>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Account Management</h3>
            <p>We use your personal information to create, maintain, and secure your account. This allows you to access our services securely and receive personalized support.</p>

            <h3 className="text-2xl font-semibold">Service Delivery</h3>
            <p>We utilize your information to process your service requests, manage your subscriptions, handle transactions, and provide efficient customer support for a seamless experience.</p>

            <h3 className="text-2xl font-semibold">Personalization</h3>
            <p>Your data helps us tailor content, services, and recommendations based on your preferences, past behavior, and educational interests.</p>

            <h3 className="text-2xl font-semibold">Marketing</h3>
            <p>With your consent, we send newsletters, promotions, and updates about our products and services. You can opt-out anytime using provided unsubscribe options.</p>

            <h3 className="text-2xl font-semibold">Platform Enhancement</h3>
            <p>We analyze user interactions and feedback to continuously improve our website features, security protocols, and user interface.</p>

            <h3 className="text-2xl font-semibold">Legal Compliance</h3>
            <p>Your information may be used to comply with legal obligations, protect our legal rights, and ensure adherence to our terms of service and applicable regulations.</p>
          </div>
        </div>

        {/* Sharing Information */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Eye className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">Sharing Information</h2>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">With Educational Partners</h3>
            <p>We share necessary details with educational institutions and partners to deliver comprehensive learning solutions. This ensures timely access to courses, materials, and certification services.</p>

            <h3 className="text-2xl font-semibold">With Service Providers</h3>
            <p>We work with trusted service providers for hosting, analytics, payment processing, and technical support. These providers have strict confidentiality agreements to protect your data.</p>

            <h3 className="text-2xl font-semibold">With Regulatory Authorities</h3>
            <p>In compliance with legal requirements, we may share your data with government agencies or regulatory bodies when necessary to meet our legal obligations.</p>

            <h3 className="text-2xl font-semibold">With User Consent</h3>
            <p>We will always seek your explicit consent before sharing your information with third parties for purposes beyond service delivery or legal compliance.</p>

            <h3 className="text-2xl font-semibold">No Sale of Information</h3>
            <p>We strictly do not sell, rent, or trade your personal information to third parties for advertising or any commercial purposes.</p>
          </div>
        </div>

        {/* Your Privacy Rights */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <ShieldCheck className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">Your Privacy Rights</h2>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Right to Access</h3>
            <p>You can request a complete overview of all personal information we hold about you at any time by contacting our support team.</p>

            <h3 className="text-2xl font-semibold">Right to Correction</h3>
            <p>If any of your personal information is inaccurate or outdated, you have the right to request prompt corrections or updates.</p>

            <h3 className="text-2xl font-semibold">Right to Deletion</h3>
            <p>You may request the deletion of your personal data from our systems, provided that such deletion does not conflict with mandatory legal obligations.</p>

            <h3 className="text-2xl font-semibold">Right to Restrict Processing</h3>
            <p>You may request that we limit the use of your personal information, particularly when accuracy is contested or you object to processing for certain purposes.</p>

            <h3 className="text-2xl font-semibold">Right to Opt-Out</h3>
            <p>You can unsubscribe from marketing communications at any time by using the opt-out links provided in our emails or contacting us directly.</p>
          </div>
        </div>

        {/* Cookies & Tracking */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Globe className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">Cookies & Tracking</h2>
          </div>
          <p>
            We use cookies and tracking technologies to enhance your browsing experience, provide personalized content, and analyze user engagement. Cookies allow us to remember your preferences, maintain login sessions, and deliver targeted advertisements.
          </p>
          <p>
            We also utilize Google Analytics and social media pixels from platforms such as Facebook and LinkedIn to understand visitor behaviors and improve marketing effectiveness. You can manage your cookie preferences through your browser settings or opt-out of targeted advertising at <a href="https://optout.aboutads.info/?c=2&lang=EN" target="_blank" className="text-blue-700 underline">this link</a>.
          </p>
        </div>

        {/* Data Security */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Lock className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">Data Security</h2>
          </div>
          <p>
            We employ stringent security protocols, including SSL encryption, firewall protections, and multi-layer authentication systems to safeguard your data. Although we take extensive precautions, no system is entirely immune to cyber threats. We encourage users to maintain strong passwords and regularly update their security settings.
          </p>
        </div>

        {/* Contact Us */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Phone className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">Contact Us</h2>
          </div>
          <ul className="list-inside space-y-2">
            <li><strong>Phone:</strong> +91-9205803705</li>
            <li><strong>Email:</strong> info@kairaitsolution.com</li>
            <li><strong>Address:</strong> Kaira IT Solution, Greater Noida U.P.</li>
            <li>
              <strong>Contact Form:</strong>{" "}
              <Link to="/contact" className="text-blue-600 underline font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Policy Updates */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <FileText className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">Policy Updates</h2>
          </div>
          <p>
            We reserve the right to modify this Privacy Policy to reflect changes in our practices or regulatory requirements. Significant updates will be prominently posted on our website, and we recommend regularly reviewing this policy to stay informed.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyKaira;