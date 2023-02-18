import axios from 'axios'
import {
  BASEURL,
  LOG_BASEURL,
  SUB_BASEURL,
  TIMEOUT
} from './common'
class lyFetch {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(config => {
      const token = localStorage.getItem('token')

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

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

const fetch = new lyFetch(BASEURL, TIMEOUT)
export const logFetch = new lyFetch(LOG_BASEURL, TIMEOUT)
export const subFetch = new lyFetch(SUB_BASEURL, TIMEOUT)

export default fetch