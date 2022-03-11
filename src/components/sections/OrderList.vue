<template>
  <h2>Zamówienie</h2>
  <p v-if="ifOrderListEmpty">Brak produktów na liście</p>
  <div v-else>
    <table class="order">
      <tbody>
        <tr v-for="(position, index) in order" :key="index">
          <td class="title">{{ index + 1 }}. {{ position.name }}</td>
          <td class="price">{{ position.price }}zł</td>
          <td class="delete" @click="removeFromOrderList(index)"><span class="cross"></span></td>
        </tr>
      </tbody>
    </table>
    <div class="summary">
      Razem: {{ $store.state.orderAmount }}zł
    </div>
  </div>
</template>

<script>
import {orders} from '../../mixins/mixins';
export default {
  name: 'Order',
  computed: {
    order(){
      return this.$store.state.order
    },
  },
  mixins: [orders],
}
</script>

<style lang="scss" scoped>
   @import '../../scss/variables.scss';
  aside ul {
    margin: 15px;
    list-style: none;
    li {
      margin-top: 5px;
      margin-bottom: 5px;
      font-size: 1rem;
    }
  }

  .order{
    border: none;
    th, td {
      border: none;
    }
    .title{
      text-align: left;
    }
    .price{
      text-align: right;
    }
    .delete{
      width: 38px;
      cursor: pointer;
    }
  }

  .cross {
    background: $base-color;
    height: 20px;
    position: relative;
    width: 6px;
    display: inline-block;
    transform: rotate(45deg);
    left: -10px;
    top: 3px;
    cursor: pointer;

    &::after {
      background: $base-color;
      content: "";
      height: 6px;
      left: -7px;
      position: absolute;
      top: 7px;
      width: 20px;
    }
  }
  .summary{
    text-align: right;
    border-top: 1px solid $base-color;
    font-weight: 600;
    font-size: 1.2rem;
  }
</style>