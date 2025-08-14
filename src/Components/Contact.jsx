import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_gf6v2wk";
const TEMPLATE_ID = "template_kg2621e";
const PUBLIC_KEY = "03svSTM8LAGMOUov7";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`, 
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(() => {
        toast.success("Your message has been sent! 🎉");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        toast.error("Failed to send. Please try again.");
      });
  };

  const slideUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      
      <Toaster position="top-right" />

      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 py-5">Contact Us</h2>
      </div>
<div className="container mx-auto px-6 md:px-12 bg-gray-100">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 gap-6 text-xl">
            {[
              {
                icon: "bi-geo-alt",
                title: "\ud83d\udccd Address",
                lines: [
                  "9th floor Galaxy Blue Sapphire Plaza, Sector 4, Greater Noida, Uttar Pradesh 201309",
                ],
                variant: leftVariant,
              },
              {
                icon: "bi-telephone",
                title: " \ud83d\udcde Call Us",
                lines: ["+91-9205803705"],
                variant: rightVariant,
              },
              {
                icon: "bi-envelope",
                title: "\u2709\ufe0f Email Us",
                lines: [
                  "info@kairaitsolution.com",
                  "contact@kairaitsolution.com",
                ],
                variant: leftVariant,
              },
              {
                icon: "bi-clock",
                title: "\u23f0 Open Hours",
                lines: ["Monday - Saturday", "10:00AM - 06:00PM"],
                variant: rightVariant,
              },
            ].map((info, index) => {
              return (
                <motion.div
                  key={index}
                  className="bg-white p-4 shadow-lg rounded-lg text-center break-words"
                  variants={info.variant}
                  initial="hidden"
                  animate="visible"
                >
                  <i className={`bi ${info.icon} text-3xl text-blue-600`}></i>
                  <h3 className="text-lg mt-2 pb-6 font-semibold">{info.title}</h3>
                  {info.lines.map((line, i) => {
                    const isEmail = line.includes("@");
                    const isPhone = /^\+?[0-9\s\-()]+$/.test(line);
                    let href = "#";
                    if (isEmail) href = `mailto:${line}`;
                    else if (isPhone) href = `tel:${line}`;

                    return (
                      <p key={i} className="text-gray-600 text-sm break-words overflow-hidden">
                        {(isEmail || isPhone) ? (
                          <a
                            href={href}
                            className="text-blue-600 underline hover:text-blue-800 transition"
                          >
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    );
                  })}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="w-full h-[400px] rounded-2xl shadow-xl overflow-hidden"
            variants={rightVariant}
            initial="hidden"
            animate="visible"
          >
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=28.6072,77.4354&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto px-5 max-w-4xl mb-10">
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 md:p-12 mt-10"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                placeholder="First name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                placeholder="Surname"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                placeholder="abc@gmail.com"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                placeholder="+91‑9876543210"
                required
              />
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <label className="text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              placeholder="How can we help?"
              required
            />
          </div>

          <div className="flex flex-col mt-6">
            <label className="text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="border rounded p-2 w-full resize-none"
              placeholder="Type your message here…"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      
    </section>
  );
};

export default Contact;