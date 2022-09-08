<template>
    <v-app-bar
        app
    >
        <v-row class="d-flex align-center">
            <v-col lg="1" offset="1">
                <Logo/>
            </v-col>
            <v-col offset="7" lg="2" class="d-flex align-center">
                <v-row justify="space-around">
                    <v-menu
                        rounded="b-xl"
                        transition="scale-transition"
                        open-on-hover
                        offset-y
                    >
                        <template v-slot:activator="{ attrs, on }">
                            <v-btn
                                color="green"
                                class="white--text ma-5"
                                v-bind="attrs"
                                v-on="on"
                            >
                              {{ navTitle }} 
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item
                                v-for="(link, index) in links"
                                :key="index"
                                :to="link.path"
                            >
                                <v-list-item-title v-text="link.title"></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-row>
                <v-btn
                    v-if="loggedIn"
                    @click="logOut"
                >
                    Log out
                </v-btn>
            </v-col>
        </v-row>
        
    </v-app-bar>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Button from '../form/Button.vue'
    import Logo from '../Logo.vue'
    import { mapGetters } from 'vuex'

    export default Vue.extend({
        name: 'NavigationBar',

        methods: {
            logOut() {
                this.$store.dispatch('logout')
            }
        },

        components: {
            Button,
            Logo
        },

        computed: {
            ...mapGetters(['loggedIn', 'user']),

            navTitle() {
                if(this.loggedIn) return this.user.name
                return 'Welcome'
            },

            links() {
                if(this.loggedIn)  return [
                        { title: 'Dashboard', path: '/dashboard' },
                        { title: 'Orders', path: '/dashboard/orders' },
                        { title: 'Create', path: '/dashboard/workshop' }
                    ]
                return [
                    { title: 'Log in', path: '/login' },
                    { title: 'Register', path: '/register' }
                ]
            }
        }
    })
</script>
