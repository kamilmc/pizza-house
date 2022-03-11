<template>
  <section id="addons">
    <h2>Dodatki</h2>
    <ul>
      <li v-for="addon in addons" :key="addon.id">
        <div class="desc">
          <p class="title">{{ addon.name }}</p>
        </div>
        <div class="price" v-if="type==='order'">
          <button @click="addToOrder(addon.name, addon.price, addon.category)">Dodaj <span>({{ addon.price }}zł)</span></button>
        </div>
        <div class="price" v-else>
          {{ addon.price }}zł
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import {orders} from '../../mixins/mixins';
export default {
  name: 'Addons',
  props: ['type'],
  computed:{
    addons(){
      return this.$store.state.addons
    }
  },
  mixins: [orders],
}
</script>