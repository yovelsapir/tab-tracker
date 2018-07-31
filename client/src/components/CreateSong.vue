<template>
  <v-layout class="metadata-layout">
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-flex xs12 sm12 md10 lg10 class="mx-auto">
          <v-text-field name='title' v-model='song.title' type='text' label="Title" :rules="[rules.required]"></v-text-field>
        </v-flex>

        <v-flex xs12 sm12 md10 lg10 class="mx-auto">
          <v-text-field name='artist' v-model='song.artist' type='text' label="Artist" :rules="[rules.required]"></v-text-field>
        </v-flex>

        <v-flex xs12 sm12 md10 lg10 class="mx-auto">
          <v-text-field name='genere' v-model='song.genere' type='text' label="Genere" :rules="[rules.required]"></v-text-field>
        </v-flex>

        <v-flex xs12 sm12 md10 lg10 class="mx-auto">
          <v-text-field name='album' v-model='song.album' type='text' label="Album" :rules="[rules.required]"></v-text-field>
        </v-flex>

        <v-flex xs12 sm12 md10 lg10 class="mx-auto">
          <v-text-field name='albumImgUrl' v-model='song.albumImg' type='text' label="Album Image Url" :rules="[rules.required]"></v-text-field>
        </v-flex>


        <v-flex xs12 sm12 md10 lg10 class="mx-auto">
          <v-text-field name='youtubeId' v-model='song.youtubeId' type='text' label="Youtube ID" :rules="[rules.required]"></v-text-field>
        </v-flex>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Song Structure" class="ml-3">
        <v-flex xs12 sm12 md10 lg10 class="mx-auto">
          <v-text-field name='tab' multi-line v-model='song.tab' type='text' label="Tab"></v-text-field>
        </v-flex>
      </panel>

      <panel title="Song Lyrics" class="ml-3 mt-2">
        <v-flex xs12 sm12 md10 lg10 class="mx-auto">
          <v-text-field name='lyrics' multi-line v-model='song.lyrics' type='text' label="Lyrics"></v-text-field>
        </v-flex>
      </panel>

      <div xs12 class="mt-2">
        <div class="red--text text-xs-right mt-2 mb-2" v-if="error">{{error}}</div>
        <v-btn dark @click="createSong" color="primary" class="mr-auto d-block">Create Song</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import Panel from '@/components/Panel'
  import SongsService from '@/services/SongsService'

  export default {
    data() {
      return {
        song: {
          title: null,
          artist: null,
          genere: null,
          album: null,
          albumImg: null,
          youtubeId: null,
          lyrics: null,
          tab: null
        },
        error: null,
        rules: {
          required: (value) => !!value || 'Required.'
        }
      }
    },
    methods: {
      async createSong() {
        try {
          this.error = null

          const areAllFieildsFilledIn = Object
          .keys(this.song)
          .every(key => !!this.song[key])

          if(!areAllFieildsFilledIn){
            this.error = "Please fill in all the required fieids!"
            return;
          }

          await SongsService.post(this.song)
          this.$router.push({
            name: 'songs'
          })
        } catch (err) {
          console.log(err)
        }
      }
    },
    components: {
      Panel
    }
  }
</script>

<style scoped>
  .metadata-layout {
    margin-top: 120px;
  }
</style>