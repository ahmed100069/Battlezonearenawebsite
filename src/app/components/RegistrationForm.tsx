import React, { useState } from 'react';
import { UserCircle, Mail, Phone, Gamepad2, Trophy, Users, CheckCircle } from 'lucide-react';

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    gamerTag: '',
    email: '',
    mobile: '',
    game: '',
    tournament: '',
    teamName: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const games = [
    'Valorant',
    'BGMI',
    'CS:GO',
    'Call of Duty',
    'FIFA',
    'Free Fire',
  ];

  const tournaments = [
    'Valorant Champions Cup',
    'BGMI Squad Showdown',
    'CS:GO Winter Strike',
    'Call of Duty Warzone Battle',
    'FIFA Ultimate Championship',
    'Free Fire Elite League',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        gamerTag: '',
        email: '',
        mobile: '',
        game: '',
        tournament: '',
        teamName: '',
      });
    }, 5000);
  };

  return (
    <section id="register" className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tournament Registration
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Fill in your details to join the competition
          </p>
        </div>

        {/* Form Container */}
        <div className="relative rounded-2xl p-8 lg:p-10 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl shadow-cyan-500/10">
          {isSubmitted ? (
            /* Success Message */
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500/50 mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Registration Successful!</h3>
              <p className="text-lg text-gray-300 mb-2">
                Welcome to Battlezone Arena, {formData.gamerTag}!
              </p>
              <p className="text-gray-400">
                After registration, you will receive tournament details via email
              </p>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Gamer Tag */}
              <div>
                <label htmlFor="gamerTag" className="block text-sm font-semibold text-gray-300 mb-2">
                  Gamer Tag / In-Game Name *
                </label>
                <div className="relative">
                  <Gamepad2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="gamerTag"
                    name="gamerTag"
                    value={formData.gamerTag}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all"
                    placeholder="Enter your gamer tag"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-semibold text-gray-300 mb-2">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>

              {/* Select Game */}
              <div>
                <label htmlFor="game" className="block text-sm font-semibold text-gray-300 mb-2">
                  Select Game *
                </label>
                <div className="relative">
                  <Gamepad2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                  <select
                    id="game"
                    name="game"
                    value={formData.game}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-gray-800">Choose a game</option>
                    {games.map((game) => (
                      <option key={game} value={game} className="bg-gray-800">
                        {game}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Select Tournament */}
              <div>
                <label htmlFor="tournament" className="block text-sm font-semibold text-gray-300 mb-2">
                  Select Tournament *
                </label>
                <div className="relative">
                  <Trophy className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                  <select
                    id="tournament"
                    name="tournament"
                    value={formData.tournament}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-gray-800">Choose a tournament</option>
                    {tournaments.map((tournament) => (
                      <option key={tournament} value={tournament} className="bg-gray-800">
                        {tournament}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Team Name (Optional) */}
              <div>
                <label htmlFor="teamName" className="block text-sm font-semibold text-gray-300 mb-2">
                  Team Name <span className="text-gray-500">(Optional)</span>
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all"
                    placeholder="Enter your team name (if applicable)"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="text-lg font-semibold">Join Tournament</span>
              </button>

              {/* Info Message */}
              <p className="text-center text-sm text-gray-400 pt-2">
                After registration, you will receive tournament details via email
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
