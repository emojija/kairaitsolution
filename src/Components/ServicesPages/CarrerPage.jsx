import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Select from "react-select";
import { FaLessThan } from "react-icons/fa";

const skillOptions = [
  { value: "C", label: "C" },
  { value: "C++", label: "C++" },
  { value: "C#", label: "C#" },
  { value: "python", label: "python" },
  { value: "java", label: "java" },
  { value: ".NET", label: ".NET" },
  { value: "html", label: "html" },
  { value: "css", label: "css" },
  { value: "javaScript", label: "javaScript" },
  { value: "react", label: "react" },
  { value: "node", label: "node" },
  { value: "mongoDB", label: "mongoDB" },
  { value: "expressJS", label: "expessJS" },
  { value: "SEO", label: "SEO" },
];

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    designation: "",
    skills: [],
    resume: null,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [resumeName, setResumeName] = useState("");


  
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, resume: files[0] });
      setResumeName(files[0]?.name || "");
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      experience: formData.experience,
      designation: formData.designation,
      skills: formData.skills,
      resume_name: resumeName || "No file attached",
    };

    emailjs
      .send(
        "service_0hkk1v8",   
        "template_ne8d2vq",  
        formData,
        "LoI1ZO8YA7XOSR3NH"    
      )
      .then(() => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        setFormData({
          name: "",
          email: "",
          phone: "",
          experience: "",
          designation: "",
          skills: [],
          resume: null,
        });
        setResumeName("");
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative pt-24">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">
        Join Our Team
      </h1>
      <p className="text-center text-gray-700 mb-6">
        Fill out the form below to apply for a position at{" "}
        <strong>Kaira IT Solutions</strong>
      </p>

      {showPopup && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          ✅ Successfully Registered! Our team will contact you shortly.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-lg space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 border p-2 rounded w-full"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 border p-2 rounded w-full"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 border p-2 rounded w-full"
              placeholder="+91 12345 67890"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Years of Experience
            </label>
           
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1 border p-2 rounded w-full bg-white"
              required
            >
              <option value="" disabled>
                Select Experience
              </option>
              <option value="Fresher">Fresher</option>
              <option value="less than one"> &lt; 1 year</option>
              <option value="one year">1 year</option>
              <option value="two year">2 year</option>
              <option value="three year">3+ year</option>
            </select>


          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Designation
            </label>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="mt-1 border p-2 rounded w-full bg-white"
              required
            >
              <option value="" disabled>
                Select designation
              </option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="App Developer">App Developer</option>
              <option value="Digital Marketing">Digital Marketing Executive</option>
            </select>
          </div>


<div className="md:col-span-2">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Skills
  </label>

  <Select
    isMulti                                    // ⬅︎ lets you pick several
    name="skills"
    options={skillOptions}
    placeholder="Select skills…"
    value={skillOptions.filter((opt) =>
      formData.skills.includes(opt.value)
    )}
    onChange={(selected) =>
      setFormData({
        ...formData,
        skills: selected.map((opt) => opt.value), // store just ["C#", "React"]
      })
    }
    className="basic-multi-select"
    classNamePrefix="select"
  />
</div>


          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Upload Resume
            </label>
            <div className="mt-1 flex items-center">
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="border p-2 rounded w-full"
              />
            </div>
            {resumeName && (
              <p className="text-sm text-gray-600 mt-1">
                Selected: {resumeName}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default CareerPage;
