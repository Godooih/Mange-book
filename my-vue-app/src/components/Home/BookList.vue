<template>
  <div class="book-item">
    <!-- Roteamento para página de detalhes do livro -->
    <router-link :to="`/books/${book._id}`">
      <img :src="`http://localhost:5000/uploads/${book.cover}`" alt="Capa do Livro" class="book-image" />
      <h3>{{ book.title }}</h3>
    </router-link>

    <!-- Botão para alternar entre "Emprestar" e "Devolver" -->
    <button class="emprestar" @click="toggleLending">
      {{ book.isLending ? 'Devolver' : 'Emprestar' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'BookItem',
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleLending() {
      this.$emit('toggle-lending', this.book);
    },
  },
};
</script>

<style scoped>
.book-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.book-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

h3 {
  margin-top: 10px;
  font-size: 16px;
  color: #333;
  text-align: center;
}

.emprestar {
  background-color: #007bff;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  cursor: pointer;
  margin-top: 10px;
}

.emprestar:hover {
  background-color: #0056b3;
}
</style>
