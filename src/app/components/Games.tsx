import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';

export function Games() {
  const games = [
    {
      name: 'Valorant',
      image: 'https://images.unsplash.com/photo-1623820919239-0d0ff10797a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWxvcmFudCUyMGdhbWV8ZW58MXx8fHwxNzY2NzI5NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
    {
      name: 'BGMI',
      image: 'https://images.unsplash.com/photo-1611138290962-2c550ffd4002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyfGVufDF8fHx8MTc2NjY2OTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
    {
      name: 'CS:GO',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdG91cm5hbWVudHxlbnwxfHx8fDE3NjY2MzkxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
    {
      name: 'Call of Duty',
      image: 'https://images.unsplash.com/photo-1616160232762-91cd5b3c6170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxsJTIwb2YlMjBkdXR5JTIwZ2FtaW5nfGVufDF8fHx8MTc2NjcyOTQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
    {
      name: 'FIFA',
      image: 'https://images.unsplash.com/photo-1520298064646-747b5051dbb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWZhJTIwc29jY2VyJTIwZ2FtZXxlbnwxfHx8fDE3NjY2ODAxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
    {
      name: 'Free Fire',
      image: 'https://images.unsplash.com/photo-1611138290962-2c550ffd4002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyfGVufDF8fHx8MTc2NjY2OTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
  ];

  return (
    <section id="games" className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Supported Games
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Compete in your favorite games with tournaments running daily
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2"
            >
              {/* Game Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                {/* Availability Badge */}
                {game.available && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/50 backdrop-blur-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400">Available</span>
                  </div>
                )}
              </div>

              {/* Game Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
                  {game.name}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
