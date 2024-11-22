<template>
  <div class="main-layout">
    <!-- Sidebar com o menu e lista de livros -->
    <div class="sidebar-container">
      <aside class="sidebar">
        <!-- Menu de categorias -->
        <ul>
          <li v-for="item in menuItems" :key="item">{{ item }}</li>
        </ul>

        <!-- Imagem do Sidebar -->
        <div class="image-container">
          <img src="../../assets/img/banner.png" alt="Imagem principal" class="main-image" />
        </div>

        <!-- Lista de Livros dentro do Sidebar -->
        <section class="book-list">
          <h2>{{ title }}</h2>
          <div class="book-items">
            <BookItem
              v-for="book in books"
              :key="book.title"
              :book="book"
              :urlImage="book.urlImage"
            />
          </div>
        </section>
      </aside>
    </div>
  </div>
</template>

<script>
import BookItem from './BookItem.vue';

export default {
  name: 'Home',
  components: { BookItem },
  data() {
    return {
      menuItems: [
        'Administração', 'Artes', 'Autoajuda', 'Direito', 'Educação',
        'Engenharia', 'Estrangeiro', 'Mangá | HQ', 'Infantil', 'Ficção Científica',
        'Romance', 'Jovens', 'Informática', 'Mais Vendidos',
      ],
      title: "Livros Disponíveis",
      books: [
        { title: 'O meu pé de laranja lima', urlImage: 'link-da-imagem-1' },
        { title: 'Deixe De Ser Pobre', urlImage: 'link-da-imagem-2' },
        { title: 'Eu e esse meu coração', urlImage: 'link-da-imagem-3' },
      ],
    };
  },
};
</script>

<style scoped>
/* Layout principal */
.main-layout {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Sidebar */
.sidebar-container {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
}

/* Sidebar com o menu e a imagem */
.sidebar {
  width: 25%; /* Largura do Sidebar */
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* Estilos do menu de categorias */
.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 10px 0;
  font-size: 14px;
  color: #333;
}

/* Container da Imagem */
.image-container {
  margin-top: 20px;
  text-align: center;
}

.main-image {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  border: 2px solid #ddd;
  border-radius: 8px;
}

/* Estilo da lista de livros dentro do Sidebar */
.book-list {
  margin-top: 20px;
  background-color: #fff;
  padding: 15px;
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
  gap: 15px;
}
</style>



