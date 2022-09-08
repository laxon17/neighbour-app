<template>
    <v-container class="pt-16">
        <form 
            @submit.prevent
        >
            <v-row>
                <v-col lg="4" class="transparent__background pa-16 rounded-xl mx-auto">
                    <v-row>
                        <h1 class="mb-6">Log in</h1>
                    </v-row>
                    <v-row>
                        <v-text-field
                            v-model="user.email"
                            label="Email"
                            type="email"
                            :rules="rules"
                        ></v-text-field>
                    </v-row>
                    <v-row class="mb-6">
                        <v-text-field
                            v-model="user.password"
                            type="password"
                            label="Password"
                            :rules="rules"
                        >
                        </v-text-field>
                    </v-row>
                    <v-row>
                        <v-btn
                            color="success"
                            elevation="2"
                            @click="attemptLogin"
                        >
                            Log In
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </form>
    </v-container>
</template>

<script lang="ts">
    import RequestHandler from '@/services/RequestHandler'
    
    export default {
        name: 'LoginView',
        data() {
            return {
                user: {
                    email: 'laxon@example.com',
                    password: 'laxonche'
                },

                rules: [
                    value => !!value || 'Required.',
                ],
            }
        },

        methods: {
            attemptLogin() {
                this.$store.dispatch('login', this.user)
            }
        }
    }
</script>