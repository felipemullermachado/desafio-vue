<template>
<div class="container-principal">
  <div class="container-filho">
    <h1>Faça seu login</h1>
    <input class="formulario"
      type="text"
      placeholder="E-mail"
      v-model="email"
    >
    <input class="formulario"
      type="password"
      placeholder="Senha"
      v-model="senha"
    >
    <div>
      <button class="botao" @click="login">Entrar</button>
    </div>
  </div>

  <div class="container-filho">
    <h2>Não tem uma conta? Cadastre-se</h2>
    <input class="formulario"
      type="text"
      placeholder="E-mail"
      v-model="emailCadastro"
    >
    <input class="formulario"
      type="password"
      placeholder="Senha"
      v-model="senhaCadastro"
    >
    <button class="botao" @click="cadastro">Cadastrar</button>
  </div>
</div>
</template>

<script>
import firebase from 'firebase';

export default {
  data () {
    return {
    email: '',
    senha: '',
    emailCadastro: '',
    senhaCadastro: '',
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
        (user) => {
          this.$router.replace('logado')
          alert(`Bem Vindo, ${{email}}`)
        },
        (err) => {
          alert('Não foi possível realizar o login. ' + err.message)
        }
      );
    },
    cadastro () {
      firebase.auth().createUserWithEmailAndPassword(this.emailCadastro, this.senhaCadastro).then(
        (user) => {
          this.$router.replace('/'),
            alert('Sua conta foi criada com sucesso!')
        },
        (err) => {
          alert('Aconteceu algo inesperado. ' + err.message)
        }
      );
    }
   }  
};  
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');


.container-principal{
  font-family: 'Nunito', sans-serif;
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  flex-wrap:wrap;
  margin-top: 5rem;
}

.container-filho{
  background: #ffffff; 
	border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  text-align: center;
  width: 50%;
}

.formulario {
  border: 1px solid black;
  margin: 0.5rem auto;
  width: 80%;
  padding: 1rem;
  font-size: 1rem;
}

.botao {
  font-size: 1.2rem;
  background: #3b5998;
  border: 0;
  border-radius: 0.2rem;
  padding: 1rem 5rem;
  color: #ffffff;
  cursor: pointer;
}

  @media(max-width: 1023px){
  .container-principal{
    display:flex;
    flex-direction: column;
    align-items: center;
  }
}
  @media(max-width: 620px){
    .container-filho{
      width:100%
    }
  }

</style>