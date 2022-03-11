import store from './store';

export default {
  updateTimers(state, payload) {
    state.oven[payload.id].time = payload.timer;
  },
  updateID(state, payload) {
    state.oven[payload.id].idPizza = payload.idPizza;
  },
  updateAmount(state,payload){
    state.orderAmount = payload.amount;
  },
  addToOrder(state, payload) {
    state.order.push({
      name: payload.name,
      price: payload.price,
      category: payload.category
    });
  },
  removeFromOrderList(state, payload){
    state.order.splice(payload.index,1);
  },
  confirmOrder(state) {
    const id = state.ordersHistory.length + 1;
    state.ordersHistory.push({
      id,
      order: state.order,
      amount: state.orderAmount
    });
    const pizzas = state.order.filter(item => item.category==='pizza' );
    pizzas.forEach((pizza, index) => {
      state.queue.push({
        id: `${id}-${index + 1}`,
        name: `${pizza.name} (Zam. nr ${id})`,
        state: 0
      })
    });
    console.log(pizzas);
    state.order=[];
    state.orderAmount=0;
  },
  changeStatus(state, payload){
    state.queue[payload.index].state = payload.status
  },
  pushToOven(state, payload){
    //const empty = state.oven.filter(pos => pos.idPizza === 0)[0];
    const empty = state.oven.findIndex(pos => pos.idPizza === 0);
    if (empty === -1) {
      alert('Brak pustych miejsc w piecu.')
    } else {
      state.oven[empty].idPizza = payload.id;
      state.oven[empty].name = state.queue[payload.index].name;
      bakingStart(empty,20);
      store.commit('changeStatus', {
        status: 3,
        index: payload.index
      });
    } /*
    if (empty !== undefined) {
      state.oven[empty].idPizza = payload.id;
      state.oven[empty].name = state.queue[payload.index].name;
      bakingStart(empty,20);
      store.commit('changeStatus', {
        status: 3,
        index: payload.index
      });
    } else {

    } */
  },
  bakingEnd(state, payload){
    const index = state.queue.findIndex(object => object.id === payload.idPizza);
    state.queue[index].state = 4;

    state.oven[payload.levelID - 1].name = '-';
    state.oven[payload.levelID - 1].time = '-';
    state.oven[payload.levelID - 1].idPizza = 0;
  },
  orderEnd(state, payload) {
    state.queue.splice(payload.index, 1);
  }
}

function bakingStart(id, timeOut) {
  let now = new Date();
  const interval = setInterval(() => {
    const elapsed = new Date() - now;
    let minutes = Math.floor((timeOut - elapsed/1000)/60);
    let seconds = Math.abs(Math.round((timeOut - elapsed/1000)%60));
    if (minutes==-1) {
      updateTimers(id,'00:00');
      clearInterval(interval);
      // store.commit('updateID',{
      //   id,
      //   idPizza: 2
      // });
    } else {
      seconds<10 ? seconds = '0'+seconds : seconds;
      minutes<10 ? minutes = '0'+minutes : minutes;
      updateTimers(id, minutes+':'+seconds);
    }

  }, 500);
}

function updateTimers(id,timer) {
  store.commit('updateTimers',{
    id,
    timer
  });
}

