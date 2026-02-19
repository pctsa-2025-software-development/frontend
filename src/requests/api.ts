import axios from 'axios'
import type { AxiosInstance } from 'axios';

/**
 * Centralized Axios instance for HTTP requests across the app.
 * Automatically handles base URL configuration and timeout settings.
 */

const baseURL: string = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

const api: AxiosInstance = axios.create({
  baseURL,
  timeout: 5000, // Abort requests that exceed 5 seconds to avoid hanging UI
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default api;
