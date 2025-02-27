'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-[#69bd48] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message envoyé !</h2>
          <p className="text-gray-600 mb-8">
            Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.
          </p>
          <Link 
            href="/"
            className="inline-block bg-[#1878c1] text-white px-6 py-3 rounded-lg hover:bg-[#69bd48] transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
