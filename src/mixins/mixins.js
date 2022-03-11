export const orders = {
  methods: {
    addToOrder(name, price, category) {
        this.$store.commit('addToOrder',{
          name,
          price,
          category
        });
        this.recalculatePrice();
    },
    removeFromOrderList(index){
      this.$store.commit('removeFromOrderList',{index});
      this.recalculatePrice();
    },
    recalculatePrice(){
      this.$store.commit('updateAmount',{amount: this.$store.getters.getOrderAmount});
    },
  },
  computed: {
    ifOrderListEmpty() {
      return this.$store.getters.ifOrderListEmpty();
    }
  }
}