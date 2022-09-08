<template>
  <v-app>
    
    <NavigationBar />

    <v-main id="backgroundHolder">
      <v-container>
        <router-view class="my-16"/>
      </v-container>
    </v-main>

    <Footer />

  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  import NavigationBar from '@/components/partials/NavigationBar'
  import Footer from '@/components/partials/Footer'

  export default Vue.extend({
    name: 'App',

    components: {
      NavigationBar,
      Footer
    },

    data () {
      return {}
    },

    
  })
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap')
  button, a
    font-family: 'Pacifico', cursive
  #backgroundHolder
    background-image: url('assets/orchid.jpg')
    background-repeat: no-repeat
    background-attachment: fixed
    background-position: 8% 10%
    background-size: 900px 900px
  .transparent__background
    box-shadow: 0 0 10px 1px lightgrey
    background-color: rgba(255, 255, 255, .85)
</style>