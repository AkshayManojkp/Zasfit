'use client'

import { motion } from 'framer-motion'

export function ProgramCards() {
  const programs = [
    {
      title: 'Young Warriors',
      description: 'Fitness programs for ages 6-17, focusing on confidence and healthy habits.',
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Prime Movers',
      description: 'High-intensity workouts for ages 18-49, designed for busy professionals.',
      image: '/images/prime-movers.jpg',
    },
    {
      title: 'Golden Champions',
      description: 'Wellness programs for ages 50+, emphasizing mobility and active aging.',
      image: '/images/golden-champions.jpg',
    },
  ]

  return (
    <section id="programs" className="py-20 bg-black/80">
      <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">Our Programs</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {programs.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-lg backdrop-blur-md bg-black/40"
          >
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-2xl font-bold text-orange-400 mb-1">{p.title}</h3>
              <p className="text-sm">{p.description}</p>
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-orange-400/30 blur-3xl pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
