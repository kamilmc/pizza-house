<template>
  <h2>Piec {{ $store.state.count }}</h2>
  <table class="oven">
    <tbody>
      <tr v-for="level in oven" :key="level.id">
        <td style="width:30px">{{ level.id }}</td>
        <td>{{ level.name }}</td>
        <td style="width:80px">{{ level.time }}</td>
        <td style="width:100px">
          <button :disabled="level.idPizza===0 || level.time!=='00:00'"
            @click="bakingEnd(level.id, level.idPizza)">
            Wyjmij</button>
          </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Oven',
  computed: {
    oven(){
      return this.$store.state.oven
    }
  },
  methods: {
    bakingEnd(levelID, idPizza) {
      this.$store.commit('bakingEnd',{
        levelID,
        idPizza
      });
    }
  }
}
</script>

<style>

</style>