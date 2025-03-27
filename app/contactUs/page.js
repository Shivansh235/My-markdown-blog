"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";


export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData(" ")
  };

  return (
    <div className={`h-screen flex items-center justify-center p-6  transition-colors ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`shadow-lg rounded-2xl p-8 max-w-lg w-full transition-colors ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}
      >
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <p className="mb-6">Have questions? Fill out the form below and we will get back to you soon.</p>
        {submitted ? (
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-green-500 font-semibold"
          >
            Thank you! Your message has been sent.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full p-3 border-2 rounded-md focus:ring focus:ring-blue-300 transition ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full p-3 border-2 rounded-md focus:ring focus:ring-blue-300 transition ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full p-3 border-2 rounded-md focus:ring focus:ring-blue-300 transition ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`}
                rows="4"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
}