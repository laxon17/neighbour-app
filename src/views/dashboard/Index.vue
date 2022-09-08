<template>
    <v-container>
        <h1 class="white rounded-xl py-4 px-4">Your cupcakes</h1>
        <div v-if="cupcakes.length">
            <v-data-table
                :headers="headers"
                :items="cupcakes"
                :items-per-page="5"
                class="elevation-1 rounded-xl my-6"
            ></v-data-table>
        </div>
        <p v-else class="mx-5 my-3 font-weight-bold">You haven't crafted any cupcakes yet!</p>
    </v-container>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { mapGetters } from 'vuex'

    export default Vue.extend({
        name: 'Index',

        data() {
            return {
                headers: [
                    {
                        text: 'Id',
                        align: 'start',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Wrapper', value: 'wrapper.name' },
                    { text: 'Cake', value: 'cake.name' },
                    { text: 'Frosting', value: 'frosting.name' },
                    { text: 'Topping', value: 'topping.name' }
                ]
            }
        },

        created() {
            this.$store.dispatch('getUserCupcakes')
        },

         computed: {
            ...mapGetters(['cupcakes', 'ingredients'])
        }
    })
</script>

<style scoped>

</style>