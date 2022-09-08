<template>
    <div class="d-flex align-center" >
        <router-link to="/">
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-3"
                contain
                id="logo"
                :src="require('@/assets/logo.png')"
                width="60"
            />
        </router-link>
        <h1 class="green--text">
            Orchid
        </h1>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style scoped lang="sass">
    h1
        font-family: 'Pacifico', cursive
    #logo
        transition: all 400ms ease
        &:hover
            transform: rotate(360deg)
</style>