'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm text-center">
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Une erreur est survenue</h2>
        <p className="text-gray-600 mb-8">
          Nous nous excusons pour ce désagrément. Veuillez réessayer.
        </p>
        <button
          onClick={reset}
          className="inline-block bg-[#1878c1] text-white px-6 py-3 rounded-lg hover:bg-[#69bd48] transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}
