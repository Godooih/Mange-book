<template>
  <header class="header">
    <h1 class="mange_book">MANGE Book</h1>
    <img class="book" src="../../assets/img/book_icon.png" alt="Book Icon">
    <router-link to="/login">
      <button class="login-button">Login</button>
    </router-link>
    <input type="text" placeholder="Procure seu livro aqui" class="search-input" />
  </header>
</template>

  
  <script>
  export default {
    name: 'HeaDer'
  };
  </script>
  
  <style src="../../assets/style.css"></style>
  