import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen pt-20 bg-dark">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-secondary mb-6">
            Crafting Digital Excellence with WordPress
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            We transform ideas into powerful WordPress solutions that drive results
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Our Work
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: <Code2 className="w-8 h-8 text-primary" />,
              title: "Custom Development",
              description: "Tailored WordPress solutions built to your exact specifications"
            },
            {
              icon: <Rocket className="w-8 h-8 text-primary" />,
              title: "Performance Optimization",
              description: "Lightning-fast websites that keep your visitors engaged"
            },
            {
              icon: <Zap className="w-8 h-8 text-primary" />,
              title: "Expert Support",
              description: "24/7 maintenance and support to keep your site running smoothly"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              className="bg-dark-card p-6 rounded-xl border border-dark-lighter hover:border-primary/30 transition-all"
            >
              <div className="mb-4 p-2 bg-primary/10 rounded-lg inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;