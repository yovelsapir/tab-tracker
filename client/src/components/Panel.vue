<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="primary" dark>
      <v-toolbar-title class="white--text w-100 text-center">{{title}}</v-toolbar-title>
      <slot name="action" />
    </v-toolbar>

    <div class="pl-4 pr-4 pt-2 pb-3">
      <slot>
        Not slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'title'
    ]
  }
</script>

<style scoped>
</style>