<template>

  <div class="fundo">


    <div>

      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"

                  background="#ababab"
                  :interval="3000"
                  img-width="1024"
                  img-height="480"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >

        <!-- Text slides with image -->
        <b-carousel-slide


          img-src="https://static.noticiasaominuto.com/stockimages/1920/naom_5781743f3bd9c.jpg"
          style="height: 295px;"
        >


          <div class="animacao">
            <img src="https://fontmeme.com/permalink/181010/20e4f1a5d70d5a8ca82b53748b3625e3.png"
                 style="height: 100px;"/>
          </div>


          <br>
          <h1 class="animacao1" style="color: white;">Os melhores Trailers você encontra aqui</h1>
          <b-button v-on:click="sair" class="animacao1 botao-sair btn-danger">Sair</b-button>
         
        </b-carousel-slide>

      </b-carousel>

    </div>

    <br>
    <br>
    <categoria class="animacao" k="linkDoVideo(key)" v-for="categoria in categorias" :key="categoria.id"
               v-bind:titulo="categoria.titulo"
               v-bind:filmes="categoria.filmes"></categoria>

  </div>

</template>

<script>
  import Categoria from './componentes/Categoria'

  export default {
    name: 'app',
    components: {
      Categoria
    },
    data() {
      return {

        categorias: [],


        slide: 0,
        sliding: null,
        url: 0

      }


    },

    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }

    },

    created() {

      this.$http.get('http://localhost:3000/categoria').then(response => {
        this.categorias = response.body;

      });

    },
    methods: {

      sair: function (event) {

        window.location.href = "#/"

      }
    }
  }
</script>

<style>

  .botao-sair{
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
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {
    background-color: #B9090B;
  }



  .fundo {

    color: #ecf0f1;
    font-family: 'Open Sans', sans-serif;

    display: -ms-flexbox;

    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    -webkit-border-radius: 16px;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: black;
    -webkit-border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:vertical {
    height: 5px;
    background-color: #404040;
    -webkit-border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:horizontal {
    width: 5px;
    background-color: #666;
    -webkit-border-radius: 3px;
  }

  @keyframes profile-navegacao {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 2;
    }
  }

  .animacao {

    animation-name: profile-titulo;
    animation-duration: 3s;
  }

  .animacao1 {

    animation-name: profile-subtitulo;
    animation-duration: 4s;
  }

  @keyframes profile-subtitulo {
    0% {
      opacity: 0;
      transform: translate(20px, 0px)
    }

    100% {
      opacity: 1;
      transform: translate(0px, 0px)
    }
  }

  @keyframes profile-titulo {
    0% {
      opacity: 0;
      transform: translate(-20px, 0px)
    }

    100% {
      opacity: 1;
      transform: translate(0px, 0px)
    }
  }




</style>
