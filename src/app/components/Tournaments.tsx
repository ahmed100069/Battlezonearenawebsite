import React from 'react';
import { Calendar, DollarSign, Users, Trophy, TrendingUp } from 'lucide-react';

export function Tournaments() {
  const tournaments = [
    {
      name: 'Valorant Champions Cup',
      game: 'Valorant',
      date: 'Jan 15, 2026',
      time: '6:00 PM IST',
      entryFee: 'Free',
      prizePool: '₹50,000',
      status: 'Live',
      slots: '32/64',
    },
    {
      name: 'BGMI Squad Showdown',
      game: 'BGMI',
      date: 'Jan 20, 2026',
      time: '5:00 PM IST',
      entryFee: '₹100',
      prizePool: '₹1,00,000',
      status: 'Upcoming',
      slots: '18/48',
    },
    {
      name: 'CS:GO Winter Strike',
      game: 'CS:GO',
      date: 'Jan 12, 2026',
      time: '7:00 PM IST',
      entryFee: 'Free',
      prizePool: '₹75,000',
      status: 'Live',
      slots: '40/64',
    },
    {
      name: 'Call of Duty Warzone Battle',
      game: 'Call of Duty',
      date: 'Jan 25, 2026',
      time: '8:00 PM IST',
      entryFee: '₹150',
      prizePool: '₹1,50,000',
      status: 'Upcoming',
      slots: '12/32',
    },
    {
      name: 'FIFA Ultimate Championship',
      game: 'FIFA',
      date: 'Jan 18, 2026',
      time: '4:00 PM IST',
      entryFee: 'Free',
      prizePool: '₹40,000',
      status: 'Upcoming',
      slots: '24/64',
    },
    {
      name: 'Free Fire Elite League',
      game: 'Free Fire',
      date: 'Jan 22, 2026',
      time: '6:30 PM IST',
      entryFee: '₹50',
      prizePool: '₹80,000',
      status: 'Upcoming',
      slots: '30/48',
    },
  ];

  const scrollToRegister = () => {
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tournaments" className="relative py-20 lg:py-32 bg-gray-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Live & Upcoming Tournaments
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join the competition and prove your skills against the best players
          </p>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tournaments.map((tournament, index) => (
            <div
              key={index}
              className="group relative rounded-xl p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                {tournament.status === 'Live' ? (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/50 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-red-400">Live</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/50 backdrop-blur-sm">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-cyan-400">Upcoming</span>
                  </div>
                )}
              </div>

              {/* Tournament Name */}
              <div className="mb-4 pr-24">
                <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {tournament.name}
                </h3>
                <p className="text-purple-400">{tournament.game}</p>
              </div>

              {/* Tournament Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">{tournament.date} • {tournament.time}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <DollarSign className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">
                    Entry: <span className={tournament.entryFee === 'Free' ? 'text-green-400' : 'text-yellow-400'}>{tournament.entryFee}</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Trophy className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">
                    Prize Pool: <span className="text-purple-400 font-semibold">{tournament.prizePool}</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">Slots: {tournament.slots}</span>
                </div>
              </div>

              {/* Register Button */}
              <button
                onClick={scrollToRegister}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="font-semibold">Register Now</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
