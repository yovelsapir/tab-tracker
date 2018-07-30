<template>
  <div id="app">
    <v-app>
      <page-header/>
      <main>
        <v-container fluid>
          <transition name='router-anim' enter-active-class="animated zoomIn">
            <router-view/>
          </transition>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
  import PageHeader from '@/components/Header.vue'

  export default {
    name: 'App',
    components: {
      PageHeader
    }
  }
</script>

<!-- GLOBAL STYLE -->
<style>
</style>