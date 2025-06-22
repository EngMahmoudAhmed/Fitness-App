import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Payment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-2xl mx-auto bg-gray-900 rounded-2xl p-6 md:p-8">
        <div className="flex items-center mb-6">
          <Link to="/cart" className="text-teal-500 hover:text-teal-400 flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Link>
        </div>

        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12">
            <img src="/src/assets/react.svg" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Card payment</h1>
            <h2 className="text-xl text-white">Checkout form</h2>
            <p className="text-gray-400 text-sm">Complete registration payment</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Details Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Personal details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">Address line</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">City</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500"
                  placeholder="Enter your city"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">State</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500"
                  placeholder="Enter your state"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Postal code</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500"
                  placeholder="Enter postal code"
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Payment methods</h3>
            <div className="flex space-x-4">
              <img src="/src/assets/visa.png" alt="Visa" className="h-8 w-auto" />
              <img src="/src/assets/mastercard.png" alt="Mastercard" className="h-8 w-auto" />
              <img src="/src/assets/paypal.png" alt="PayPal" className="h-8 w-auto" />
              <img src="/src/assets/applepay.png" alt="Apple Pay" className="h-8 w-auto" />
              <img src="/src/assets/googlepay.png" alt="Google Pay" className="h-8 w-auto" />
            </div>
          </div>

          {/* Card Details Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Card details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">Cardholder name</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500"
                  placeholder="Name on your card"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Card number</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500"
                  placeholder="0000 0000 0000 0000"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Expiry</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">CVC</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500"
                    placeholder="000"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Pay now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;