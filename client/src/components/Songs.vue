<template>
  <v-layout class="songs-layout">
    <v-flex xs12 sm8 offset-sm2 md10 offset-md1 lg10 offset-lg1>
      <panel title='Songs'>
        <div v-for='song in songs' :key="song.id">
          {{song.title}} - {{song.artist}} - {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import SongsService from '@/services/SongsService'
  import Panel from '@/components/Panel'
  export default {
    components: {
      Panel
    },
    data() {
      return {
        songs: null
      }
    },
    async mounted() {
      // do a request the to backend for all the songs
      this.songs = (await SongsService.index()).data
      console.log(this.songs)
    }
  }
</script>

<style scoped>
  .songs-layout {
    margin-top: 120px;
  }
</style>