import axios, { AxiosError } from 'axios';
import { Snippet } from '../types/snippet';
import { WordPressPage } from '../types/page';
import { PortfolioItem } from '../types/portfolio';
import { PaginatedResponse } from '../types/pagination';

const API_BASE_URL = 'https://hubbardlabs.com/wp-json/wp/v2';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

const formatErrorMessage = (error: AxiosError): string => {
  if (error.response) {
    return `Server error: ${error.response.status} - ${error.response.data?.message || error.response.statusText}`;
  } else if (error.request) {
    return 'Unable to reach the server. Please check your internet connection.';
  } else {
    return `Request failed: ${error.message}`;
  }
};

export const getSnippets = async (
  page = 1,
  perPage = 10,
  search?: string
): Promise<PaginatedResponse<Snippet>> => {
  try {
    const response = await api.get('/snippets', {
      params: {
        page,
        per_page: perPage,
        search,
        _embed: true,
        _fields: 'id,slug,title,excerpt,content,_embedded'
      },
    });

    const totalItems = parseInt(response.headers['x-wp-total'] || '0', 10);
    const totalPages = parseInt(response.headers['x-wp-totalpages'] || '1', 10);

    return {
      items: response.data,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems,
        perPage
      }
    };
  } catch (error) {
    throw new Error(formatErrorMessage(error as AxiosError));
  }
};

export const getSnippetBySlug = async (slug: string): Promise<Snippet> => {
  try {
    const response = await api.get('/snippets', {
      params: {
        slug,
        _embed: true,
        _fields: 'id,slug,title,content,_embedded'
      },
    });
    
    if (!response.data?.[0]) {
      throw new Error('Snippet not found');
    }
    
    return response.data[0];
  } catch (error) {
    throw new Error(formatErrorMessage(error as AxiosError));
  }
};

export const getPageBySlug = async (slug: string): Promise<WordPressPage> => {
  try {
    const response = await api.get('/pages', {
      params: {
        slug,
        _embed: true
      },
    });
    
    if (!response.data?.[0]) {
      throw new Error('Page not found');
    }
    
    return response.data[0];
  } catch (error) {
    throw new Error(formatErrorMessage(error as AxiosError));
  }
};

export const getPortfolioItems = async (
  page = 1,
  perPage = 9
): Promise<PaginatedResponse<PortfolioItem>> => {
  try {
    const response = await api.get('/jetpack-portfolio', {
      params: {
        page,
        per_page: perPage,
        _embed: true,
        _fields: 'id,slug,title,excerpt,content,featured_media,_embedded'
      },
    });

    const totalItems = parseInt(response.headers['x-wp-total'] || '0', 10);
    const totalPages = parseInt(response.headers['x-wp-totalpages'] || '1', 10);

    return {
      items: response.data,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems,
        perPage
      }
    };
  } catch (error) {
    throw new Error(formatErrorMessage(error as AxiosError));
  }
};

export const getPortfolioItemBySlug = async (slug: string): Promise<PortfolioItem> => {
  try {
    const response = await api.get('/jetpack-portfolio', {
      params: {
        slug,
        _embed: true,
        _fields: 'id,slug,title,content,featured_media,_embedded'
      },
    });
    
    if (!response.data?.[0]) {
      throw new Error('Portfolio item not found');
    }
    
    return response.data[0];
  } catch (error) {
    throw new Error(formatErrorMessage(error as AxiosError));
  }
};