import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const About = () => {
  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg border-l-4 border-green-500">
      <h1 className="text-center text-3xl font-bold text-green-600 mb-6">
        Frequently Asked Questions (FAQs)
      </h1>

      {/* General Information */}
      <div className="mb-6 p-4 border-l-4 border-green-500 hover:bg-green-50 transition">
        <h2 className="text-2xl font-semibold text-green-600">General Information</h2>
        <p className="mt-2"><strong>Q: What is AGRIKART?</strong></p>
        <p className="text-gray-700">
          A: AGRIKART is an e-commerce platform designed for farmers, offering a variety of farming products.
        </p>

        <p className="mt-2"><strong>Q: How can I contact customer support?</strong></p>
        <p className="text-gray-700">
          A: You can reach us via the Contact Us page, email at 
          <strong> AgriKartsupport.com</strong>, or call 
          <strong> 8459946986</strong> (24 hours).
        </p>
      </div>

      {/* Account and Registration */}
      <div className="mb-6 p-4 border-l-4 border-green-500 hover:bg-green-50 transition">
        <h2 className="text-2xl font-semibold text-green-600">Account and Registration</h2>
        <p className="mt-2"><strong>Q: How do I create an account?</strong></p>
        <p className="text-gray-700">
          A: Click on the "Sign Up" button, enter your details, and follow the instructions.
        </p>

        <p className="mt-2"><strong>Q: Is my personal information safe?</strong></p>
        <p className="text-gray-700">
          A: Yes, we use industry-standard encryption to protect your data.
        </p>
      </div>

      {/* Ordering and Delivery */}
      <div className="mb-6 p-4 border-l-4 border-green-500 hover:bg-green-50 transition">
        <h2 className="text-2xl font-semibold text-green-600">Ordering and Delivery</h2>
        <p className="mt-2"><strong>Q: How do I place an order?</strong></p>
        <p className="text-gray-700">
          A: Browse the products, add items to your cart, and proceed to checkout.
        </p>

        <p className="mt-2"><strong>Q: Do you deliver to rural areas?</strong></p>
        <p className="text-gray-700">
          A: Yes, we deliver to most rural areas. Contact support for details.
        </p>
      </div>

      {/* Payment and Refunds */}
      <div className="mb-6 p-4 border-l-4 border-green-500 hover:bg-green-50 transition">
        <h2 className="text-2xl font-semibold text-green-600">Payment and Refunds</h2>
        <p className="mt-2"><strong>Q: What payment methods do you accept?</strong></p>
        <p className="text-gray-700">
          A: We accept UPI (PhonePe, Google Pay) and Cash on Delivery (COD).
        </p>

        <p className="mt-2"><strong>Q: What is your return/refund policy?</strong></p>
        <p className="text-gray-700">
          A: You can request a return or refund within 7 days for defective products.
        </p>
      </div>

      {/* Products and Categories */}
      <div className="mb-6 p-4 border-l-4 border-green-500 hover:bg-green-50 transition">
        <h2 className="text-2xl font-semibold text-green-600">Products and Categories</h2>
        <p className="mt-2"><strong>Q: What products do you offer?</strong></p>
        <p className="text-gray-700">
          A: We provide organic products and livestock supplies.
        </p>

        <p className="mt-2"><strong>Q: Do you sell organic farming products?</strong></p>
        <p className="text-gray-700">
          A: Yes, we have a dedicated category for organic farming supplies.
        </p>
      </div>

      {/* Contact Support Button (Linked to Contact Page) */}
      <div className="text-center mt-6">
        <Link to="/contact">
          <button className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition">
            Contact Support
          </button>
        </Link>
      </div>

      {/* Footer */}
      <p className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} AGRIKART. All rights reserved.
      </p>
    </div>
  );
};

export default About;
