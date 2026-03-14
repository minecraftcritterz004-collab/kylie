import React from 'react';
import { Heart, Gem, Sparkles, Droplets, Flower2 } from 'lucide-react';

const AnimatedBackground = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <Heart className="absolute top-20 left-10 w-12 h-12 text-[#b0171e] animate-rotate-slow" />
        <Gem className="absolute top-40 left-20 w-8 h-8 text-[#b0171e] animate-float-spin" />
        <Sparkles className="absolute top-32 right-16 w-10 h-10 text-[#b0171e] animate-twinkle" />
        <Droplets className="absolute bottom-40 left-16 w-10 h-10 text-[#b0171e] animate-rotate-reverse" />
        <Flower2 className="absolute bottom-60 right-20 w-12 h-12 text-[#b0171e] animate-float-gentle" />
        <Heart className="absolute top-1/2 left-8 w-8 h-8 text-[#b0171e] animate-rotate-slow" />
        <Sparkles className="absolute top-1/3 right-12 w-8 h-8 text-[#b0171e] animate-float-spin" />
      </div>
    </>
  );
};

export default AnimatedBackground;
