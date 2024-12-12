import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SnippetList from '../components/SnippetList';
import SearchBar from '../components/SearchBar';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { getSnippets } from '../services/api';
import { Snippet } from '../types/snippet';
import { PaginationInfo } from '../types/pagination';

const SnippetsPage: React.FC = () => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    perPage: 10
  });

  const fetchSnippets = async (page: number, search?: string) => {
    try {
      const isSearching = !!search;
      isSearching ? setSearchLoading(true) : setLoading(true);
      
      const response = await getSnippets(page, pagination.perPage, search);
      setSnippets(response.items);
      setPagination(response.pagination);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load snippets. Please try again later.');
    } finally {
      setLoading(false);
      setSearchLoading(false);
    }
  };

  useEffect(() => {
    fetchSnippets(1);
  }, []);

  const handleSearch = (query: string) => {
    setSearchTerm(query);
    fetchSnippets(1, query);
  };

  const handlePageChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchSnippets(page, searchTerm);
  };

  if (loading && pagination.currentPage === 1) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} retryAction={() => fetchSnippets(pagination.currentPage, searchTerm)} />;

  return (
    <div className="min-h-screen bg-dark pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-montserrat font-bold text-secondary mb-4">
            Code Snippets
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            A collection of useful WordPress code snippets and examples to enhance your development workflow.
          </p>

          <SearchBar onSearch={handleSearch} isLoading={searchLoading} />

          {loading ? (
            <LoadingSpinner />
          ) : (
            <SnippetList
              snippets={snippets}
              pagination={pagination}
              onPageChange={handlePageChange}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SnippetsPage;