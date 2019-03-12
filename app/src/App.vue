<template>
  <div id="app">
    <div class="page-cart">
      <div class="title">总价 0</div>
      <div class="list">
        <div v-for="product in cartProducts" class="product">
          <h3 class="code">商品编号: {{product.code}}</h3>
          <div class="actions">
            <button>-</button>
            <span>数量 {{product.amount}}</span>
            <button>+</button>
          </div>
        </div>
      </div>
      <div class="bottom-action">
        <button class="btn" @click="toggleCart">添加商品</button>
      </div>
      <div class="popup" v-show="shouldShowCart">
        <div class="backdrop" @click="toggleCart"></div>
        <form class="popup-content">
          <h3>添加商品</h3>
          <input type="text" autofocus placeholder="请输入商品编号">
          <button class="btn" type="submit">确定</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      shouldShowCart: false,
      cartProducts: [
        {
          code: 'KD100013',
          amount: 1
        }
      ],
    }
  },
  methods: {
    toggleCart: function() {
    },
  },
}
</script>

<style>
  .title {
    padding: 5px 10px;
    background-color: #000;
    text-align: right;
    color: #fff;
  }

  .list {
    margin: 10px 10px 50px;
  }

  .product {
    border-bottom: 1px dashed #000;
    margin-bottom: 5px;
    padding: 5px;
    line-height: 1.6;
    display: flex;
    font-size: 12px;
  }

  .product .code {
    flex: 1;
  }

  .product .actions button {
    background: #000;
    color: #fff;
    border: 0 none;
    padding: 3px 5px;
    vertical-align: middle;
  }

  .bottom-action {
    position: fixed;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .popup {}

  .popup .popup-content {
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px;
    z-index: 10;
    animation: fadeUp .3s ease both;
  }

  .popup .popup-content input {
    margin: 10px 0;
  }

  .backdrop {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, .6);
  }

  @keyframes fadeUp {
    from {
      transform: translate(0, 100%);
      opacity: 0;
    }
    to {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
</style>
