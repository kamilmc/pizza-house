<template>
  <div class="modal">
    <div class="modal-inner">
      <span class="cross-stand-alone" @click="$emit('closeModal')"></span>
      <h3>{{ queuePos.name }}</h3>
      <div class="buttons">
        <button class="status-0" :class="{ active:activeStatus===0 }" @click="chooseStatus(0)">zamówiona</button>
        <button class="status-1" :class="{ active:activeStatus===1 }" @click="chooseStatus(1)">w przygotowaniu</button>
        <button class="status-2" :class="{ active:activeStatus===2 }" @click="chooseStatus(2)">do pieczenia</button>
        <button class="status-4" :class="{ active:activeStatus===4 }" @click="chooseStatus(4)">do odbioru</button>
      </div>
      <button class="submit" @click="changeStatus()">Zmień status</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      activeStatus: null,
    }
  },
  props: ['queueIndex'],
  computed: {
    queuePos() {
      return this.$store.state.queue[this.queueIndex];
    }
  },
  created() {
    this.activeStatus = this.queuePos.state;
  },
  methods: {
    chooseStatus(status) {
      this.activeStatus = status;
    },
    changeStatus() {
      this.$store.commit('changeStatus', {
        status: this.activeStatus,
        index: this.queueIndex
      });
      this.$emit('closeModal');
    }
  }
}
</script>

<style lang="scss" scoped>
  @mixin cross($size: 20px, $color: currentColor, $thickness: 1px) {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  position: absolute;
  width: $size;
  height: $size;
  right: 25px;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: ($size - $thickness) / 2;
    left: 0;
    right: 0;
    height: $thickness;
    background: $color;
    border-radius: $thickness;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  span {
    display: block;
  }

}


  .cross-stand-alone {
    @include cross(25px, #000, 4px);
  }

</style>