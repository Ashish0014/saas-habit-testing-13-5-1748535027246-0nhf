import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - Your App</title>
      </Helmet>
      
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="lg:text-center">
              <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">
                About Us
              </h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Mission
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We're building the future of web applications with modern tools and
                best practices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}