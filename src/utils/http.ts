import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_BASE_URL

export const HTTP = axios.create({
  baseURL: `${apiUrl}/api/`,
  headers: { 'Content-Type': 'application/json' },
})

export default HTTP
