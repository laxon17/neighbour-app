<template>
    <v-carousel
        cycle
        :show-arrows="false"
        :interval="5000"
        class="rounded-xl"
    >
        <v-carousel-item
            v-for="(item,index) in items"
            :key="index"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
        ></v-carousel-item>
    </v-carousel>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        data () {
            return {
                items: [
                    {
                        src: 'https://www.schaer.com/sites/default/files/styles/landscape_xxl/public/1856_Vanilla%20Cupcakes.jpg',
                    },
                    {
                        src: 'https://img.delicious.com.au/iXOECEmP/w1200/del/2018/01/gluten-free-cupcake-lamingtons-71513-3.jpg',
                    },
                    {
                        src: 'https://www.kingarthurbaking.com/sites/default/files/2022-03/Tiramisu-Cupcakes_22-2_10.jpg',
                    },
                    {
                        src: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/cupcakes_93722_16x9.jpg',
                    },
                ],
            }
        },
    })
</script>

<style scoped>

</style>