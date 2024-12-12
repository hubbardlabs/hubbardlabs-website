import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';

const IDXBrokerPage: React.FC = () => {
  const features = [
    "Custom IDX Broker WordPress integration",
    "Responsive MLS property search",
    "Advanced map search functionality",
    "Custom property listing templates",
    "Lead capture and management",
    "Automated listing updates",
    "Mobile-optimized experience",
    "SEO-friendly implementation"
  ];

  return (
    <div className="min-h-screen bg-dark">
      <ServiceHero
        title="IDX Broker Integration"
        description="Seamlessly integrate IDX Broker with your WordPress website for a powerful real estate search experience"
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-dark-card rounded-lg border border-dark-lighter p-8 mb-12"
          >
            <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
              Why Choose Our IDX Broker Integration?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              We specialize in creating seamless, powerful IDX Broker integrations that help real estate professionals showcase their listings and generate more leads.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-gray-400">{feature}</span>
                </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Contact us today to discuss your IDX Broker integration needs and how we can help you create a powerful real estate website.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IDXBrokerPage;