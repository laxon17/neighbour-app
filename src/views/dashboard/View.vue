<template>
    <v-container>
        <v-col 
            lg="12" 
            class="rounded-xl mb-16 py-12 dashboard__container"
        >
            <router-view></router-view>
        </v-col>
    </v-container>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'View',
    })
</script>

<style lang="sass" scoped>
    .dashboard__container
        background-color: rgba(210, 210, 210, .75)
</style>