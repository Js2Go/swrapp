import axios from 'axios'
import { genUUID } from './uuid'
import { getToken } from './token'

const baseURL = 'http://192.168.20.48:8090/api'

const instance = axios.create({
  baseURL,
  timeout: 20 * 1000
})

const uuid = genUUID()

instance.interceptors.request.use(config => {
  config.headers['Authorization'] = getToken()
  config.headers['X-Request-Id'] = uuid

  return config
})

instance.interceptors.response.use(
  res => {
    // console.log(res)
    return res.data
  },
  err => {
    console.warn(err)
  }
)

export const get = async (url = '', params = {}, headers = {}, config = {}) => {
  return await instance({
    url,
    method: 'GET',
    params,
    headers,
    ...config
  })
}

export const post = async (url = '', data = {}, headers = {}, config = {}) => {
  return await instance({
    url,
    method: 'POST',
    data,
    headers,
    ...config
  })
}
