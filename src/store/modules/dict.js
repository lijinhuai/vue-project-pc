import store from '@/store/index'
import {
  fetchDbDictList,
  fetchRoadDictList
} from '@/api/dict'

const app = {
  state: {},
  mutations: {
    fetchDictList (state) {
      var currentDictVersion = store.getters.token
      var dictVersion = JSON.parse(localStorage.getItem('dictVersion'))
      if (dictVersion !== currentDictVersion || !localStorage.getItem('rybqDictList')) {
        fetchDbDictList('RYBQ').then(response => {
          localStorage.setItem('rybqDictList', JSON.stringify(response))
          localStorage.setItem('dictVersion', JSON.stringify(currentDictVersion))
        })
      }
      if (dictVersion !== currentDictVersion || !localStorage.getItem('roadDictList')) {
        fetchRoadDictList().then(response => {
          localStorage.setItem('roadDictList', JSON.stringify(response))
          localStorage.setItem('dictVersion', JSON.stringify(currentDictVersion))
        })
      }
    }
  }
}

export default app
