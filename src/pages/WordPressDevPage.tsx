import React from 'react';
import { motion } from 'framer-motion';
import { Check, Code2, Layout, Database, Lock } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';

const WordPressDevPage: React.FC = () => {
  const features = [
    {
      title: "Custom Theme Development",
      description: "Unique, responsive themes tailored to your brand",
      icon: <Layout className="w-6 h-6 text-primary" />
    },
    {
      title: "Plugin Development",
      description: "Custom plugins to extend WordPress functionality",
      icon: <Code2 className="w-6 h-6 text-primary" />
    },
    {
      title: "API Integration",
      description: "Seamless integration with third-party services",
      icon: <Database className="w-6 h-6 text-primary" />
    },
    {
      title: "Security Implementation",
      description: "Enterprise-grade security measures",
      icon: <Lock className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-dark">
      <ServiceHero
        title="WordPress Development"
        description="Custom WordPress solutions tailored to your business needs"
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-card rounded-lg border border-dark-lighter p-6"
              >
                <div className="p-2 bg-primary/10 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
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
              Our Development Process
            </h2>
            <div className="space-y-4">
              {[
                "Requirements gathering and analysis",
                "Custom design and wireframing",
                "Development and testing",
                "Quality assurance and optimization",
                "Deployment and maintenance"
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-gray-400">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
              Start Your Project Today
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Let's discuss your WordPress development needs and create a solution that perfectly fits your requirements.
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

export default WordPressDevPage;