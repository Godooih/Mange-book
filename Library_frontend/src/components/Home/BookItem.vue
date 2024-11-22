<template>
  <div class="book-item">
    <img :src="book.urlImage" alt="Book Image" class="book-image" />
    <h3>{{ book.title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'BookItem',
  props: {
    book: Object,
    urlImage: String,
  },
};
</script>

<style scoped>
.book-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.book-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

h3 {
  margin-top: 10px;
  font-size: 16px;
  color: #333;
}
</style>


