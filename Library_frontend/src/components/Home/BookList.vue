<template>
    <div class="main-layout">
      <!-- Container da barra lateral e imagem -->
      <div class="sidebar-container">
        <aside class="sidebar">
          <!-- Menu -->
          <div class="menu-container">
            <ul>
              <li v-for="item in menuItems" :key="item">{{ item }}</li>
            </ul>
          </div>
        </aside>
  
        <!-- Container da Imagem e BookList -->
        <div class="image-and-booklist">
          <!-- Imagem -->
          <div class="image-container">
            <img src="../../assets/img/banner.png" alt="Imagem principal" class="main-image" />
          </div>
  
          <!-- Lista de Livros -->
          <section class="book-list">
            <h2>{{ title }}</h2>
            <div class="book-items">
              <BookItem
                v-for="book in books"
                :key="book.title"
                :book="book" <!-- Passe o objeto 'book' inteiro para o BookItem -->
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import BookItem from './BookItem.vue';
  
  export default {
    name: 'SideBar',
    components: { BookItem },
    props: {
      title: String,
      books: Array,
    },
    data() {
      return {
        menuItems: [
          'Administração', 'Artes', 'Autoajuda', 'Direito', 'Educação',
          'Engenharia', 'Estrangeiro', 'Mangá | HQ', 'Infantil', 'Ficção Científica',
          'Romance', 'Jovens', 'Informática', 'Mais Vendidos',
        ],
      };
    },
  };
  </script>
  
  <style>
  /* Layout principal */
  .main-layout {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }
  
  /* Container do Sidebar e Imagem */
  .sidebar-container {
    display: flex;
    gap: 20px;
    width: 100%;
  }
  
  /* Estilo do Sidebar */
  .sidebar {
    flex: 0 0 25%; /* Sidebar ocupa 25% da largura */
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .menu-container ul {
    list-style: none;
    padding: 0;
  }
  
  .menu-container li {
    margin: 10px 0;
    font-size: 14px;
    color: #333;
  }
  
  /* Estilo da imagem e do BookList ao lado */
  .image-and-booklist {
    display: flex;
    flex-direction: column;
    gap: 20px; /* Espaçamento entre a imagem e o BookList */
    flex: 1;
  }
  
  /* Estilo da imagem */
  .image-container {
    flex: 0 0 100%; /* A imagem ocupa 100% da largura disponível */
    text-align: center;
    margin-top: 20px;
  }
  
  .main-image {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
    border: 2px solid #ddd;
    border-radius: 8px;
  }
  
  /* Estilo da lista de livros */
  .book-list {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .book-list h2 {
    margin-bottom: 15px;
    font-size: 20px;
    color: #333;
  }
  
  .book-items {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  </style>
  