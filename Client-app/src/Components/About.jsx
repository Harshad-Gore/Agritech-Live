import React from "react";

const About= () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
      <h1 className="text-3xl font-bold text-green-700 mb-4">About Us</h1>
      <p className="text-gray-600 text-lg mb-4">
        Welcome to <span className="font-semibold">Farm Fresh Market</span>, your trusted source for organic and farm-fresh produce.
        We are committed to connecting farmers directly with consumers, ensuring fresh, high-quality, and ethically sourced products.
      </p>
      <h2 className="text-2xl font-semibold text-green-600 mt-6">Our Mission</h2>
      <p className="text-gray-600 text-lg mb-4">
        Our mission is to promote sustainable agriculture by empowering farmers and delivering fresh, chemical-free food
        directly to your doorstep. We believe in quality, transparency, and a healthy lifestyle for all.
      </p>
      <h2 className="text-2xl font-semibold text-green-600 mt-6">Why Choose Us?</h2>
      <ul className="list-disc list-inside text-gray-600 text-lg mb-4">
        <li>100% Organic and Fresh Products</li>
        <li>Direct Farmer-to-Consumer Model</li>
        <li>Fair Prices for Farmers & Customers</li>
        <li>Eco-friendly and Sustainable Practices</li>
      </ul>
      <p className="text-gray-600 text-lg">
        Thank you for being a part of our journey. Together, let's make a difference in the way we source and consume food!
      </p>
    </div>
  );
};

export default About;
