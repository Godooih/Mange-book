<template>
  <div class="container" style="max-width: 600px; margin: auto; text-align: center;">
    <router-link to="/home">
      <h1 style="font-family: 'Arial', sans-serif; font-size: 24px; font-weight: bold;">
        <span style="font-size: 30px;">MANGE Book 📖</span>
      </h1>
    </router-link>
    <h2 style="font-family: 'Arial', sans-serif; font-size: 22px; color: #2d3748;">
      Adicione o livro aqui!!
    </h2>

    <!-- Formulário -->
    <form @submit.prevent="adicionarLivro" enctype="multipart/form-data">
      <div style="margin-bottom: 15px;">
        <input
          type="text"
          v-model="livro.title"
          placeholder="Título do livro"
          style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;"
        />
      </div>
      <div style="margin-bottom: 15px;">
        <input
          type="text"
          v-model="livro.author"
          placeholder="Autor do livro"
          style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;"
        />
      </div>
      <div style="margin-bottom: 15px;">
        <input
          type="date"
          v-model="livro.year"
          placeholder="Ano de publicação"
          style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;"
        />
      </div>
      <div style="margin-bottom: 15px;">
        <input
          type="file"
          @change="onFileSelected"
          accept="image/*"
          style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;"
        />
        <!-- Exibe a imagem selecionada -->
        <div v-if="cover">
          <img :src="coverPreview" alt="Capa do Livro" style="max-width: 100px; margin-top: 10px;" />
        </div>
      </div>

      <button type="submit" style="background-color: #2b6cb0; color: white; padding: 10px 20px;">
        Adicionar Livro
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      livro: {
        title: "",
        author: "",
        year: "",
      },
      cover: null, // Armazena o arquivo da capa do livro
      coverPreview: "", // Exibe a prévia da capa
    };
  },
  methods: {
    onFileSelected(event) {
      this.cover = event.target.files[0]; // Seleciona o arquivo
      this.coverPreview = URL.createObjectURL(this.cover); // Cria uma URL temporária para a imagem
    },
    async adicionarLivro() {
      const formData = new FormData();
      formData.append("title", this.livro.title);
      formData.append("author", this.livro.author);
      formData.append("year", new Date(this.livro.year).getFullYear());
      
      if (this.cover) {
        formData.append("cover", this.cover); // 'cover' é o nome do campo de upload
      }

      try {
        const response = await fetch("http://localhost:5000/api/books", {
          method: "POST",
          body: formData, // O corpo da requisição é o FormData
        });

        if (!response.ok) {
          throw new Error("Erro ao adicionar o livro");
        }

        alert("Livro adicionado com sucesso!");
      } catch (error) {
        console.error(error);
        alert("Erro ao adicionar o livro");
      }
    },
  },
};
</script>

<style scoped>
/* Adicione aqui estilos adicionais, se necessário */
</style>
