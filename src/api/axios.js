import axios from 'axios'

const baseURL = 'http://localhost:8000/api'
const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use((config) => {
  // Adicione tokens de autenticação, por exemplo
  // config.headers.Authorization = `Bearer ${token}`;
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)

export default apiClient
