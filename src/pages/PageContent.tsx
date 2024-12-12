import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPageBySlug } from '../services/api';
import { WordPressPage } from '../types/page';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const PageContent: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [page, setPage] = useState<WordPressPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const data = await getPageBySlug(slug);
        setPage(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load page');
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!page) return <ErrorMessage message="Page not found" />;

  const featuredImage = page._embedded?.['wp:featuredmedia']?.[0];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-montserrat font-bold text-secondary mb-6">
            {page.title.rendered}
          </h1>

          {featuredImage && (
            <div className="mb-8">
              <img
                src={featuredImage.source_url}
                alt={featuredImage.alt_text}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PageContent;