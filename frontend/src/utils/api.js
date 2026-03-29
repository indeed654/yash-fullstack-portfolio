import axios from 'axios'

const API_BASE_URL = process.env.VITE_API_URL || '/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any auth tokens here if needed
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // Server error
      return Promise.reject(error.response.data)
    } else if (error.request) {
      // Network error
      return Promise.reject({
        success: false,
        message: 'Network error. Please check your connection.'
      })
    } else {
      return Promise.reject({
        success: false,
        message: 'An error occurred. Please try again.'
      })
    }
  }
)

// Contact API
export const submitContact = async (data) => {
  return api.post('/contact', data)
}

export default api
