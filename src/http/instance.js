import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5001/clone2-246a7/us-central1/api' // endpoint from backend api you made
})

export default axiosInstance