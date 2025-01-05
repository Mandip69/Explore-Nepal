import React from 'react';
import NepalMap from '../images/Map.png'; 
import ContactImage from '../images/Contact.png'; 

function Contact() {
  return (
    <div className="container mx-auto mt-8 px-4">
    {/* Contact us section  */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-2 text-lg text-gray-600">
          We’d love to hear from you! Feel free to reach out for any inquiries or assistance.
        </p>
      </div>

      {/* Location Section  */}
      <section className="mt-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Our Locations in Nepal</h2>
            <p className="mt-4 text-gray-600">
              Visit us at our locations across Nepal:
            </p>
            <ul className="mt-4 text-gray-600 list-disc pl-5">
              <li>Kathmandu - The capital city with a blend of culture and modernity.</li>
              <li>Pokhara - The gateway to the Annapurna Circuit.</li>
              <li>Lumbini - The birthplace of Lord Buddha.</li>
              <li>Chitwan - Home to the famous Chitwan National Park.</li>
            </ul>
          </div>
          <img
            src={NepalMap}
            alt="Map of Nepal"
            className="h-64 w-full max-w-sm rounded-lg shadow-lg object-cover mx-auto"
          />
        </div>
      </section>

      {/* Contact Form Section  */}
      <section className="mt-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={ContactImage}
            alt="Contact Us"
            className="h-64 w-full max-w-sm rounded-lg shadow-lg object-cover mx-auto"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Get In Touch</h2>
            <form className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message here"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
