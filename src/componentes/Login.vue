<template>
  <div class="login">

    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
          <img src="https://fontmeme.com/permalink/181010/20e4f1a5d70d5a8ca82b53748b3625e3.png" id="icon"
               alt="User Icon"/>
        </div>


        <form>
          <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuario">
          <input type="password" id="password" class="fadeIn third" name="login" placeholder="Senha">
          <input v-on:click="logado" type="button" class="fadeIn fourth botao" value="Entrar">
        </form>



        <a style="color: #B9090B;" v-if="existente"> Login e(ou) senha incorreto</a>

        <div id="formFooter">
          <a class="underlineHover" href="#/Cadastro">Cadastre-se</a>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Login",


    data() {
      return {

        usuario: [],
        existente: false

      }
    },

    created() {

      this.$http.get('http://localhost:3000/usuario').then(response => {
        this.usuario = response.body;

      });

    },

    methods: {

      logado: function (event){


        for (var k in this.usuario) {
          if (document.getElementById("password").value == this.usuario[k].senha &&
            document.getElementById("login").value == this.usuario[k].nome) {
            window.location.href="#/App"
            this.existente = false;
          }
        }
        this.existente = true;
      }
    }

  }


</script>

<style>

  .login {

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

  .botao, input[type=submit], input[type=reset] {
    background-color: #B9090B;
    border: none;
    color: white;
    padding: 15px 80px;
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

  .botao:hover, input[type=submit]:hover, input[type=reset]:hover {
    background-color: #B9090B;
  }

  .botao:active, input[type=submit]:active, input[type=reset]:active {
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
