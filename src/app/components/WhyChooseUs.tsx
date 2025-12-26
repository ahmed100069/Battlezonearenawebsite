import React from 'react';
import { Shield, Radio, Lock, GraduationCap } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Fair Play & Rules',
      description: 'Strict anti-cheat measures and transparent rules ensure every match is fair and competitive.',
    },
    {
      icon: Radio,
      title: 'Live Match Updates',
      description: 'Real-time scores, brackets, and match updates keep you informed throughout the tournament.',
    },
    {
      icon: Lock,
      title: 'Secure Registration',
      description: 'Your data is protected with industry-standard security protocols and encryption.',
    },
    {
      icon: GraduationCap,
      title: 'College-Level Esports Support',
      description: 'Specialized tournaments and resources designed specifically for student gamers.',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience the best in competitive gaming with our professional platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-cyan-400" />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
