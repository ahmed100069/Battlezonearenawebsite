import React from 'react';
import { Trophy, Users, Award, Target } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Trophy,
      title: 'Competitive Gaming',
      description: 'Host and participate in high-stakes esports tournaments',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Built for students and competitive players',
    },
    {
      icon: Award,
      title: 'Rankings & Rewards',
      description: 'Track your progress and earn recognition',
    },
    {
      icon: Target,
      title: 'Esports Events',
      description: 'Professional tournament organization',
    },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 bg-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About the Platform
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Battlezone Arena is a competitive gaming tournament platform designed for esports enthusiasts. 
            We provide a comprehensive ecosystem for organizing tournaments, tracking rankings, and 
            distributing rewards, specifically targeted at students and competitive players who want 
            to take their gaming to the next level.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
