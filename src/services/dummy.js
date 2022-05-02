import axios from 'axios'

const BASE_URL = 'https://api.dummy.net/api/'

export const getDummy = () => {
  return axios.get(BASE_URL)
}
