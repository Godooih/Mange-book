<template>
  <div id="app">

    <div class="main-content">
  
      
      <router-view></router-view>
      <!-- <Home/> -->
    </div>
  </div>
</template>

<script>

// import Home from '../src/views/Home.vue';
// import Sidebar from './components/Home/Sidebar.vue';
// import BookList from './components/Home/BookList.vue';

export default {
  name: 'App',

  data() {
    return {
      bestsellers: [
        { title: 'O meu pé de laranja lima', 
        buttonText: 'Emprestar',},
        { title: 'Deixe De Ser Pobre',
         buttonText: 'Emprestar',
        urlImage:'' },
        { title: 'Eu e esse meu coração', buttonText: 'Emprestar' },
        { title: 'Café com Deus', buttonText: 'Emprestar' },
        { title: 'Heartstopper dois garotos', buttonText: 'Emprestar' },
      ],
    };
  }
};
</script>

<style>
.main-content {
  display: flex;
}
.content {
  width: 100%;
  padding: 20px;
}
.banner {
  width: 100%;
  height: auto;
}
</style>