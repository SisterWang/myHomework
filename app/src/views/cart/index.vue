<template>
  <div class="page-cart">
    <div class="title">
      <span>购物车商品数量 {{totalAllAmount}}</span>
      <span>选中商品总数 {{totalAmount}}</span>
      <span>总价 {{totalPrice}}</span>
    </div>
    <div class="list">
      <cart-item
        v-for="(product, index) in cartProducts"
        :key="index"
        :product="product"
        @amount-change="handleAmountChange(product, arguments)"
        @check="handleResetProducts"
      />
    </div>
    <add-product @add="handleAddProduct" />
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import cartItem from './components/cartItem'
  import addProduct from './components/addProduct'

  const generateProduct = (code, isChecked) => ({
    code,
    amount: 1,
    price: 100,
    isChecked
  })
  export default {
    name: 'cart',
    components: {
      cartItem,
      addProduct,
    },
    computed: {
      ...mapState({
        cartProducts: state => state.cart.cartProducts,
      }),
      ...mapGetters({
        totalPrice: 'cartTotalPrice',
        totalAmount: 'cartTotalAmount',
        totalAllAmount: 'cartTotalAllAmount'
      }),
    },
    methods: {
      ...mapActions([
        'cartAddProduct',
        'cartChangeCount',
        'cartDelProduct',
        'cartChangeChecked'
      ]),
      handleAmountChange(product, agrs) {
        const amount = agrs[0]
        this.cartChangeCount({
          code: product.code,
          amount,
        })
      },
      handleAddProduct: function(code) {
        this.cartAddProduct(generateProduct(code, true))
      },
      handleResetProducts(code, isChecked) {
        console.log("选中状态变更为：" + isChecked)
        this.cartChangeChecked(generateProduct(code, isChecked))
        // if(isChecked === false){
        //   this.cartDelProduct(generateProduct(code))
        // } else {

        // }
      }
    },
  }
</script>

<style src="./cart.css"></style>
