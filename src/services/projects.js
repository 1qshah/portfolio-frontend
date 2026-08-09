import axios from 'axios'
const baseUrl = '/api/projects'

const getAll = () => {
  return axios.get(baseUrl)
}

export default { 
  getAll: getAll
}