<template>
  <div class="content">
    <div class="main">
      <h1>Menu</h1>
      <div class="history">
        <div class="history_pos" v-for="order in ordersHistory" :key="order.id">
          <h2>Zamówienie nr {{ order.id }}</h2>
          <ul>
            <li v-for="(pos, index) in order.order" :key="index">{{ pos.name }} - <span>{{ pos.price }}zł</span></li>
          </ul>
          <p class="amount">Kwota: {{ order.amount }}zł</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ordersHistory() {
      return this.$store.state.ordersHistory;
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '../scss/variables.scss';
  .history {
    display: flex;
    flex-wrap: wrap;
    //height: calc(100vh - 2 * $edge-margin);
    justify-content: space-around;
  }
  .history_pos{
    border: 1px solid $base-color;
    padding: 10px 10px 25px;
    margin: 5px;
    flex: 1 0 360px;
    max-width: 415px;
    position: relative;
    h2 {
      font-size: 1.1rem;
    }
    ul {
      margin: 5px 30px;
    }
    li {
      font-size: 0.95rem;
      line-height: 1.55rem;
      span {
        font-weight: 600;
      }
    }
    .amount {
      position: absolute;
      bottom: 10px;
      right: 15px;
    }
  }
  @media screen and (max-width: 480px){
    .history_pos{
      flex: 1 0 100%;
    }

  }
</style>