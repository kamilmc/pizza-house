<template>
  <section id="pizzas">
        <h2>Pizza</h2>
        <ul class="pizzas">
          <li v-for="pizza in pizzas" :key="pizza.id">
            <div class="desc">
              <h2 class="title">{{ pizza.id }}. {{ pizza.name }}</h2>
              <p><span v-for="(ingredient, index) in pizza.ingredients" :key="ingredient">{{ ingredient }}<span v-if="index!==pizza.ingredients.length-1">, </span> </span></p>
            </div>
            <div class="order" v-if="type==='order'">
              <button @click="addToOrder(`Mała ${pizza.name}`,pizza.price.small, pizza.category)">Mała<br><span>{{ pizza.price.small }}zł</span></button>
              <button @click="addToOrder(`Średnia ${pizza.name}`,pizza.price.medium, pizza.category)">Średnia<br><span>{{ pizza.price.medium }}zł</span></button>
              <button @click="addToOrder(`Duża ${pizza.name}`,pizza.price.large, pizza.category)">Duża<br><span>{{  pizza.price.large }}zł</span></button>
            </div>
            <div class="price" v-else>
              {{ pizza.price.small }}/{{ pizza.price.medium }}/{{  pizza.price.large }} zł
            </div>
          </li>
        </ul>
      </section>
</template>

<script>
import {orders} from '../../mixins/mixins';
export default {
    name: 'Pizzas',
    props: ['type'],
    computed: {
      pizzas(){
        return this.$store.state.pizzas;
      }
    },
    mixins: [orders],
}
</script>