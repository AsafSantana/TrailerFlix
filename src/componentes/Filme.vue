<template>

  <div class="gui-card" >
    <div class="gui-card__media ">

      <br  v-if="!reproduzindo" v-on:mouseout="reproduzindo=false" style="font-size: 17px; ">
      <div v-if="!reproduzindo"  v-on:mouseout="reproduzindo=false" class="gui-card__media">
        <img v-on:mouseover="reproduzindo=true"  class="gui-card__img"
             v-bind:src='img' alt=""/>
      </div>


      <iframe id="video" v-if="reproduzindo" v-on:mouseout="reproduzindo=false" class="gui-card__img container" v-bind:src='link'
               frameborder="0" allow="autoplay;  encrypted-media"  allowfullscreen></iframe>
      <div>
        <h1  v-if="!reproduzindo" v-on:mouseout="reproduzindo=false" style="font-size: 17px; ">{{nome}}</h1>
      </div>
    </div>

  </div>


</template>

<script>
  export default {
    name: "filme",
    props: ['nome', 'link', 'img'],
    components: {},

    data: function () {
      return {

        reproduzindo: false

      }
    },
    methods: {




    }
  }
</script>

<style lang="scss">



</style>
