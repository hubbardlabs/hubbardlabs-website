import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileCode, Tag, Folder } from 'lucide-react';
import { Term } from '../types/snippet';

interface SnippetCardProps {
  id: string;
  title: string;
  description: string;
  language?: string;
  categories?: Term[];
  tags?: Term[];
}

const SnippetCard: React.FC<SnippetCardProps> = ({ 
  id, 
  title, 
  description, 
  language = 'PHP',
  categories = [],
  tags = []
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dark-card rounded-lg border border-dark-lighter hover:border-primary/30 transition-colors"
    >
      <Link to={`/code/${id}`} className="block p-6">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <FileCode className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-secondary mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-dark-lighter rounded-full text-sm text-gray-400">
                {language}
              </span>
              
              {categories.length > 0 && (
                <div className="flex items-center gap-1">
                  <Folder className="w-4 h-4 text-gray-500" />
                  {categories.map((category, index) => (
                    <span key={category.id} className="text-sm text-gray-400">
                      {category.name}{index < categories.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              )}
              
              {tags.length > 0 && (
                <div className="flex items-center gap-1">
                  <Tag className="w-4 h-4 text-gray-500" />
                  {tags.map((tag, index) => (
                    <span key={tag.id} className="text-sm text-gray-400">
                      {tag.name}{index < tags.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SnippetCard;