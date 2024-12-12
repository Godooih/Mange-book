<template>
  <Header></Header>

  <div class="main-layout">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Container do BookList -->
    <div class="book-list-container">
      <h2 class="section-title">Livros Disponíveis</h2>
      
      <router-link to="/add_book">
        <button class="add_livro">Adicionar livro</button>
      </router-link>
      <div class="book-list">
        <BookItem
          v-for="book in books"
          :key="book.title"
          :book="book"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Home/Header.vue';
import Sidebar from '../components/Home/Sidebar.vue';
import BookItem from '../components/Home/BookItem.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: { Sidebar, BookItem, Header },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get('http://localhost:5000/api/books');
        console.log(response.data); // Verifique a resposta aqui
        this.books = response.data; // Atualiza a lista de livros com os dados do backend
      } catch (error) {
        console.error('Erro ao buscar os livros:', error);
      }
    },
  },
  created() {
    this.fetchBooks(); // Busca os livros ao carregar o componente
  },
};
</script>

<style scoped>
.add_livro{
  background-color: #007bff;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  cursor: pointer;
}
.main-layout {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
}

.book-list-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  text-align: center;
}

.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  width: 100%;
  max-width: 800px;
}
</style>
