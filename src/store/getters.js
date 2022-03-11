export default{
  ifOrderListEmpty(state){
    return () => {
      return state.order.length < 1
    }
  },
  getOrderAmount(state) {
      return state.order.reduce((sum, next) => sum + next.price,0);
  }
}