<template>
  <div class="cadastro">


    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
          <img src="https://fontmeme.com/permalink/181010/7d38c3eea682e07661992d7e49303b6d.png" id="icon"
               alt="User Icon"/>
        </div>

        <div class="container">
          <b-alert show variant="success" id="mensagem" v-show="showMensagem"></b-alert>
        </div>

        <b-form @submit="salvarUsuario" @reset="onReset">
          <b-form-group id="nomeUsuario"

                        label-for="nomeUsuarioInput">
            <b-form-input id="nomeUsuarioInput"
                          class="fadeIn second"
                          type="text"
                          v-model="usuario.nome"
                          required
                          placeholder="Digite o seu nome">
            </b-form-input>
          </b-form-group>

          <b-form-group id="senha"
                        label-for="nomeUsuarioInput">
            <b-form-input id="senhaUsuarioInput"
                          class="fadeIn second"
                          type="password"
                          v-model="usuario.senha"
                          required
                          placeholder="Digite sua senha">
            </b-form-input>
          </b-form-group>


          <input type="submit" class="fadeIn fourth" value="Pronto">
          <input type="button" class="fadeIn fourth" v-on:click="voltar" value="Voltar">


        </b-form>

      </div>
    </div>


  </div>


</template>

<script>
  export default {
    name: "cadastro",
    data() {
      return {
        usuario: {
          nome: '',
          senha: ''
        },
        usuarioSalvo: null,
        showMensagem: false,
        usuariosSalvos: []
      }
    },

    created() {

      this.$http.get('http://localhost:3000/usuario').then(response => {
      this.usuariosSalvos = response.body;

    });

    },

    methods: {
      salvarUsuario(evt) {


        this.$http.get('http://localhost:3000/usuario').then(response => {
          this.usuariosSalvos = response.body;

        });

        var flag = false;


        for (var k in this.usuariosSalvos) {


          if (document.getElementById("senhaUsuarioInput").value == this.usuariosSalvos[k].senha &&
            document.getElementById("nomeUsuarioInput").value == this.usuariosSalvos[k].nome) {
            flag = true;

            document.getElementById("mensagem").innerText = "Login e(ou) senha já existente";
            this.showMensagem = true;
          }

        }

        if (!flag) {

          evt.preventDefault();
          this.$http.post('http://localhost:3000/usuario', this.usuario).then(response => {
            this.usuarioSalvo = response.body;
            document.getElementById("mensagem").innerText = "Operação realizada com sucesso!";
            this.showMensagem = true;
          });

        }

      },
      onReset(evt) {
        evt.preventDefault();
        this.usuario.nome = '';
        this.showMensagem = false;
      },

      voltar: function (event) {

        window.location.href="#/"

      }
    }
  }
</script>

<style scoped>

  .cadastro {

    background-image: url('../img/vintage-cinema-sign-photography-hd-wallpaper-1920x1080-9114.jpg');
    background-size: auto;

    width: 100%;
    height: 100%;
    position: absolute;
  }

  body {
    font-family: "Poppins", sans-serif;
    height: 100vh;
  }

  a {
    color: white;
    display: inline-block;
    text-decoration: none;
    font-weight: 400;
  }

  h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
    margin: 40px 8px 10px 8px;
    color: #cccccc;
  }

  /* STRUCTURE */

  .wrapper {

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 100px;
  }

  #formContent {
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 30px;
    width: 90%;
    max-width: 450px;
    position: relative;
    padding: 0px;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
    text-align: center;
  }

  #formFooter {

    padding: 25px;
    text-align: center;
    -webkit-border-radius: 0 0 10px 10px;
    border-radius: 0 0 10px 10px;
  }

  /* TABS */

  h2.inactive {
    color: #cccccc;
  }

  h2.active {
    color: #B9090B;
    border-bottom: 2px solid #B9090B;
  }

  /* FORM TYPOGRAPHY*/

  input[type=button], input[type=submit], input[type=reset] {
    background-color: #B9090B;
    border: none;
    color: white;
    padding: 10px 26px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 13px;

    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 5px 20px 40px 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {
    background-color: #B9090B;
  }

  input[type=button]:active, input[type=submit]:active, input[type=reset]:active {
    -moz-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    -o-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }

  input[type=password], input[type=text] {
    background-color: #f6f6f6;
    border: none;
    color: #B9090B;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px;
    width: 85%;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
  }

  input[type=text]:focus {
    background-color: #fff;
    border-bottom: 2px solid #B9090B;
  }

  input[type=text] placeholder {
    color: #cccccc;
  }

  /* ANIMATIONS */

  /* Simple CSS3 Fade-in-down Animation */
  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  /* Simple CSS3 Fade-in Animation */
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fadeIn {
    opacity: 0;
    -webkit-animation: fadeIn ease-in 1;
    -moz-animation: fadeIn ease-in 1;
    animation: fadeIn ease-in 1;

    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;

    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    animation-duration: 1s;
  }

  .fadeIn.first {
    -webkit-animation-delay: 0.4s;
    -moz-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }

  .fadeIn.second {
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  .fadeIn.third {
    -webkit-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }

  .fadeIn.fourth {
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    animation-delay: 1s;
  }

  /* Simple CSS3 Fade-in Animation */
  .underlineHover:after {
    display: block;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 2px;
    background-color: #B9090B;
    content: "";
    transition: width 0.2s;
  }

  .underlineHover:hover {
    color: #B9090B;
  }

  .underlineHover:hover:after {
    width: 100%;
  }

  h1 {
    color: #B9090B;
  }

  /* OTHERS */

  *:focus {
    outline: none;
  }

  #icon {
    padding: 60px;
    width: 100%;
  }

</style>
