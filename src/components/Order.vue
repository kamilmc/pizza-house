<template>
  <div class="content">
    <div class="main">
      <h1>Przyjmij zamówienie</h1>
      <Pizzas type="order"/>
      <Addons type="order"/>
    </div>
    <aside>
      <OrderList />
      <button v-if="!ifOrderListEmpty" id="confirm" @click="confirmOrder()">Zatwierdź zamówienie</button>
    </aside>
  </div>
</template>

<script>
import {orders} from '../mixins/mixins';
import Pizzas from './sections/Pizzas';
import Addons from './sections/Addons';
import OrderList from './sections/OrderList';

export default {
  name: 'App',
  components: {
    Pizzas, Addons, OrderList
  },
  mixins: [orders],
  methods: {
    confirmOrder() {
      this.$store.commit('confirmOrder');
      this.$router.push({ name: 'Home' });
    }
  },
}
</script>
<style lang="scss" scoped>
  #confirm{
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
