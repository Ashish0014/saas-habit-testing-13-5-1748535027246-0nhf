import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-6 sm:px-0"
          >
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Welcome to Saas habit testing 13/5
                </h1>
                <p className="text-gray-600 text-lg">
                  "Habito" a habit tracker website, where we use supabase for storage and authentication., Users can create habits and set goals accordigly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}