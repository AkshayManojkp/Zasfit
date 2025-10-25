'use client'

export function Nutrition() {
  return (
    <section id="nutrition" className="py-20 px-6 bg-black/80">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg backdrop-blur-md bg-black/40">
          <img
            src="https://images.unsplash.com/photo-1561043433-aaf687c4cf4e?auto=format&fit=crop&w=600&q=80"
            alt="Nutrition"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-4xl font-bold text-orange-400 mb-2">Nutrition</h2>
            <p className="text-sm">Balanced nutrition plans designed to fuel your body and mind.</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <ul className="list-disc pl-5 text-white">
            <li>Healthy meal plans</li>
            <li>Personalized diet guidance</li>
            <li>Simple recipes and tips</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
