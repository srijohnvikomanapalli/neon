import React from 'react';
import SnakeGame from './components/SnakeGame';
import MusicPlayer from './components/MusicPlayer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-pink/10 rounded-full blur-[120px] pointer-events-none" />
      
      <header className="mb-8 text-center z-10">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-white mb-2"
        >
          NEON<span className="text-neon-blue neon-text-blue">SNAKE</span>
        </motion.h1>
        <motion.p 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40 font-mono"
        >
          High Fidelity Arcade Experience
        </motion.p>
      </header>

      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        {/* Left Sidebar - Info/Stats (Hidden on mobile, shown on large) */}
        <div className="hidden lg:flex lg:col-span-3 flex-col gap-6">
          <div className="p-6 border border-white/5 bg-white/5 rounded-2xl backdrop-blur-sm">
            <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-4">System Status</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-white/60">Audio Engine</span>
                <span className="text-[10px] px-2 py-0.5 bg-neon-green/20 text-neon-green rounded border border-neon-green/30">ONLINE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-white/60">Game Core</span>
                <span className="text-[10px] px-2 py-0.5 bg-neon-blue/20 text-neon-blue rounded border border-neon-blue/30">ACTIVE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-white/60">Latency</span>
                <span className="text-[10px] text-white/40 font-mono">1.2ms</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 border border-white/5 bg-white/5 rounded-2xl backdrop-blur-sm">
            <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-4">Instructions</h4>
            <ul className="space-y-2 text-[11px] text-white/60 leading-relaxed">
              <li>• Use <span className="text-neon-blue">Arrows</span> to navigate the grid.</li>
              <li>• Collect <span className="text-neon-pink">Pink Orbs</span> to grow and score.</li>
              <li>• Avoid colliding with your own tail.</li>
              <li>• Press <span className="text-white">Space</span> to pause the action.</li>
            </ul>
          </div>
        </div>

        {/* Center - Snake Game */}
        <div className="lg:col-span-6 flex justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <SnakeGame />
          </motion.div>
        </div>

        {/* Right Sidebar - Music Player */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-end gap-6">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full"
          >
            <MusicPlayer />
          </motion.div>
          
          <div className="hidden lg:block w-full p-6 border border-white/5 bg-white/5 rounded-2xl backdrop-blur-sm">
            <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-4">Now Playing Artist</h4>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center border border-neon-purple/30">
                <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
              </div>
              <div>
                <p className="text-xs text-white font-bold">AI GENERATED BEATS</p>
                <p className="text-[10px] text-white/40">Verified Creator</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 text-center z-10">
        <p className="text-[9px] uppercase tracking-[0.5em] text-white/20">
          &copy; 2026 NEON ARCADE • BUILT WITH GOOGLE AI STUDIO
        </p>
      </footer>
    </div>
  );
}
