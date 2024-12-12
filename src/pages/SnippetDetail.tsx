import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FileCode, Copy, Check, ArrowLeft, Tag, Folder } from 'lucide-react';
import { getSnippetBySlug } from '../services/api';
import { Snippet, Term } from '../types/snippet';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const SnippetDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [snippet, setSnippet] = useState<Snippet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const fetchSnippet = async () => {
      if (!id) return;
      
      try {
        const data = await getSnippetBySlug(id);
        setSnippet(data);
      } catch (err) {
        setError('Failed to load snippet. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSnippet();
  }, [id]);

  const getTerms = (taxonomyType: string): Term[] => {
    if (!snippet?._embedded?.['wp:term']) return [];
    
    return snippet._embedded['wp:term']
      .flat()
      .filter(term => term && term.taxonomy === taxonomyType);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!snippet) return <ErrorMessage message="Snippet not found" />;

  const handleCopy = () => {
    if (snippet.acf?.code_snippet) {
      navigator.clipboard.writeText(snippet.acf.code_snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const categories = getTerms('hlabs-code-category');
  const tags = getTerms('hlabs-code-tag');
  const language = snippet.acf?.language?.toLowerCase() || 'php';
  const codeSnippet = snippet.acf?.code_snippet || '';

  return (
    <div className="min-h-screen bg-dark pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <button
            onClick={() => navigate('/code')}
            className="flex items-center text-primary hover:text-primary-dark mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Snippets
          </button>

          <div className="bg-dark-card rounded-lg border border-dark-lighter p-6 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileCode className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-montserrat font-bold text-secondary">
                  {snippet.title.rendered}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <span className="text-gray-400">
                    Language: {snippet.acf?.language || 'PHP'}
                  </span>

                  {categories.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Folder className="w-4 h-4 text-gray-500" />
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <span key={category.id} className="text-gray-400">
                            {category.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {tags.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-gray-500" />
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span key={tag.id} className="text-gray-400">
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div 
              className="prose prose-lg max-w-none mb-8 text-gray-400"
              dangerouslySetInnerHTML={{ __html: snippet.content.rendered }}
            />

            {codeSnippet && (
              <div className="relative">
                <button
                  onClick={handleCopy}
                  className="absolute right-4 top-4 p-2 hover:bg-dark-lighter rounded-lg transition-colors"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <SyntaxHighlighter
                  language={language}
                  style={tomorrow}
                  className="rounded-lg !bg-dark-lighter"
                  showLineNumbers
                >
                  {codeSnippet}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SnippetDetail;