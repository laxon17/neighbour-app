<template>
    <v-container>
        <h1 class="white rounded-xl py-4 px-4">Drag and drop ingredients</h1>
        <v-row
            class="pt-16"
        >
            <v-col
                lg="7"
            >
                <div class="cupcake__container">
                    <div class="cupcake">
                        <div 
                            class="cupcake__topping cupcake__part"
                            @drop="onToppingDrop($event)"
                            @dragenter.prevent
                            @dragover.prevent
                        >
                        </div>
                        <div 
                            class="cupcake__frosting cupcake__part"
                            @drop="onFrostingDrop($event)"
                            @dragenter.prevent
                            @dragover.prevent
                        >
                            <span></span>
                        </div>
                        <div class="cupcake__cake cupcake__part"
                            @drop="onCakeDrop($event)"
                            @dragenter.prevent
                            @dragover.prevent
                        >
                        </div>
                        <div 
                            class="cupcake__wrapper cupcake__part"
                            @drop="onWrapperDrop($event)"
                            @dragenter.prevent
                            @dragover.prevent
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col
                lg="5"
            >
                <v-card>
                    <v-tabs
                        color="green accent-4"
                    >
                        <v-tab>Wrapper</v-tab>
                        <v-tab>Cake</v-tab>
                        <v-tab>Frosting</v-tab>
                        <v-tab>Topping</v-tab>

                        <v-tab-item
                            v-for="ingredient in ingredients"
                            :key="ingredient.id"
                        >
                            <v-container fluid>
                                <v-row>
                                    <v-col
                                        v-for="property in ingredient"
                                        :key="property.id"
                                        cols="12"
                                        md="4"
                                    >
                                        <v-img
                                            class="ingredient__image"
                                            :src="require(`@/assets/ingredients/${property.thumbnail}`)"
                                            aspect-ratio="1"
                                            draggable="true"
                                            @dragstart="onDragStart($event, property, property.id)"
                                        ></v-img>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
                
                <v-btn class="green white--text my-6 mr-2" @click="submitCupcake">Create</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { mapGetters } from 'vuex'

    export default Vue.extend({
        name: 'Create',

        mounted() {
            this.$store.dispatch('getIngredients')
        },

        methods: {
            onDragStart(event, wrapper, ingredient) {
                
                event.dataTransfer.dropEffect = 'move'
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.setData('ingredientId', ingredient)
            },

            onWrapperDrop(event) {
                const wrapperId = event.dataTransfer.getData('ingredientId')
                const wrapperObject = this.ingredients.wrapper.find(wrap => wrap.id == wrapperId)
                let dropZones = event.path[1].children
                for(let zone of dropZones) {
                    let location = require(`../../assets/ingredients/${wrapperObject.thumbnail}`)
                    let url = `url(\'${location}\')`
                    zone.style.backgroundImage = url
                    zone.style.border = 'none'
                }
                this.cupcake.wrap_id = wrapperId
            },

            onCakeDrop(event) {
                const cakeId = event.dataTransfer.getData('ingredientId')
                const cakeObject = this.ingredients.cake.find(cake => cake.id == cakeId)
                let dropZone = event.path[1].children[2]
                let location = require(`../../assets/ingredients/${cakeObject.thumbnail}`)
                let url = `url(\'${location}\')`
                dropZone.style.backgroundImage = url
                dropZone.style.border = 'none'
                this.cupcake.cake_id = cakeId         
            },

            onFrostingDrop(event) {
                const frostingId = event.dataTransfer.getData('ingredientId')
                const frostingObject = this.ingredients.frosting.find(frosting => frosting.id == frostingId)
                let dropZone = event.path[1].children[1]
                let location = require(`../../assets/ingredients/${frostingObject.thumbnail}`)
                let url = `url(\'${location}\')`
                dropZone.style.backgroundImage = url
                dropZone.style.border = 'none'
                this.cupcake.frosting_id = frostingId
            },

            onToppingDrop(event) {
                const toppingId = event.dataTransfer.getData('ingredientId')
                const toppingObject = this.ingredients.topping.find(topping => topping.id == toppingId)
                let dropZone = event.path[0]
                let location = require(`../../assets/ingredients/${toppingObject.thumbnail}`)
                let url = `url(\'${location}\')`
                dropZone.style.backgroundImage = url
                dropZone.style.border = 'none'
                this.cupcake.topping_id = toppingId            
            },

            submitCupcake() {
                if(
                    this.cupcake.topping_id == null ||
                    this.cupcake.frosting_id == null ||
                    this.cupcake.cake_id == null ||
                    this.cupcake.wrap_id == null
                ) {
                    console.log('dodajte sve sastojke')
                    return
                }
                this.$store.dispatch('createCupcake', this.cupcake)
            }
        },

        data() {
            return {
                cupcake: {
                    wrap_id: null,
                    cake_id: null,
                    frosting_id: null,
                    topping_id: null
                }
            }
        },

        computed: {
            ...mapGetters(['ingredients'])
        }
    })
</script>

<style lang="sass" scoped>
    .ghost 
        display: none
    .cupcake__container
        height: 500px
        .cupcake
            border-radius: 20px
            position: relative
            width: 100%
            height: 100%    
            background-color: white
            .cupcake__wrapper,
            .cupcake__cake,
            .cupcake__frosting,
            .cupcake__topping
                position: absolute
                background-position: center
                left: 50%
                translate: -50%
            .cupcake__cake,
            .cupcake__frosting
                border: 1px dashed grey
                background-color: white
            .cupcake__wrapper
                box-shadow: 0px 15px 10px 1px lightgrey
                border-bottom-left-radius: 300px 500px
                border-bottom-right-radius: 300px 500px
                border-top-color: transparent
                width: 250px
                height: 125px
                bottom: 75px
                overflow: hidden
                span
                    $width: calc(250px / 8)
                    position: absolute
                    border-radius: 150px
                    border: 1px dashed grey
                    bottom: -15px
                    width: $width
                    height: 135px
                    background-color: white
                    &:first-of-type
                        left: 0
                    @for $i from 2 through 8
                        &:nth-child(n + #{$i})
                            left: calc(31px * ($i - 1))
            .cupcake__cake
                width: 250px
                height: 100px
                bottom: 150px
                border-radius: 50px
            .cupcake__frosting
                border-radius: 50px
                width: 200px
                height: 100px
                bottom: 220px
            .cupcake__topping
                width: 100px
                height: 100px
                border: 1px dashed grey
                border-radius: 50%
                overflow: initial
                top: 90px

                
                
                   
</style>