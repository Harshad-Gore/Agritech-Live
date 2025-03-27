import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "leaflet/dist/leaflet.css";
import Map from "./Map";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Load Google Translate script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,mr,ta,te,kn,gu,pa",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kgh8ub1",
        "template_9iabem3",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "UhllMHuKgMh9caST2"
      )
      .then(
        () => {
          alert("Thank you! Your query has been sent successfully.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          alert("Sorry, there was an error. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-100 font-sans">
      {/* Google Translate Dropdown */}
      <div id="google_translate_element" className="mb-4 text-center"></div>

      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Do You Have Any Questions?</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-600">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold text-gray-600">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-semibold text-gray-600">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold text-gray-600">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message"
                rows="5"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button type="submit" className="w-full p-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700">SEND</button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch with Us</h2>
          <p className="mb-2"><strong>Address:</strong><br /> Alandi, Pune, Maharashtra, India</p>
          <p className="mb-2"><strong>Contact No.:</strong><br /> 9876-543-210</p>
          <p className="mb-2"><strong>Email:</strong><br /> jagdishbabalsure89@gmail.com</p>
          <p><strong>Website Info:</strong><br /> Open 24 hrs</p>
        </div>
      </div>

      {/* Google Map Component */}
      <Map />
    </div>
  );
};

export default Contact;
