import React from 'react';
import { Snippet, Term } from '../types/snippet';
import SnippetCard from './SnippetCard';
import Pagination from './Pagination';
import { PaginationInfo } from '../types/pagination';

interface SnippetListProps {
  snippets: Snippet[];
  pagination: PaginationInfo;
  onPageChange: (page: number) => void;
}

const SnippetList: React.FC<SnippetListProps> = ({
  snippets,
  pagination,
  onPageChange,
}) => {
  const getTerms = (snippet: Snippet, taxonomyType: string): Term[] => {
    if (!snippet._embedded?.['wp:term']) return [];
    
    return snippet._embedded['wp:term']
      .flat()
      .filter(term => term && term.taxonomy === taxonomyType);
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        {snippets.map((snippet) => (
          <SnippetCard
            key={snippet.id}
            id={snippet.slug}
            title={snippet.title.rendered}
            description={snippet.excerpt.rendered.replace(/<[^>]+>/g, '')}
            language={snippet.acf?.language}
            categories={getTerms(snippet, 'hlabs-code-category')}
            tags={getTerms(snippet, 'hlabs-code-tag')}
          />
        ))}
      </div>

      <Pagination
        pagination={pagination}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default SnippetList;