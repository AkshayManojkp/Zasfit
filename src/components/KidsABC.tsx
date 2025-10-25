'use client'

import { motion } from 'framer-motion'

export function KidsABC() {
  const cards = [
    { title: 'Awareness', description: 'Helping kids understand themselves', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&q=80' },
    { title: 'Brilliance', description: 'Encouraging creativity and intelligence', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&q=80' },
    { title: 'Confidence', description: 'Building self-esteem and social skills', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80' },
  ]

  return (
    <section id="kids" className="py-20 px-6 bg-black/80">
      <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">Kids ABC</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((c) => (
          <motion.div
            key={c.title}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-lg backdrop-blur-md bg-black/40"
          >
            <img src={c.image} alt={c.title} className="w-full h-40 object-cover rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-2xl font-bold text-orange-400 mb-1">{c.title}</h3>
              <p className="text-sm">{c.description}</p>
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-orange-400/30 blur-3xl pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
