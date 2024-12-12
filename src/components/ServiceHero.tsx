import React from 'react';
import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  description: string;
  image?: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, description, image }) => {
  return (
    <div className="bg-dark-light py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              {description}
            </p>
            {image && (
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                src={image}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;