import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  const data = {
    name: 'Jagdish Babalsure',
    amount: 1,
    number: '9999999999',
    MUID: "MUID" + Date.now(),
    transactionId: 'T' + Date.now(),
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post('http://localhost:8000/order', { ...data });
      console.log(res);
      if (res.data && res.data.data.instrumentResponse.redirectInfo.url) {
        window.location.href = res.data.data.instrumentResponse.redirectInfo.url;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form 
      onSubmit={handlePayment} 
      className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <p className="text-lg font-semibold"><strong>Name:</strong> {data.name}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold"><strong>Number:</strong> {data.number}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold"><strong>Amount:</strong> {data.amount} Rs</p>
      </div>
      <div className="text-center">
        <button 
          className="w-full bg-blue-500 text-white py-2 text-lg rounded-md hover:bg-blue-700 transition duration-300"
          type="submit"
        >
          Pay Now
        </button>
      </div>
    </form>
  );
};

export default Payment;
