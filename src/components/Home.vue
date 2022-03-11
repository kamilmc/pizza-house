<template>
  <div class="content">
    <div class="main">
      <h1>Menu</h1>
      <Pizzas type="menu"/>
      <Addons type="menu"/>
    </div>
    <aside>
      <Oven />
      <Queue />
    </aside>
  </div>
</template>

<script>
import Pizzas from './sections/Pizzas';
import Addons from './sections/Addons';
import Oven from './sections/Oven';
import Queue from './sections/Queue';

export default {
  name: 'App',
  components: {Pizzas, Addons, Oven, Queue}
}
</script>

<style lang="scss">
@import '../scss/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;1,300&display=swap');


*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background-color: $base-color;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: $base-color;
}

h1{
  font-size: 1.7rem;
  margin-bottom: 20px;
}
h2{
  font-size: 1.4rem;
}

a{
  color: $base-color;
}

header, footer{
  height: $edge-margin;
  color: $bg-color;
}



footer{
  border-top: 3px solid $border-color;
  text-align: center;
}

.header-inner, .footer-inner{
  margin: -1px $edge-margin;
  padding: 5px 20px;
  border-left: 3px solid $border-color;
  border-right: 3px solid $border-color;
  width: calc(100% - 2 * $edge-margin);
  height: 100%;
  display: flex;
  align-items: center;
}

.footer-inner{
  justify-content: center;
}

img{
  max-width: 100%;
  height: auto;
}

.content{
  margin: 0 $edge-margin;
  padding: 20px 10px;
  background-color: $bg-color;
  min-height: calc(100vh - 2 * $edge-margin);
  border-left: 3px solid $border-color;
  border-right: 3px solid $border-color;
  display: flex;
  flex-wrap: wrap;
  height: auto;
}

.main {
  flex: 5;
  margin-right:10px;
  margin-left: 10px;
  padding: 20px;
}


#pizzas ul, #addons ul {
  list-style: none;
  margin: 0 20px 20px;
  li {
    margin: 10px 0 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .desc {
      font-size: 0.8rem;
    }
    .title {
      font-size: 1rem;
    }
    .price{
      margin-left: 20px;
      flex-basis: 150px;
      text-align: right;
    }
  }
}

#pizzas ul li::after{
  content: '';
  background-image: url('../assets/pin.png');
  background-size: cover;
  width: 32px;
  height: 32px;
  left: -45px;
  top: 9px;
  position: absolute;
}

.order{
  min-width: 185px;
}

aside{
  flex: 3;
  border-left: 1px solid $base-color;
  margin-left: 10px;
  margin-right:10px;
  padding: 20px
}

@media screen and (max-width: 852px) {
  aside {
    border-left: 1px solid transparent;
  }
}

button{
  padding: 10px;
  background-color: $base-color;
  margin: 3px;
  color: white;
  border: none;
  cursor: pointer;
  border: 1px solid $base-color;
  transition: all 0.2s ease-in;

  &:hover, &:active{
    background-color: transparent;
    color: $base-color;
    border: 1px solid $base-color;
  }

  &:disabled{
    color: darkgray;
    cursor: inherit;
    background-color: $base-color;
  }

  span{
    font-size: 0.6rem;
  }
}

table{
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;

  td {
    padding: 5px;

    &:last-child, &:first-child{
      text-align: center;
    }

    &:nth-child(3){
      text-align: right;
    }
  }
}

table, th, td {
  border: thin solid $base-color;
  border-collapse: collapse;
}

.status-0{
  background-color: antiquewhite;
}
.status-1{
  background-color: #2a9388;
  color: white;
}

.status-2{
  background-color: orange;
  color: white;
}

.status-3{
  background-color: #b23200;
  color: white;
}

.status-4{
  background-color: green;
  color: white;
}

.status-1, .status-2, .status-3, .status-4, .status-5{
  font-size: 0.8rem;
}

.modal{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  background-color: rgba(255,255,255,0.5);
}

.modal-inner{
  position: absolute;
  min-width: 360px;
  min-height: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: $bg-color;
  padding:20px;
  border: 3px solid $border-color;
  h3{
    margin-top: 35px;
  }
  .buttons{
    margin: 18px 0px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: $base-color;
    button{
      color: $base-color;
      &.status-4, &.status-3, &.status-2, &.status-1{
        color: white
      }
      &:hover, &:active{
        color: $base-color
      }
    }
  }
  button {
    margin:2px;
    padding:12px;
    border: 1px solid transparent;
    &:hover, &:active{
      border: 1px solid $base-color;
    }
    &.active{
      border: 2px solid $base-color;
      padding: 10px;
      font-weight: 500;
    }
    &.submit{
      width: 100%;
    }
  }
}

@media screen and (max-width: 1170px){
  .content{
    flex-flow: column;
  }
  aside{
    border-left: none;
  }
  ul.main-menu {
    display: flex;
    position: absolute;
    flex-flow: column;
    right: 0;
    background-color: $base-color;
    height: calc(100vh - $edge-margin + 4px);
    top: calc($edge-margin - 4px);
    z-index: 5;
    width: 200px;
    padding-top: 20px;
    align-items: center;
    border: 3px solid $border-color;

    li {
      margin: 18px 0;
    }
  }
}


@media screen and (max-width: 640px){
  .content{
    padding: 20px 0px;
  }
  .main{
    padding: 20px 10px;
  }

  #pizzas ul{
    margin: 0 10px 20px;
  }

  #pizzas ul li{
    flex-flow: column;
    align-items: inherit;
  }

  #pizzas ul li .price{
    flex-basis: inherit;
  }

  #addons ul li{
    margin: 10px 0
  }

  table.oven, table.queue {
    border: none;

    tr {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 20px;
    }

    td {
      width: inherit;
      border-left: none;
      border-bottom: none;

      &:first-child{
        order: 1;
        flex: 1;
        height: 56px;
        display: flex;
        align-items: center;
        border-left: thin solid #71310d;
      }

      &:nth-child(2){
        width: 100%;
        order: 4;
        border-left: thin solid #71310d;
        border-bottom: thin solid #71310d;
      }
      &:nth-child(3){
        order: 2;
        flex: 5;
        height: 56px;
        align-items: center;
        display: flex;
        justify-content: right;
      }
      &:last-child {
        order: 3;
        flex: 5;
        height:56px;
      }
    }
  }

}

@media screen and (max-width: 480px){
  .content{
    margin: 0 10px;
  }

  .header-inner, .footer-inner{
    width: calc(100% - 20px);
    margin: -1px 10px;
  }

  aside{
    padding: 10px;
  }
}

</style>
