import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  id,
  title,
  excerpt,
  imageUrl
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link to={`/portfolio/${id}`}>
        <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <ExternalLink className="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
        <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: excerpt }} />
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;