// 全局公用的数据
const state = {
  shopId: 0,
  userId: 0,
}
// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  setShopId(state, shopId) {
    state.shopId = shopId
  },
  setUserId(state, userId) {
    state.userId = userId
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
