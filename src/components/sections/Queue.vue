<template>
  <h2>Kolejka</h2>
  <p v-if="queue.length===0">Brak pozycji w kolejce.</p>
  <table v-else class="queue">
    <tbody>
      <tr v-for="(pos, index) in queue" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ pos.name }}</td>
        <td :class="`status-${pos.state}`">{{ status[pos.state] }}</td>
        <td>
          <button @click="pushToOven(index, pos.id)" v-if="pos.state===2">Włóż do pieca</button>
          <button @click="orderEnd(index)" v-else-if="pos.state===4">Odebrane</button>
          <button @click="changeStatus(index)" v-else :disabled="pos.state===3">Zmień status</button>
        </td>
      </tr>
    </tbody>
  </table>
  <Modal v-if="showModal" @closeModal="showModal=false" :queueIndex="queueIndex"/>
</template>

<script>
import Modal from './Modal';
export default {
  name: 'Queue',
  data() {
    return {
      showModal: false,
      queueIndex: null
    }
  },
  components: {Modal},
  computed: {
    queue() {
      return this.$store.state.queue;
    },
    status() {
      return this.$store.state.status
    }
  },
  methods: {
    changeStatus(index){
      this.showModal=true;
      this.queueIndex = index;
    },
    pushToOven(index, id) {
      this.$store.commit('pushToOven', {
        index,
        id
      });
    },
    orderEnd(index) {
      this.$store.commit('orderEnd', {
        index
      });
    }
  },
}
</script>

<style>

</style>