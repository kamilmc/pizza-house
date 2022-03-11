import { createStore } from 'vuex'
import getters from "./getters";
import mutations from "./mutations";

import pizzas from "../data/pizzas";
import addons from "../data/addons";

const store = createStore({
  state: {
    pizzas,
    addons,
    status:['zamówiona', 'w przygotowaniu', 'do pieczenia', 'w piekarniku', 'do odbioru'],
    order:[],
    orderAmount: 0,
    ordersHistory: [{"id":1,"order":[{"name":"Mała Hawajska Margerita","price":15,"category":"pizza"},{"name":"Średnia Hawajska z szynką","price":29,"category":"pizza"},{"name":"Duża Hawajskie Salami","price":36,"category":"pizza"}],"amount":80},{"id":2,"order":[{"name":"Średnia Hawajska Margerita","price":22,"category":"pizza"},{"name":"Coca Cola 1l","price":11,"category":"drink"}],"amount":33},{"id":3,"order":[{"name":"Duża Hawajska z szynką","price":35,"category":"pizza"},{"name":"Sos czosnkowy","price":5,"category":"sauce"},{"name":"Frytki","price":9,"category":"food"}],"amount":49},{"id":4,"order":[{"name":"Duża Hawajska Margerita","price":26,"category":"pizza"},{"name":"Duża Hawajskie Salami","price":36,"category":"pizza"},{"name":"Duża Hawajska Rusticana","price":39,"category":"pizza"},{"name":"Sos pomidorowy","price":5,"category":"sauce"},{"name":"Sos czosnkowy","price":5,"category":"sauce"}],"amount":111},{"id":5,"order":[{"name":"Frytki","price":9,"category":"food"},{"name":"Fanta 1l","price":11,"category":"drink"}],"amount":20}],
    queue: [{"id":"1-1","name":"Mała Hawajska Margerita (Zam. nr 1)","state":1},{"id":"1-2","name":"Średnia Hawajska z szynką (Zam. nr 1)","state":3},{"id":"1-3","name":"Duża Hawajskie Salami (Zam. nr 1)","state":2}],
    oven:[
      {
        "id":1,
        "idPizza":"1-2",
        "time":"00:00",
        "name":
        "Średnia Hawajska z szynką (Zam. nr 1)"
      },
      {
        id:2,
        idPizza: 0,
        time: '-',
        name: '-'
      },
      {
        id:3,
        idPizza: 0,
        time: '-',
        name: '-'
      },
      {
        id:4,
        idPizza: 0,
        time: '-',
        name: '-'
      },
      {
        id:5,
        idPizza: 0,
        time: '-',
        name: '-'
      },

    ],
    },
    getters,
    mutations,
    actions: {

    },
});

export default store;