<template>
  <div class="login-container">
    <div class="login-box">
      <h1>MANGE Book</h1>
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <label for="email">Insira seu email ou CPF cadastrado na escola</label>
        <input
          v-model="email"
          type="text"
          id="email"
          placeholder="Email ou CPF"
          required
        />

        <label for="password">Senha:</label>
        <div class="password-container">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            id="password"
            placeholder="Senha"
            required
          />
          <button type="button" @click="togglePasswordVisibility" title="Mostrar ou ocultar senha">
            {{ showPassword ? 'Ocultar Senha' : 'Mostrar Senha' }}
          </button>
        </div>

        <button type="submit" class="login-button">Entrar</button>
        <a href="#" class="forgot-password">Esqueceu a senha?</a>
      </form>

      <router-link to="/Criar_conta" class="create-account-link">
        <button class="create-account-button">Criar conta</button>
      </router-link>

      <footer class="footer">
        <a href="#">Central de ajuda</a>
        <a href="#">Termos de serviço</a>
        <a href="#">Política de privacidade</a>
        <a href="mailto:contato@mange.com.br">contato@mange.com.br</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    handleLogin() {
      console.log("Email:", this.email);
      console.log("Senha:", this.password);
      // Adicione lógica de autenticação aqui
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Pompiere&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pompiere&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  margin: 0;
}

.login-box {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: white;
  text-align: center;
}

h1 {
  font-family: "Pompiere", serif;
  font-weight: 400;
  font-style: normal;
  font-weight: 400;
  font-size: 1.8em;
}

h2 {
  margin: 10px 0;
  font-size: 1.2em;
  font-weight: normal;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-size: 0.9em;
  text-align: left;
}

input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.password-container {
  display: flex;
  align-items: center;
}

.password-container button {
  margin-left: 10px;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
}

.login-button,
.create-account-button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  cursor: pointer;
}

.forgot-password {
  font-size: 0.9em;
  color: #007bff;
  padding:  10px;
  text-decoration: none;
}

.footer {
  display: flex;
  gap: 15px;
  font-size: 0.8em;
  margin-top: 20px;
  justify-content: center;
}
</style>
