import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { getPortfolioItemBySlug } from '../services/api';
import { PortfolioItem } from '../types/portfolio';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const PortfolioDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState<PortfolioItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const data = await getPortfolioItemBySlug(id);
        setPortfolio(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load portfolio item');
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!portfolio) return <ErrorMessage message="Portfolio item not found" />;

  const featuredImage = portfolio._embedded?.['wp:featuredmedia']?.[0];

  return (
    <div className="min-h-screen bg-dark pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <button
            onClick={() => navigate('/portfolio')}
            className="flex items-center text-primary hover:text-primary-dark mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </button>

          <div className="bg-dark-card rounded-lg border border-dark-lighter overflow-hidden mb-8">
            {featuredImage && (
              <img
                src={featuredImage.source_url}
                alt={featuredImage.alt_text}
                className="w-full h-auto"
              />
            )}
            
            <div className="p-8">
              <h1 className="text-3xl font-montserrat font-bold text-secondary mb-4">
                {portfolio.title.rendered}
              </h1>

              <div 
                className="prose prose-lg max-w-none text-gray-400"
                dangerouslySetInnerHTML={{ __html: portfolio.content.rendered }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;