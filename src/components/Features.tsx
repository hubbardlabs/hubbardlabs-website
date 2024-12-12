import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Gauge, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Security First",
      description: "Enterprise-grade security measures to protect your WordPress site"
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Global Reach",
      description: "Multi-language support and global content delivery networks"
    },
    {
      icon: <Gauge className="w-12 h-12 text-primary" />,
      title: "Speed Optimized",
      description: "Blazing fast load times and optimal performance"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "User Friendly",
      description: "Intuitive interfaces and seamless user experiences"
    }
  ];

  return (
    <section className="py-20 bg-dark-light" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-secondary mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We deliver WordPress solutions that combine cutting-edge technology with exceptional user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-card p-6 rounded-lg border border-dark-lighter hover:border-primary/30 transition-all"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;