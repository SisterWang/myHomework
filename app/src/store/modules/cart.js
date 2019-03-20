const state = {
  cartProducts: [],
}

export const getters = {
  //计算价格
  cartTotalPrice: state => state.cartProducts.reduce(
    (prev, item) => {
      if(item.isChecked === true) {
        return prev + item.price * item.amount
      } else {
        return prev
      }    
    }, 0),
  //计算选中总数
  cartTotalAmount: function cartTotalPrice(state) {
    return state.cartProducts.reduce(function (prev, item) {
      if(item.isChecked === true) {
        return prev + item.amount
      } else {
        return prev
      }
    }, 0);
  },
  cartTotalAllAmount: function cartTotalPrice(state) {
    return state.cartProducts.reduce(function (prev, item) {
      return prev + item.amount
    }, 0);
  }
}

export const actions = {
  cartAddProduct({ commit, state }, product){
    const code = product.code
    const index = state.cartProducts.findIndex(item => item.code === code)
    if (index >= 0) {
      commit('cart_product_count', { code, amount: state.cartProducts[index].amount + 1 })
    } else {
      commit('cart_product_add', product)
    }
  },
  cartChangeCount({commit}, payload){
    commit('cart_product_count',
      {
        code: payload.code,
        amount: payload.amount
      }
    )
  },
  cartDelProduct({ commit, state }, product){
    const code = product.code
    const index = state.cartProducts.findIndex(item => item.code === code)
    if(index >= 0) {
      state.cartProducts.splice(index, 1)
    }
  },

  //修改产品选中状态
  cartChangeChecked({ commit, state }, product){

    console.log("修改函数中的状态：" + product.isChecked)
    const index = state.cartProducts.findIndex(item => item.code === product.code)
    state.cartProducts[index].isChecked = product.isChecked

  }
}

export const mutations = {
  cart_product_count(state, { code, amount }) {
    const index = state.cartProducts.findIndex(product => product.code === code)
    if(index >= 0){
      state.cartProducts[index].amount = amount
    }
  },
  cart_product_add(state, product) {
    state.cartProducts.push(product)
  },
  // cart_item_is
}

export default {
  state,
  getters,
  actions,
  mutations,
}
