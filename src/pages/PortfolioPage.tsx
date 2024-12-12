import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getPortfolioItems } from '../services/api';
import { PortfolioItem } from '../types/portfolio';
import { PaginationInfo } from '../types/pagination';
import PortfolioCard from '../components/PortfolioCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import Pagination from '../components/Pagination';
import ServiceHero from '../components/ServiceHero';

const PortfolioPage: React.FC = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    perPage: 9
  });

  const fetchPortfolio = async (page: number) => {
    try {
      setLoading(true);
      const response = await getPortfolioItems(page);
      setPortfolioItems(response.items);
      setPagination(response.pagination);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load portfolio items');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio(1);
  }, []);

  const handlePageChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchPortfolio(page);
  };

  if (loading && pagination.currentPage === 1) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} retryAction={() => fetchPortfolio(pagination.currentPage)} />;

  return (
    <div className="min-h-screen bg-dark">
      <ServiceHero
        title="Our Portfolio"
        description="Explore our latest WordPress projects and custom solutions"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <PortfolioCard
                key={item.id}
                id={item.slug}
                title={item.title.rendered}
                excerpt={item.excerpt.rendered}
                imageUrl={item._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''}
                technologies={item.acf?.technologies}
              />
            ))}
          </div>

          <div className="mt-12">
            <Pagination
              pagination={pagination}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;