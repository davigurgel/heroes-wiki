import axios from 'axios'

const { REACT_APP_BASE_URL, REACT_APP_ACCESS_TOKEN } = process.env

const api = axios.create({
  baseURL: `${REACT_APP_BASE_URL}/${REACT_APP_ACCESS_TOKEN}`,
})

export default api
