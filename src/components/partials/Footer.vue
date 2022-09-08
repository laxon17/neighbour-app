<template>
    <v-footer
        dark
        padless
    >
        <v-card
            flat
            tile
            class="green lighten-1 white--text text-center"
        >
            <v-card-text>
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 white--text"
                    icon
                >
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="pa-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tenetur natus alias aliquid laborum optio rem perferendis reiciendis. Sed sit assumenda perferendis sunt quo facere dolorum ducimus. Earum, assumenda debitis asperiores ullam sint, repellendus esse praesentium alias vitae itaque dolores.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text green">
                Copyright &copy; <strong>Orchid cupcakes</strong> {{ new Date().getFullYear() }}. All rights reserved.
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'Footer',
        data() {
            return {
                icons: [
                    'mdi-facebook',
                    'mdi-twitter',
                    'mdi-linkedin',
                    'mdi-instagram',
                ],
            }
        },
    })
</script>
