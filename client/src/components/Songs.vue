<template>
  <v-layout class="songs-layout">
    <v-flex xs12 sm8 offset-sm2 md10 offset-md1 lg10 offset-lg1>
      <panel title='Songs'>
        <v-btn router to='/songs/create' slot="action" fab dark medium right middle class="primary accend-2">
          <v-icon>add</v-icon>
        </v-btn>

        <div class="text-xs-center song" v-for='song in songs' :key="song.id">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>

              <div class="song-artist">
                {{song.artist}}
              </div>

              <div class="song-album">
                {{song.album}}
              </div>
            </v-flex>

            <v-flex xs6>
              <img class="album-img" :src="song.albumImg" />
            </v-flex>
          </v-layout>
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

  .song{
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }

  .song-title {
    font-size: 42px;
  }

  .song-artist {
    font-size: 24px;
  }

  .song-album {
    font-size: 18px;
  }

  .album-img {
    width: 70%;
    margin: 0 auto;
  }
</style>