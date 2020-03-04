import axios from "axios"
import api from "../Utility/apiConfig"

export const axiosInstance = axios.create({
  baseURL: api.development.baseURL + api.development.restApiRoot
})

axiosInstance.interceptors.request.use(
  function(config) {
    config.headers["Content-Type"] = "application/json"
    return config
  },
  function(err) {
    return Promise.reject(err)
  }
)
