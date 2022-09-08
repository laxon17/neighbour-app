<template>
  <v-container>
    <h1 class="text-center green--text mb-16">Welcome</h1>
    <v-row>
      <v-col lg="5" xl="5" offset-lg="1" offset-xl="1" class="pa-0 mr-6 mb-6">
        <Carousel />
      </v-col>
      <v-col lg="5" xl="5" class="grey lighten-4 pa-6 rounded-xl mt-8">
        <h1 class="green--text mb-4">Orchid cupcakes</h1>
        <v-card-text class="text-body-1 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse expedita deleniti ad, 
          aliquid quod possimus mollitia quas necessitatibus debitis minima perferendis saepe cupiditate 
          ex quidem ab porro nam labore. Velit asperiores id in est. Modi, excepturi? Dolor, dolore optio? 
          Rem suscipit quae quisquam delectus asperiores corrupti, eius aliquam, ducimus vitae deleniti saepe 
          nobis qui explicabo id voluptatem omnis, quibusdam quis eveniet earum non expedita eum nulla accusantium! 
          Fuga soluta, pariatur similique neque voluptate ea autem reiciendis doloribus dignissimos ratione, porro cum 
          iure nisi facilis laboriosam magni beatae voluptas id magnam veritatis esse, vel unde nulla sed. Maxime, ducimus quasi?
        </v-card-text>
        <h2 class="ml-4 font-weight-light">
          <router-link class="green--text" to="/login">Log In</router-link>
          or
          <router-link class="green--text" to="/register">register</router-link>
          to order custom cupcakes!
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Carousel from '@/components/Carousel'

  export default Vue.extend({
    name: 'Home',

    components: {
      Carousel
    }
  })
</script>

<style lang="sass" scoped>
  h1
    font-family: 'Pacifico', cursive
    font-size: 32px
</style>