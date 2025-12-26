import React from 'react';
import { Mail, Phone, Instagram, MessageSquare, Linkedin, MapPin } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@battlezonearena.com',
      href: 'mailto:hello@battlezonearena.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      href: '#',
      color: 'hover:text-pink-500',
    },
    {
      icon: MessageSquare,
      name: 'Discord',
      href: '#',
      color: 'hover:text-indigo-500',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-500',
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions or want to collaborate on esports events? Reach out to us anytime!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="group flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                  <method.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-400 mb-1">{method.label}</h3>
                  <p className="text-lg text-white group-hover:text-cyan-400 transition-colors">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links & Location */}
          <div className="space-y-6">
            {/* Social Media */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
              <h3 className="text-xl font-black text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`group flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800 border border-gray-600 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-400 mb-1">Location</h3>
                  <p className="text-white">
                    Bangalore, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2026 Battlezone Arena. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Empowering the next generation of esports champions
          </p>
        </div>
      </div>
    </section>
  );
}
