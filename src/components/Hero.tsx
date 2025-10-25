'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen bg-black">
      <img
        src="/images/hero.jpg"
        alt="ZasFit Hero"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center text-white z-10"
      >
        <h1 className="text-5xl font-bold text-orange-400 mb-4">Move. Feel. Thrive.</h1>
        <p className="text-lg mb-6">Join the ZasFit community and embark on your fitness journey today.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-black/40 text-orange-400 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition backdrop-blur-md">
            Join Now
          </button>
          <button className="bg-orange-400/30 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition backdrop-blur-md">
            Book a Trial
          </button>
        </div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-orange-400/30 blur-3xl pointer-events-none"></div>
        <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-orange-400/30 blur-3xl pointer-events-none"></div>
      </motion.div>
    </section>
  )
}
