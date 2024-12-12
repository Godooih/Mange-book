<template>
  <div class="container" style="max-width: 600px; margin: auto; text-align: center;">
    <h1>Modificar Livro</h1>
    <form @submit.prevent="modificarLivro" style="margin-top: 20px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h3 style="font-family: 'Arial', sans-serif; text-align: left; color: #4a5568;">Informações do livro</h3>

      <!-- Nome do Livro -->
      <div style="margin-bottom: 15px;">
        <input
          type="text"
          v-model="livro.nome"
          placeholder="Nome do livro"
          style="width: 90%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;"
        />
      </div>

      <!-- Autor do Livro -->
      <div style="margin-bottom: 15px;">
        <input
          type="text"
          v-model="livro.autor"
          placeholder="Autor"
          style="width: 90%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;"
        />
      </div>

      <!-- Capa do Livro -->
      <div style="margin-bottom: 15px;">
        <img v-if="livro.cover && typeof livro.cover === 'string'" :src="`http://localhost:5000/uploads/${livro.cover}`" alt="Capa do livro" style="width: 100px; height: 100px;" />
        <input
          type="file"
          @change="handleImageChange"
          placeholder="Imagem da capa"
          style="width: 90%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;"
        />
      </div>

      <!-- Ano de publicação -->
      <div style="margin-bottom: 15px;">
        <input
          type="number"
          v-model="livro.anoPublicacao"
          placeholder="Ano de publicação"
          style="width: 90%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;"
        />
      </div>

      <!-- Botões -->
      <div>
        <button
          type="submit"
          style="background-color: #2b6cb0; color: white; padding: 10px 20px; border: none; border-radius: 4px; margin-right: 10px; cursor: pointer;"
        >
          Modificar Livro
        </button>
        <button
          type="button"
          @click="cancelar"
          style="background-color: #e53e3e; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;"
        >
          Cancelar Modificação
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      livro: {
        _id: this.$route.params.id, // ID do livro vindo da URL
        nome: "",
        autor: "",
        anoPublicacao: "",
        cover: "",
      },
    };
  },
  methods: {
    // Função para lidar com a mudança da imagem da capa
    handleImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.livro.cover = file;
      }
    },

    // Função para buscar os dados do livro
    async fetchLivro() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/books/${this.livro._id}`
        );
        this.livro = response.data; // Atualiza os dados com os retornados
        console.log("Dados do livro:", this.livro); // Verifique os dados no console
      } catch (error) {
        console.error("Erro ao buscar o livro:", error);
      }
    },

    // Função para modificar os dados do livro
    async modificarLivro() {
      try {
        const formData = new FormData();
        formData.append('title', this.livro.nome);
        formData.append('author', this.livro.autor);
        formData.append('year', this.livro.anoPublicacao);
        if (typeof this.livro.cover === 'object') {
          formData.append('cover', this.livro.cover);
        }


        const response = await axios.put(
          `http://localhost:5000/api/books/${this.livro._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Necessário para enviar arquivos
            },
          }
        );

        alert("Livro modificado com sucesso!");
        console.log("Resposta do servidor:", response.data);
        this.$router.push("/home");
      } catch (error) {
        console.error("Erro ao modificar o livro:", error);
        alert(`Erro: ${error.response?.data?.message || "Erro desconhecido"}`);
      }
    },

    // Função para cancelar a modificação e redirecionar para a página inicial
    cancelar() {
      this.$router.push("/home"); // Redireciona para a página de livros
    },
  },

  // Quando o componente for montado, buscar os dados do livro
  mounted() {
    console.log("ID do livro:", this.$route.params.id); // Verifique se o ID está sendo capturado corretamente
    this.fetchLivro(); // Buscar os dados do livro com o id passado na URL
  },
};
</script>
