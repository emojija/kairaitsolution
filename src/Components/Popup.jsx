import React, { useState } from "react";

const Popup = ({data}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    number:""
  });
 
  const handleSubmit = (e) => {
    e.preventDefault();
         
    if (formData.email || formData.password) {
      setIsLoggedIn(true);
    }
  };

  const handleChange = (event) => {
    const  {name, value}  = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        {isLoggedIn ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600">{formData.name}</h2>
            <p className="mt-2 text-gray-600">Humare Website me !</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{data}</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password:</label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Popup;
