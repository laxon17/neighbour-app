<template>
     <v-btn
        text
        v-bind="$attrs"
        class="green--text"
      >
        {{ text }}
      </v-btn>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'Button',
        props: ['text'],
        inheritAttrs: true
    })
</script>

<style lang="sass" scoped>
    a
      text-transform: uppercase
      text-decoration: none
      font-size: 14px
      margin-right: 10px
</style>