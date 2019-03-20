<template>
  <div>
    <div class="bottom-action">
      <button class="btn" @click="toggleCart">添加商品</button>
    </div>
    <div class="popup" v-show="shouldShowCart">
      <div class="backdrop" @click="toggleCart"></div>
      <form class="popup-content" @submit.prevent="confirm">
        <h3>添加商品</h3>
        <input type="text" v-model="code" autofocus placeholder="请输入商品编号">
        <button class="btn" type="submit">确定</button>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        code: '',
        shouldShowCart: false,
      }
    },
    methods: {
      toggleCart() {
        this.shouldShowCart = !this.shouldShowCart
      },
      confirm($event) {
        if (this.code) {
          this.$emit('add', this.code)
          this.code = ''
          this.shouldShowCart = false
        }
        $event.preventDefault()
      },
    },
  }
</script>

<style scoped src="./styles.css" />
