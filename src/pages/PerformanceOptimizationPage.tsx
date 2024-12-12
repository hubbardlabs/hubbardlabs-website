import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Zap, Server, BarChart } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';

const PerformanceOptimizationPage: React.FC = () => {
  const optimizations = [
    {
      title: "Speed Optimization",
      description: "Improve page load times and Core Web Vitals",
      icon: <Gauge className="w-6 h-6 text-primary" />
    },
    {
      title: "Caching Implementation",
      description: "Advanced caching strategies for faster delivery",
      icon: <Zap className="w-6 h-6 text-primary" />
    },
    {
      title: "Server Optimization",
      description: "Fine-tune server settings for optimal performance",
      icon: <Server className="w-6 h-6 text-primary" />
    },
    {
      title: "Performance Monitoring",
      description: "Continuous monitoring and optimization",
      icon: <BarChart className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-dark">
      <ServiceHero
        title="Performance Optimization"
        description="Boost your WordPress site's speed and performance"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {optimizations.map((optimization, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-card rounded-lg border border-dark-lighter p-6"
              >
                <div className="p-2 bg-primary/10 rounded-lg inline-block mb-4">
                  {optimization.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {optimization.title}
                </h3>
                <p className="text-gray-400">
                  {optimization.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-dark-card rounded-lg border border-dark-lighter p-8 mb-16"
          >
            <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
              Our Optimization Process
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-secondary">1. Performance Audit</h3>
                <p className="text-gray-400">Comprehensive analysis of your site's current performance metrics.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-secondary">2. Optimization Strategy</h3>
                <p className="text-gray-400">Development of a tailored optimization plan based on audit findings.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-secondary">3. Implementation</h3>
                <p className="text-gray-400">Execution of optimization techniques and best practices.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-secondary">4. Monitoring</h3>
                <p className="text-gray-400">Continuous performance monitoring and adjustments.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
              Ready to Boost Your Site's Performance?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Contact us today to learn how we can help optimize your WordPress site for peak performance.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizationPage;