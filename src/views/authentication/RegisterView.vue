<template>
    <v-container class="pt-4">
        <form 
            @submit.prevent
        >
            <v-col sm="10" md="8" lg="6" xl="4" class="transparent__background pa-16 rounded-xl mx-auto">
                <v-row>
                    <h1 class="mb-6">Register</h1>
                </v-row>
                <v-row class="mb-4">
                    <v-text-field
                        v-model="user.name"
                        label="Full name"
                        type="text"
                        :rules="rules"
                    ></v-text-field>
                </v-row>
                <v-row class="mb-4">
                    <v-text-field
                        v-model="user.email"
                        label="Email"
                        type="email"
                        :rules="rules"
                    ></v-text-field>
                </v-row>
                
                <v-row class="mb-4">
                    <v-text-field
                        v-model="user.password"
                        label="Password"
                        type="password"
                        :rules="rules"
                    ></v-text-field>
                </v-row>
                
                <v-row class="mb-4">
                    <v-col lg="6" class="pa-0">
                         <v-text-field
                            v-model="user.phone"
                            label="Phone"
                            type="text"
                            :rules="rules"
                        ></v-text-field>
                    </v-col>
                    <v-col lg="5" offset-lg="1" class="pa-0">   
                        <v-menu
                            v-model="menu2"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="user.birth_date"
                                    label="Date of birth"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="user.birth_date"
                                @input="menu2 = false"
                            ></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>

                <v-row>
                    <v-btn
                        color="success"
                        elevation="2"
                        @click="attemptRegister"
                    >
                        Register
                    </v-btn>
                </v-row>
            </v-col>
        </form>
    </v-container>
</template>

<script lang="ts">
    import RequestHandler from '@/services/RequestHandler'

    export default {
        name: 'RegisterView',
        data() {
            return {
                user: {
                    name: 'Lazar Lalovic',
                    email: 'laxon@example.com',
                    password: 'La',
                    birth_date: '2022-08-28',
                    phone: '+381649238252'
                },

                menu2: false,

                rules: [
                    value => !!value || 'Required'
                ]
            }
        },

        methods: {
            attemptRegister() {
                this.$store.dispatch('register', this.user)
            }
        }
    }
</script>