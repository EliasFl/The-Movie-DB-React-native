import axios, { AxiosInstance } from "axios"

const instance: AxiosInstance = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: 'ecf4d6adb6ea46f8141cb72c100e5277'
  }
})

export default instance