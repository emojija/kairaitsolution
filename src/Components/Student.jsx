import React, { useState, useEffect } from 'react';

function Student() {
  const [name, setName] = useState('');
  const [contactNumber, setNumber]=useState('');
  const [email, setEmail] = useState('');
  const [qualification, setQualification] = useState('');
  const [college, setCollege] = useState('');
  const [message, setMessage] = useState('');
  const [resume, setResume] = useState(null);
  const [animate, setAnimate] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! We will contact you soon.`);
    setName('');
    setNumber('');
    setEmail('');
    setQualification('');
    setCollege('');
    setMessage('');
    setResume(null);

    
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-13">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Our Vision for Students
        </h1>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Vision Content */}
          <div
            className={`space-y-6 transform transition-transform duration-1000 ease-in-out ${
              animate ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <p className="text-gray-600">
              At <span className="font-semibold text-blue-800">Kaira IT Solutions</span>, we believe in empowering students to achieve their full potential. Our vision is to bridge the gap between academia and industry by providing students with real-world experience through internships, training programs, and job opportunities.
            </p>
            <p className="text-gray-600">
              We are committed to fostering a culture of <span className="font-semibold">innovation, creativity, and collaboration</span>. Whether you are a beginner or an advanced learner, we offer tailored programs to help you grow your skills and build a successful career in the tech industry.
            </p>
            
           <strong> <h3 className="text-gray-600 mb-4 text-2xl">Students Benefits  </h3></strong>
            <ul className="list-disc list-inside text-gray-600">
              <li>Practical Experience: Internships provide real-world experience, helping you apply theoretical knowledge in a professional setting.</li>
              <li>Skill Development: You can improve both technical and soft skills, such as teamwork, communication, problem-solving, and time management.</li>
              <li>Networking Opportunities: Internships allow you to connect with  professionals, which can help with future job opportunities and mentorship.</li>
              <li>Stronger Resume: Work experience from an internship makes your resume more attractive to employers, increasing your chances of getting hired.</li>
              <li>Understanding Workplace Culture: You learn about corporate culture, work ethics, and professionalism, which helps in adapting to carrer building.</li>
            </ul>
            <p className="text-gray-600">
              Join us in<span className=" text-blue-600 text-xl "> Our Mission</span>  to create a future where every student has the opportunity to thrive in a connected world.
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div
            className={`p-6 rounded-lg shadow-lg transform transition-transform duration-1000 ease-in-out ${
              animate ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <h2 className="text-2xl font-semibold text-black mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-black">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-black">Contact Number:  <span className='text-red-400'>*</span></label>
                <input
                  type="number"
                  onChange={(e)=> {
                    const value = e.target.value;
                    if(value.length <= 10) {
                      setNumber(value)
                    }
                  }}
                  value={contactNumber}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  
                />
              </div>
              <div>
                <label className="block text-black">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-black">Highest Qualification:</label>
                <input
                  type="text"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-black">College/University Name:</label>
                <input
                  type="text"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-black">Message:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-black">Upload Resume:</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 py-2 px-4 rounded-lg hover:bg-blue-900 hover:text-black transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
