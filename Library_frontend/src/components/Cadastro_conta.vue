<template>
  <div class="container">
    <!-- Navegação -->
    <nav class="navbar">
      <div class="navbar-links">
        <router-link to="/Login">
          <button class="nav-button">Iniciar Sessão</button>
        </router-link>
        <router-link to="/Home" >
          <button class="nav-button">Pagina Inicial</button>
        </router-link>
        
      </div>
    </nav>

    <!-- Conteúdo Principal -->
    <header>
      <h1>Cadastre-se na MANGE Book</h1>
      <p>O catálogo da sua biblioteca está disponível em qualquer lugar, a qualquer hora.</p>
    </header>
    <form class="form-container">
      <div class="input-group">
        <label>Primeiro Nome</label>
        <input type="text" placeholder="Primeiro Nome" />
      </div>
      <div class="input-group">
        <label>Último Nome</label>
        <input type="text" placeholder="Último Nome" />
      </div>
      <div class="input-group">
        <label>E-mail</label>
        <input type="email" placeholder="E-mail" />
      </div>
      <div class="input-group">
        <label>Senha</label>
        <input type="password" placeholder="Senha" />
      </div>
      <button type="submit">Iniciar minha Biblioteca</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CadastroForm",
};
</script>

<style scoped>
/* Estilo da navegação */
.navbar {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  background-color: white;
  border-bottom: 1px solid #ddd;
}

.navbar-links {
  display: flex;
  gap: 15px;
}

.nav-button {
  width: 100%;
  padding: 13px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
}

.nav-button:hover {
  background-color: #2f2c2c;
  text-decoration: underline;
}

/* Conteúdo Principal */
.container {
  text-align: center;
  font-family: 'Inter', sans-serif;
  padding: 20px;
}

header h1 {
  font-size: 2rem;
  font-weight: bold;
}

header p {
  font-size: 1.2rem;
  color: gray;
}

.form-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 50px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  font-size: 0.9rem;
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
