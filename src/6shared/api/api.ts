import { USER_LOCALSTORAGE_KEY } from '6shared/const/localstorage'
import axios from 'axios'

export const $api = axios.create({
  baseURL: __API__
  // headers: {
  //   authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? ''
  // }
})

$api.interceptors.request.use((config) => {
  if (config.headers !== undefined) {
    config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? ''
  }
  return config
})
