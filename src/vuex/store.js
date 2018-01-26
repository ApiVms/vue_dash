import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    currNumber: '',
    localNumber: '',
    isSelect: false,
    currCategory: null
  },
  actions: {
    setCurrNumber ({commit}, value) {
      commit('SET_NUMBER_COMMIT', value)
    },
    setLocalNumber ({commit}, value) {
      commit('SET_LOCAL_COMMIT', value)
    },
    setCurrCategory ({commit}, value) {
      commit('SET_CATEGORY_COMMIT', value)
    },
    setIsSelected ({commit}) {
      commit('SET_SELECT_COMMIT')
    }
  },
  mutations: {
    SET_NUMBER_COMMIT (state, value) {
      state.currNumber = value
    },
    SET_LOCAL_COMMIT (state, value) {
      state.localNumber = value
    },
    SET_CATEGORY_COMMIT (state, value) {
      state.currCategory = value
      console.log('WTF?', state.currCategory)
    },
    SET_SELECT_COMMIT (state) {
      state.isSelect = !state.isSelect
    }
  },
  getters: {
    getCurrNumber (state) {
      return state.currNumber
    },
    getLocalNumber (state) {
      return state.localNumber
    },
    getCurrCategory (state) {
      return state.currCategory
    },
    getIsSelected (state) {
      return state.isSelect
    }
  }
})
