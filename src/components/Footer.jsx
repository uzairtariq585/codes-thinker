import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-lg font-semibold">
          CodeThinker
        </p>

        <p className="mt-2 text-gray-400">
          © {new Date().getFullYear()} CodeThinker. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
