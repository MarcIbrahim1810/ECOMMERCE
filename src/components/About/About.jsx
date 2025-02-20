import React from 'react';
import style from "./About.module.css"
import img1 from "../../assets/images/10.jpg"
import img2 from "../../assets/images/12.jpg"



export default function About() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src={img1}  alt="About Us" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to our e-commerce platform! We are dedicated to providing you with the best online shopping experience. Our mission is to offer a wide range of high-quality products at competitive prices, along with exceptional customer service.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our team is passionate about finding the latest trends and bringing them to you. We believe in the power of technology to make shopping easier and more enjoyable. Thank you for choosing us as your go-to online store.
          </p>
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/2 md:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <i className="fas fa-shipping-fast text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-700">We ensure quick and reliable delivery for all your orders.</p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <i className="fas fa-headset text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-700">Our support team is here to help you with any questions or concerns.</p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <i className="fas fa-tags text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-700">We offer competitive prices on all our products.</p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <i className="fas fa-thumbs-up text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-700">We provide only the best quality products to our customers.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our team is made up of dedicated professionals who are passionate about what they do. We work hard to bring you the best products and services.
        </p>
        <img src={img2} alt="Our Team" className="w-full rounded-lg shadow-md" />
      </div>
    </div>
  );
}