import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dark-card rounded-lg border border-dark-lighter hover:border-primary/30 transition-all p-6"
    >
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <Link
            to={link}
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            Learn More <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;