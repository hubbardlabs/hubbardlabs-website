import axios from 'axios';
import { CloudAppResponse } from '../types/cloudapp';

const CLOUDAPP_API = 'https://api.getcloudapp.com/v2';
const API_KEY = '8938e2f7-e951-4d22-a4d9-54b11dc934ab';

const cloudApi = axios.create({
  baseURL: CLOUDAPP_API,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export const getScreenshots = async (page = 1, perPage = 20): Promise<CloudAppResponse> => {
  try {
    const response = await cloudApi.get('/items', {
      params: {
        page,
        per_page: perPage,
        type: 'image'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch screenshots');
  }
};