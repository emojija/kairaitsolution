import React from "react";
import boost from '../assets/ourblog/boost.png'
import cyber from '../assets/ourblog/cyber.png'
import cloud from '../assets/ourblog/cloud.jpg'
const blogs = [
  {
    id: 1,
    title: "How IT Solutions Boost Your Business",
    description: "Learn how modern IT infrastructure helps businesses scale and improve customer satisfaction.",
    date: "June 10, 2025",
    author: "Kaira Team",
    image: boost, // Replace with real blog image URL
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices in 2025",
    description: "Tips to protect your data and network from threats with proactive security measures.",
    date: "June 5, 2025",
    author: "Kaira Team",
    image: cyber,
  },
  {
    id: 3,
    title: "Why Cloud Migration Is Crucial",
    description: "Explore the benefits of cloud computing and why it’s a must for scalability.",
    date: "May 25, 2025",
    author: "Kaira Team",
    image: cloud,
  },
];

const OurBlog = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center max-w-7xl mx-auto px-4 py-12 text-gray-800">
          Our Blog
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map(({ id, title, description, date, author, image }) => (
            <div key={id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <img src={image} alt={title} className="w-full h-90 max-h-[200px] object-fill rounded-lg" />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-500 mb-2">{date} — {author}</p>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
