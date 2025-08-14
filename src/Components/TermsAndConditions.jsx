import React from "react";
import { ShieldCheck, FileText, CreditCard, Users, Globe, Phone } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8 pt-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-lg animate-fade-in">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Please read our terms carefully before using our services. Your trust matters to us.
        </p>
      </div>

      {/* Terms Section */}
      <div className="bg-white shadow-2xl p-12 -m-8 sm:p-12 rounded-3xl space-y-12 text-gray-700 leading-relaxed transition-all duration-300 animate-slide-up">

        {/* Section 1: Introduction */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <ShieldCheck className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">1. Introduction</h2>
          </div>
          <p>
            Welcome to <strong className="text-blue-700">Kaira IT Solutions</strong>. By accessing our website, mobile apps, or using our services, you agree to these terms and conditions.
            We recommend reading them thoroughly to ensure your understanding and compliance.
            If you do not agree to these terms, you are advised not to use our services. These terms apply to all users, visitors, and clients.
          </p>
        </div>

        {/* Section 2: Services */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <FileText className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">2. Services</h2>
          </div>
          <p>
            We offer <span className="text-blue-700 font-semibold">Web Development, Software Solutions, Mobile App Development, and IT Consulting</span>. All services provided by <strong>Kaira IT Solutions</strong> will be governed by specific project contracts agreed upon with the client. 
            Detailed service scopes, timelines, and responsibilities will be clearly defined in each individual agreement.
            These services include but are not limited to web development, software development, mobile application creation, IT consulting,
            maintenance, and technical support. We aim to deliver high-quality solutions that help our clients achieve operational excellence.
            All service agreements will be governed by mutually signed contracts specific to each project.
          </p>
        </div>

        {/* Section 3: Payments */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <CreditCard className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">3. Payments & Refunds</h2>
          </div>
          <p>
            All payments must be completed according to the project milestones or payment schedules. <span className="text-blue-700 font-semibold">Advance payments are non-refundable. </span> 
            Refunds will only be considered if <strong>Kaira IT Solutions</strong> fails to deliver the services as per the signed contract. Any delay in payment may result in project suspension or termination.
          </p>
        </div>

        {/* Section 4: User Responsibilities */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Users className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">4. User Responsibilities</h2>
          </div>
          <p >
             Users must provide accurate, current, and complete information during the registration or service request process.
             Users are responsible for maintaining the confidentiality of their login credentials and must promptly report any unauthorized access.
             Misuse of the platform, illegal activities, or violation of intellectual property rights may lead to immediate termination of services
             and legal action if necessary.
        </p>
        </div>

          {/* 5. Limitation of Liability */}
      
          <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Globe className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">5. Limitation of Liability</h2>
          </div>
          <p>
            <strong>Kaira IT Solutions</strong> shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages
            arising from the use or inability to use our services, including but not limited to loss of profits, data, or goodwill.
            Our maximum liability, under any circumstance, shall not exceed the total amount paid by the client for the services rendered.
          </p>
        </div>

          {/* 6. Privacy Policy */}
      
          <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Globe className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">6. Privacy Policy</h2>
          </div>
          <p>
             Your privacy is important to us. We collect personal information only for the purpose of providing efficient services.
            All personal data will be handled in accordance with our <strong>Privacy Policy</strong> and applicable data protection laws.
            We do not sell, trade, or rent your information to third parties without your consent.
          </p>
        </div>


        {/* Section 7: Governing Law */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Globe className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">7. Governing Law</h2>
          </div>
          <p>
            These terms and conditions are governed by the laws of India. Any disputes or claims arising out of these terms shall be
            subject to the exclusive jurisdiction of the courts located in Delhi, India. By using our services, you consent to this jurisdiction.
          </p>
        </div>

  {/* Section 8: Termination of Services*/}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Globe className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">8. Termination of Services</h2>
          </div>
          <p>
            <strong>Kaira IT Solutions</strong> reserves the right to terminate or suspend services at our discretion without prior notice
            if the client fails to comply with these terms, misuses our services, or defaults on payment. In such cases, no refunds will be provided.
          </p>
        </div>

        {/*  9. Changes to Terms*/}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Globe className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">9. Changes to Terms</h2>
          </div>
          <p>
           We reserve the right to amend these terms and conditions at any time. Changes will become effective immediately upon
            posting on our website. Users are encouraged to review these terms periodically to stay informed about any updates.
          </p>
        </div>

        {/* 10. Intellectual Property */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Globe className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">7. Governing Law</h2>
          </div>
          <p>
            All designs, logos, software code, content, and materials created by <strong>Kaira IT Solutions</strong> remain our intellectual property.
            Clients are granted a limited license to use deliverables strictly for their intended business use.
            Unauthorized reproduction, distribution, or modification is prohibited and may result in legal action.
          </p>
        </div>

        {/*11. Third-Party Links */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Globe className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">11. Third-Party Links</h2>
          </div>
          <p>
            Our website may include links to third-party websites. We are not responsible for the content, practices, or policies of these sites.
            Users are advised to read the terms and privacy policies of any third-party websites they visit via our platform.
          </p>
        </div>

         {/*12. Indemnification */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Globe className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">12. Indemnification</h2>
          </div>
          <p>
            You agree to indemnify, defend, and hold harmless <strong>Kaira IT Solutions</strong>, its affiliates, employees, and partners
            from any claims, damages, liabilities, or expenses (including legal fees) arising from your use of our services,
            violation of these terms, or infringement of third-party rights.
          </p>
        </div>

         {/*13. Force Majeure */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Globe className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">13. Force Majeure</h2>
          </div>
          <p>
            <strong>Kaira IT Solutions</strong> shall not be liable for any failure to perform its obligations under this agreement
            if such failure is caused by events beyond our reasonable control, including but not limited to natural disasters,
            war, strikes, network outages, or acts of government.
          </p>
        </div>

         {/*14. Communication Policy */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Globe className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">14. Communication Policy</h2>
          </div>
          <p>
            All official communication must be conducted via our registered email addresses or verified contact numbers.
            Verbal discussions, social media chats, or informal communication will not be considered legally binding.
            All project-related confirmations and approvals must be documented in writing.
          </p>
        </div>

        {/* Section 15: Contact Us */}
        <div className="space-y-4 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center space-x-4">
            <Phone className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-200 pb-1">15. Contact Us</h2>
          </div>
          <p>
            If you have any questions regarding these terms, please contact us at:
            <br />
            <span className="text-blue-700 font-semibold">Email:</span> info@kairaitsolution.com
            <br />
            <span className="text-blue-700 font-semibold">Phone:</span> +91-9205803705
            <br />
            <span className="text-blue-700 font-semibold">Address:</span> Kaira IT Solution, Greater Noida, U.P. India
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;
