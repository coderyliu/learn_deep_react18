import axios from 'axios'
import {
  TIME_OUT,
  BASE_URL
} from './config'

class LyFetch {
  constructor(baseUrl, timeout) {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout
    })

    this.instance.interceptors.request.use(config => {
      return config
    }, err => {
      return err
    })

    this.instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({
      ...config,
      method: 'get'
    })
  }

  post(config) {
    return this.request({
      ...config,
      method: 'post'
    })
  }
}

export default new LyFetch(BASE_URL, TIME_OUT)