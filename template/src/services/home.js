import axios from 'axios'

export default {
  getList(pageNo, pageSize) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?pageNo=${pageNo}&pageSize=${pageSize}`)
  },
}
