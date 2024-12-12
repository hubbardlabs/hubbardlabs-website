import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, ExternalLink } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';
import { getScreenshots } from '../services/cloudapp';
import { CloudAppItem } from '../types/cloudapp';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import Pagination from '../components/Pagination';
import { PaginationInfo } from '../types/pagination';

const ScreenshotsPage: React.FC = () => {
  const [screenshots, setScreenshots] = useState<CloudAppItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    perPage: 20
  });

  const fetchScreenshots = async (page: number) => {
    try {
      setLoading(true);
      const response = await getScreenshots(page);
      setScreenshots(response.items);
      setPagination({
        currentPage: response.current_page,
        totalPages: response.total_pages,
        totalItems: response.total_count,
        perPage: response.per_page
      });
    } catch (err) {
      setError('Failed to load screenshots. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScreenshots(1);
  }, []);

  const handlePageChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchScreenshots(page);
  };

  if (loading && pagination.currentPage === 1) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} retryAction={() => fetchScreenshots(pagination.currentPage)} />;

  return (
    <div className="min-h-screen bg-dark">
      <ServiceHero
        title="Screenshots"
        description="Visual documentation of our WordPress solutions and integrations"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screenshots.map((screenshot) => (
              <motion.div
                key={screenshot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-dark-card rounded-lg border border-dark-lighter overflow-hidden group"
              >
                <div className="relative aspect-video">
                  <img
                    src={screenshot.thumbnail_url}
                    alt={screenshot.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-dark-lighter/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={screenshot.share_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="absolute top-4 right-4 p-2 bg-dark-card/80 backdrop-blur-sm rounded-lg">
                    <Camera className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-secondary mb-2 truncate">
                    {screenshot.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {new Date(screenshot.created_at).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
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

export default ScreenshotsPage;